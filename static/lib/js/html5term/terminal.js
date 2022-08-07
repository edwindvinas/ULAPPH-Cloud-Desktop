/*
Copyright 2011 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

Author: Eric Bidelman (ericbidelman@chromium.org)
*/

var util = util || {};
util.toArray = function(list) {
  return Array.prototype.slice.call(list || [], 0);
};

// Cross-browser impl to get document's height.
util.getDocHeight = function() {
  var d = document;
  return Math.max(
      Math.max(d.body.scrollHeight, d.documentElement.scrollHeight),
      Math.max(d.body.offsetHeight, d.documentElement.offsetHeight),
      Math.max(d.body.clientHeight, d.documentElement.clientHeight)
  );
};


// TODO(ericbidelman): add fallback to html5 audio.
function Sound(opt_loop) {
  var self_ = this;
  var context_ = null;
  var source_ = null;
  var loop_ = opt_loop || false;

  window.AudioContext = window.AudioContext || window.webkitAudioContext;
  if (window.AudioContext) {
    context_ = new window.AudioContext();
  }

  this.load = function(url, mixToMono, opt_callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'arraybuffer';
    xhr.onload = function() {
      if (context_) {
        /*self_.sample = context_.createBuffer(this.response, mixToMono);
        if (opt_callback) {
          opt_callback();
        }
        */
        context_.decodeAudioData(this.response, function(audioBuffer) {
          self_.sample = audioBuffer;
          opt_callback && opt_callback();
        }, function(e) {
          console.log(e);
        });
      }
    };
    xhr.send();
  };

  this.play = function() {
    if (context_) {
      source_ = context_.createBufferSource();
      source_.buffer = self_.sample;
      source_.looping = loop_;
      source_.connect(context_.destination);
      source_.noteOn(0);
    }
  };

  this.stop = function() {
    if (source_) {
      source_.noteOff(0);
      source_.disconnect(0);
    }
  };
}

var Terminal = Terminal || function(containerId) {
  window.URL = window.URL || window.webkitURL;
  window.requestFileSystem = window.requestFileSystem ||
                             window.webkitRequestFileSystem;

  const VERSION_ = '1.0.0';
  const CMDS_ = [
    '3d', 'cat', 'cd', 'cp', 'clear', 'curl', 'date', 'help', 'install', 'ls', 'mkdir',
    'mv', 'open', 'pwd', 'rm', 'rmdir', 'theme', 'version', 'who', 'wget'
  ];
  const THEMES_ = ['default', 'cream'];

  var fs_ = null;
  var cwd_ = null;
  var history_ = [];
  var histpos_ = 0;
  var histtemp_ = 0;

  var timer_ = null;
  var magicWord_ = null;

  var fsn_ = null;
  var is3D_ = false;

  // Fire worker to return recursive snapshot of current FS tree.
  var worker_ = new Worker('/lib/js/html5term/worker.js');
  worker_.onmessage = function(e) {
    var data = e.data;
    if (data.entries) {
      fsn_.contentWindow.postMessage({cmd: 'build', data: data.entries},
                                     window.location.origin);
    }
    if (data.msg) {
      output('<div>' + data.msg + '</div>');
    }
  };
  worker_.onerror = function(e) { console.log(e) };

  // Create terminal and cache DOM nodes;
  var container_ = document.getElementById(containerId);
  container_.insertAdjacentHTML('beforeEnd',
      ['<output></output>',
       '<div id="input-line" class="input-line">',
       '<div class="prompt">$&gt;</div><div><input class="cmdline" autofocus /></div>',
       '</div>'].join(''));
  var cmdLine_ = container_.querySelector('#input-line .cmdline');
  var output_ = container_.querySelector('output');
  var interlace_ = document.querySelector('.interlace');
  var bell_ = new Sound(false);
  bell_.load('beep.mp3', false);

  // Hackery to resize the interlace background image as the container grows.
  output_.addEventListener('DOMSubtreeModified', function(e) {
    var docHeight = util.getDocHeight();
    document.documentElement.style.height = docHeight + 'px';
    //document.body.style.background = '-webkit-radial-gradient(center ' + (Math.round(docHeight / 2)) + 'px, contain, rgba(0,75,0,0.8), black) center center no-repeat, black';
    interlace_.style.height = docHeight + 'px';
    setTimeout(function() { // Need this wrapped in a setTimeout. Chrome is jupming to top :(
      //window.scrollTo(0, docHeight);
      cmdLine_.scrollIntoView();
    }, 0);
    //window.scrollTo(0, docHeight);
  }, false);

  output_.addEventListener('click', function(e) {
    var el = e.target;
    if (el.classList.contains('file') || el.classList.contains('folder')) {
      cmdLine_.value += ' ' + el.textContent;
    }
  }, false);

  window.addEventListener('click', function(e) {
    //if (!document.body.classList.contains('offscreen')) {
      cmdLine_.focus();
    //}
  }, false);

  // Always force text cursor to end of input line.
  cmdLine_.addEventListener('click', inputTextClick_, false);

  // Handle up/down key presses for shell history and enter for new command.
  cmdLine_.addEventListener('keydown', keyboardShortcutHandler_, false);
  cmdLine_.addEventListener('keyup', historyHandler_, false); // keyup needed for input blinker to appear at end of input.
  cmdLine_.addEventListener('keydown', processNewCommand_, false);

  /*window.addEventListener('beforeunload', function(e) {
    return "Don't leave me!";
  }, false);*/

  function inputTextClick_(e) {
    this.value = this.value;
  }

  function keyboardShortcutHandler_(e) {
    // Toggle CRT screen flicker.
    if ((e.ctrlKey || e.metaKey) && e.keyCode == 83) { // crtl+s
      container_.classList.toggle('flicker');
      output('<div>Screen flicker: ' +
             (container_.classList.contains('flicker') ? 'on' : 'off') +
             '</div>');
      e.preventDefault();
      e.stopPropagation();
    }
  }

  function selectFile_(el) {
    alert(el)
  }

  function historyHandler_(e) { // Tab needs to be keydown.

    if (history_.length) {
      if (e.keyCode == 38 || e.keyCode == 40) {
        if (history_[histpos_]) {
          history_[histpos_] = this.value;
        } else {
          histtemp_ = this.value;
        }
      }

      if (e.keyCode == 38) { // up
        histpos_--;
        if (histpos_ < 0) {
          histpos_ = 0;
        }
      } else if (e.keyCode == 40) { // down
        histpos_++;
        if (histpos_ > history_.length) {
          histpos_ = history_.length;
        }
      }

      if (e.keyCode == 38 || e.keyCode == 40) {
        this.value = history_[histpos_] ? history_[histpos_] : histtemp_;
        this.value = this.value; // Sets cursor to end of input.
      }
    }
  }

  function processNewCommand_(e) {

    // Beep on backspace and no value on command line.
    if (!this.value && e.keyCode == 8) {
      bell_.stop();
      bell_.play();
      return;
    }

    if (e.keyCode == 9) { // Tab
      e.preventDefault();
      // TODO(ericbidelman): Implement tab suggest.
    } else if (e.keyCode == 13) { // enter

      // Save shell history.
      if (this.value) {
        history_[history_.length] = this.value;
        histpos_ = history_.length;
      }

      // Duplicate current input and append to output section.
      var line = this.parentNode.parentNode.cloneNode(true);
      line.removeAttribute('id')
      line.classList.add('line');
      var input = line.querySelector('input.cmdline');
      input.autofocus = false;
      input.readOnly = true;
      output_.appendChild(line);

      // Parse out command, args, and trim off whitespace.
      // TODO(ericbidelman): Support multiple comma separated commands.
      if (this.value && this.value.trim()) {
        var args = this.value.split(' ').filter(function(val, i) {
          return val;
        });
        var cmd = args[0].toLowerCase();
        args = args.splice(1); // Remove cmd from arg list.
      }

      switch (cmd) {
        case '3d':
          clear_(this);
          output('Hold on to your butts!');
          toggle3DView_();
          break;
        case 'cat':
          var fileName = args.join(' ');

          if (!fileName) {
            output('usage: ' + cmd + ' filename');
            break;
          }

          read_(cmd, fileName, function(result) {
            output('<pre>' + result + '</pre>');
          });

          break;
        case 'clear':
          clear_(this);
          return;
        case 'date':
          output((new Date()).toLocaleString());
          break;
        case 'exit':
          if (is3D_) {
            toggle3DView_();
          }
          if (timer_ != null) {
            magicWord_.stop();
            clearInterval(timer_);
          }
          break;
        case 'help':
          output('<div class="ls-files">' + CMDS_.join('<br>') + '</div>');
          output('<p>Add files by dragging them from your desktop.</p>');
          break;
        case 'install':
          // Check is installed.
          if (window.chrome && window.chrome.app) {
            if (!window.chrome.app.isInstalled) {
              try {
                chrome.app.install();
              } catch(e) {
                alert(e + '\nEnable is about:flags');
              }
            } else {
              output('This app is already installed.');
            }
          }
          break;
        case 'ls':
          ls_(function(entries) {
            if (entries.length) {
              var html = formatColumns_(entries);
              util.toArray(entries).forEach(function(entry, i) {
                html.push(
                    '<span class="', entry.isDirectory ? 'folder' : 'file',
                    '">', entry.name, '</span><br>');
              });
              html.push('</div>');
              output(html.join(''));
            }
          });
          break;
        case 'pwd':
          output(cwd_.fullPath);
          break;
        case 'cd':
          var dest = args.join(' ') || '/';

          cwd_.getDirectory(dest, {}, function(dirEntry) {
            cwd_ = dirEntry;
            output('<div>' + dirEntry.fullPath + '</div>');

            // Tell FSN visualizer that we're cd'ing.
            if (fsn_) {
              fsn_.contentWindow.postMessage({cmd: 'cd', data: dest}, location.origin);
            }

          }, function(e) { invalidOpForEntryType_(e, cmd, dest); });

          break;
        case 'mkdir':
          var dashP = false;
          var index = args.indexOf('-p');
          if (index != -1) {
            args.splice(index, 1);
            dashP = true;
          }

          if (!args.length) {
            output('usage: ' + cmd + ' [-p] directory<br>');
            break;
          }

          // Create each directory passed as an argument.
          args.forEach(function(dirName, i) {
            if (dashP) {
              var folders = dirName.split('/');

              // Throw out './' or '/' if present on the beginning of our path.
              if (folders[0] == '.' || folders[0] == '') {
                folders = folders.slice(1);
              }

              createDir_(cwd_, folders);
            } else {
              cwd_.getDirectory(dirName, {create: true, exclusive: true}, function() {
                // Tell FSN visualizer that we're mkdir'ing.
                if (fsn_) {
                  fsn_.contentWindow.postMessage({cmd: 'mkdir', data: dirName}, location.origin);
                }
              }, function(e) { invalidOpForEntryType_(e, cmd, dirName); });
            }
          });
          break;
        case 'cp':
        case 'mv':
          var src = args[0];
          var dest = args[1];

          if (!src || !dest) {
            output(['usage: ', cmd, ' source target<br>',
                   '&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;', cmd,
                   ' source directory/'].join(''));
            break;
          }

          var runAction = function(cmd, srcDirEntry, destDirEntry, opt_newName) {
            var newName = opt_newName || null;
            if (cmd == 'mv') {
                srcDirEntry.moveTo(destDirEntry, newName);
              } else {
                srcDirEntry.copyTo(destDirEntry, newName);
              }
          };

          // Moving to a folder? (e.g. second arg ends in '/').
          if (dest[dest.length - 1] == '/') {
            cwd_.getDirectory(src, {}, function(srcDirEntry) {
              // Create blacklist for dirs we can't re-create.
              var create = [
                '.', './', '..', '../', '/'].indexOf(dest) != -1 ? false : true;

              cwd_.getDirectory(dest, {create: create}, function(destDirEntry) {
                runAction(cmd, srcDirEntry, destDirEntry);
              }, errorHandler_);
            }, function(e) {
              // Try the src entry as a file instead.
              cwd_.getFile(src, {}, function(srcDirEntry) {
                cwd_.getDirectory(dest, {}, function(destDirEntry) {
                  runAction(cmd, srcDirEntry, destDirEntry);
                }, errorHandler_);
              }, errorHandler_);
            });
          } else { // Treat src/destination as files.
            cwd_.getFile(src, {}, function(srcFileEntry) {
              srcFileEntry.getParent(function(parentDirEntry) {
                runAction(cmd, srcFileEntry, parentDirEntry, dest);
              }, errorHandler_);
            }, errorHandler_);
          }

          break;
        case 'open':
          var fileName = args.join(' ');

          if (!fileName) {
            output('usage: ' + cmd + ' filename');
            break;
          }

          open_(cmd, fileName, function(fileEntry) {
            var myWin = window.open(fileEntry.toURL(), 'mywin');
          });

          break;
        case 'init':
          if (worker_) {
            worker_.postMessage({cmd: 'init', type: type_, size: size_});
          }
          break;
        case 'rm':
          // Remove recursively? If so, remove the flag(s) from the arg list.
          var recursive = false;
          ['-r', '-f', '-rf', '-fr'].forEach(function(arg, i) {
            var index = args.indexOf(arg);
            if (index != -1) {
              args.splice(index, 1);
              recursive = true;
            }
          });

          // Remove each file passed as an argument.
          args.forEach(function(fileName, i) {
            cwd_.getFile(fileName, {}, function(fileEntry) {
              fileEntry.remove(function() {
                // Tell FSN visualizer that we're rm'ing.
                if (fsn_) {
                  fsn_.contentWindow.postMessage({cmd: 'rm', data: fileName}, location.origin);
                }
              }, errorHandler_);
            }, function(e) {
              if (recursive && e.code == FileError.TYPE_MISMATCH_ERR) {
                cwd_.getDirectory(fileName, {}, function(dirEntry) {
                  dirEntry.removeRecursively(null, errorHandler_);
                }, errorHandler_);
              } else if (e.code == FileError.INVALID_STATE_ERR) {
                output(cmd + ': ' + fileName + ': is a directory<br>');
              } else {
                errorHandler_(e);
              }
            });
          });
          break;
        case 'rmdir':
          // Remove each directory passed as an argument.
          args.forEach(function(dirName, i) {
            cwd_.getDirectory(dirName, {}, function(dirEntry) {
              dirEntry.remove(function() {
                // Tell FSN visualizer that we're rmdir'ing.
                if (fsn_) {
                  fsn_.contentWindow.postMessage({cmd: 'rm', data: dirName}, location.origin);
                }
              }, function(e) {
                if (e.code == FileError.INVALID_MODIFICATION_ERR) {
                  output(cmd + ': ' + dirName + ': Directory not empty<br>');
                } else {
                  errorHandler_(e);
                }
              });
            }, function(e) { invalidOpForEntryType_(e, cmd, dirName); });
          });
          break;
        case 'sudo':
          if (timer_ != null) {
            magicWord_.stop();
            clearInterval(timer_);
          }
          if (!magicWord_) {
            magicWord_ = new Sound(true);
            magicWord_.load('magic_word.mp3', false, function() {
              magicWord_.play();
            });
          } else {
            magicWord_.play();
          }
          timer_ = setInterval(function() {
            output("<div>YOU DIDN'T SAY THE MAGIC WORD!</div>");
          }, 100);
          break;
        case 'theme':
          var theme = args.join(' ');
          if (!theme) {
            output(['usage: ', cmd, ' ' + THEMES_.join(',')].join(''));
          } else {
            if (THEMES_.indexOf(theme) != -1) {
              setTheme_(theme);
            } else {
              output('Error - Unrecognized theme used');
            }
          }
          break;
        case 'version':
        case 'ver':
          output(VERSION_);
          break;
        case 'wget':
          var url = args[0];
          if (!url) {
            output(['usage: ', cmd, ' missing URL'].join(''));
            break;
          } else if (url.search('^http://') == -1) {
            url = 'http://' + url;
          }
          var xhr = new XMLHttpRequest();
          xhr.onload = function(e) {
            if (this.status == 200 && this.readyState == 4) {
              output('<textarea>' + this.response + '</textarea>');
            } else {
              output('ERROR: ' + this.status + ' ' + this.statusText);
            }
          };
          xhr.onerror = function(e) {
            output('ERROR: ' + this.status + ' ' + this.statusText);
            output('Could not fetch ' + url);
          };
          xhr.open('GET', url, true);
          xhr.send();
          break;
        case 'who':
          output(document.title +
                 ' - By: Eric Bidelman &lt;ericbidelman@chromium.org&gt;');
          break;
        case 'curl':
		  //curl -X POST --header 'Content-Type: application/json' --header 'Accept: application/json' --header 'Authorization: veaimtcon0srgb6jl7xdcqw9hezf5po3' 'http://edwin-daen-vinas.appspot.com/commands?CMD_FUNC=scrape&selector=sdasdad&extract_images=Y&extract_links=Y&extract_text=Y'	
		  
          var url = args[0];
          if (!url) {
            output(['usage: ', cmd, ' use CURL syntax'].join(''));
            break;
          }
		  var req = extractRelevantPieces(this.value);
		  console.log("extractRelevantPieces(req): ", req);
		  
			if (req.headers.length == 0 && !req.data.ascii && !req.data.files && !req.basicauth) {
				renderSimple(req.method, req.url);
		  
			} else {
				renderComplex(req);
			}
          break;
		  
        default:
          if (cmd) {
            output(cmd + ': command not found');
          }
      };

      this.value = ''; // Clear/setup line for next input.
    }
  }

	function extractRelevantPieces(cmd) {
		console.log(cmd);
		console.log("extractRelevantPieces");
		
		var boolOptions = ['#', 'progress-bar', '-', 'next', '0', 'http1.0', 'http1.1', 'http2',
			'no-npn', 'no-alpn', '1', 'tlsv1', '2', 'sslv2', '3', 'sslv3', '4', 'ipv4', '6', 'ipv6',
			'a', 'append', 'anyauth', 'B', 'use-ascii', 'basic', 'compressed', 'create-dirs',
			'crlf', 'digest', 'disable-eprt', 'disable-epsv', 'environment', 'cert-status',
			'false-start', 'f', 'fail', 'ftp-create-dirs', 'ftp-pasv', 'ftp-skip-pasv-ip',
			'ftp-pret', 'ftp-ssl-ccc', 'ftp-ssl-control', 'g', 'globoff', 'G', 'get',
			'ignore-content-length', 'i', 'include', 'I', 'head', 'j', 'junk-session-cookies',
			'J', 'remote-header-name', 'k', 'insecure', 'l', 'list-only', 'L', 'location',
			'location-trusted', 'metalink', 'n', 'netrc', 'N', 'no-buffer', 'netrc-file',
			'netrc-optional', 'negotiate', 'no-keepalive', 'no-sessionid', 'ntlm', 'O',
			'remote-name', 'oauth2-bearer', 'p', 'proxy-tunnel', 'path-as-is', 'post301', 'post302',
			'post303', 'proxy-anyauth', 'proxy-basic', 'proxy-digest', 'proxy-negotiate',
			'proxy-ntlm', 'q', 'raw', 'remote-name-all', 's', 'silent', 'sasl-ir', 'S', 'show-error',
			'ssl', 'ssl-reqd', 'ssl-allow-beast', 'ssl-no-revoke', 'socks5-gssapi-nec', 'tcp-nodelay',
			'tlsv1.0', 'tlsv1.1', 'tlsv1.2', 'tr-encoding', 'trace-time', 'v', 'verbose', 'xattr',
			'h', 'help', 'M', 'manual', 'V', 'version'];

		if (!cmd.trim())
			return;
		var cmd = parseCommand(cmd, { boolFlags: boolOptions });
		console.log(cmd);
		
		//if (cmd._[0] != "curl")
		//	throw "Not a curl command";
	
		var relevant = {
			url: "",
			method: "",
			headers: [],
			data: {}
		};

		// prefer --url over unnamed parameter, if it exists; keep first one only
		if (cmd.url && cmd.url.length > 0) {
			relevant.url = cmd.url[0];
		} else if (cmd._.length > 1) {
			relevant.url = cmd._[1]; // position 1 because index 0 is the curl command itself
	    }

		// gather the headers together
		if (cmd.H)
			relevant.headers = relevant.headers.concat(cmd.H);
		if (cmd.header)
			relevant.headers = relevant.headers.concat(cmd.header);

		// set method to HEAD?
		if (cmd.I || cmd.head)
			relevant.method = "HEAD";

		// between -X and --request, prefer the long form I guess
		if (cmd.request && cmd.request.length > 0)
			relevant.method = cmd.request[cmd.request.length-1].toUpperCase();
		else if (cmd.X && cmd.X.length > 0)
			relevant.method = cmd.X[cmd.X.length-1].toUpperCase(); // if multiple, use last (according to curl docs)

		// join multiple request body data, if any
		var dataAscii = [];
		var dataFiles = [];
		var loadData = function(d) {
			if (!relevant.method)
				relevant.method = "POST";

			// according to issue #8, curl adds a default Content-Type
			// header if not set explicitly
			var hasContentType = false;
			for (var i = 0; i < relevant.headers.length; i++) {
				if (relevant.headers[i].indexOf("Content-Type") == 0) {
					hasContentType = true;
					break;
				}
			}
			if (!hasContentType)
				relevant.headers.push("Content-Type: application/x-www-form-urlencoded");

			for (var i = 0; i < d.length; i++)
			{
				if (d[i].length > 0 && d[i][0] == "@")
					dataFiles.push(d[i].substr(1));
				else
					dataAscii.push(d[i]);
			}
		};
		if (cmd.d)
			loadData(cmd.d);
		if (cmd.data)
			loadData(cmd.data);
		if (dataAscii.length > 0)
			relevant.data.ascii = dataAscii.join("&");
		if (dataFiles.length > 0)
			relevant.data.files = dataFiles;

		// between -u and --user, choose the long form...
		var basicAuthString = "";
		if (cmd.user && cmd.user.length > 0)
			basicAuthString = cmd.user[cmd.user.length-1];
		else if (cmd.u && cmd.u.length > 0)
			basicAuthString = cmd.u[cmd.u.length-1];
		var basicAuthSplit = basicAuthString.indexOf(":");
		if (basicAuthSplit > -1) {
			relevant.basicauth = {
				user: basicAuthString.substr(0, basicAuthSplit),
				pass: basicAuthString.substr(basicAuthSplit+1)
			};
		} else {
			relevant.basicAuth = { user: basicAuthString, pass: "<PASSWORD>" };
		}

		// default to GET if nothing else specified
		if (!relevant.method)
			relevant.method = "GET";
		
		console.log(relevant);
		
		return relevant;
	}
	
	// renderSimple renders a simple HTTP request using net/http convenience methods
	function renderSimple(method, url) {
		//call api
		  var xhr = new XMLHttpRequest();
		  xhr.onload = function(e) {
			if (this.status == 200 && this.readyState == 4) {
			  output('<textarea>' + this.response + '</textarea>');
			} else {
			  output('ERROR: ' + this.status + ' ' + this.statusText);
			}
		  };
		  xhr.onerror = function(e) {
			output('ERROR: ' + this.status + ' ' + this.statusText);
			output('Could not fetch ' + url);
		  };
		  var tgt = url;
		  url2 = tgt.replace("http://", "https://");
		  xhr.open(method, url2, true);
		  xhr.send();
		  return;
	}

	function toTitleCase(str) {
		return str.replace(/\w*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	}
	
	// renderComplex renders Go code that requires making a http.Request.
	function renderComplex(req) {

		// First, figure out the headers
		var headers = {};
		for (var i = 0; i < req.headers.length; i++) {
			var split = req.headers[i].indexOf(":");
			if (split == -1) continue;
			var name = req.headers[i].substr(0, split).trim();
			var value = req.headers[i].substr(split+1).trim();
			headers[toTitleCase(name)] = value;
		}

		// load body data
		// KNOWN ISSUE: -d and --data are treated like --data-binary in
		// that we don't strip out carriage returns and newlines.
		var defaultPayloadVar = "body";
		if (!req.data.ascii && !req.data.files) {
			// no data; this is easy
			//go += 'req, err := http.NewRequest("'+req.method+'", '+goExpandEnv(req.url)+', nil)\n'+err;
		} else {
			var ioReaders = [];

			// if there's text data...
			if (req.data.ascii) {
				var stringBody = function() {
					//go += defaultPayloadVar+' := strings.NewReader(`'+req.data.ascii+'`)\n'
					ioReaders.push(defaultPayloadVar);
				}

				if (headers["Content-Type"] && headers["Content-Type"].indexOf("json") > -1) {
					// create a struct for the JSON
					var result = jsonToGo(req.data.ascii, "Payload");
					if (result.error)
						stringBody(); // not valid JSON, so just treat as a regular string
					else if (result.go) {
						// valid JSON, so create a struct to hold it
						//go += result.go+'\n\ndata := Payload {\n\t// fill struct\n}\n';
						//go += 'payloadBytes, err := json.Marshal(data)\n'+err;
						//go += defaultPayloadVar+' := bytes.NewReader(payloadBytes)\n\n';
					}
				} else {
					// not a json Content-Type, so treat as string
					stringBody();
				}
			}

			// if file data...
			if (req.data.files && req.data.files.length > 0) {
				var varName = "f";
				for (var i = 0; i < req.data.files.length; i++) {
					var thisVarName = (req.data.files.length > 1 ? varName+(i+1) : varName);
					//go += thisVarName+', err := os.Open('+goExpandEnv(req.data.files[i])+')\n'+err;
					//go += 'defer '+thisVarName+'.Close()\n';
					ioReaders.push(thisVarName);
				}
			}

			// render go code to put all the data in the body, concatenating if necessary
			var payloadVar = defaultPayloadVar;
			if (ioReaders.length > 0)
				payloadVar = ioReaders[0];
			if (ioReaders.length > 1) {
				payloadVar = "payload";
				// KNOWN ISSUE: The way we separate file and ascii data values
				// loses the order between them... our code above just puts the
				// ascii values first, followed by the files.
				//go += 'payload := io.MultiReader('+ioReaders.join(", ")+')\n';
			}
			//go += 'req, err := http.NewRequest("'+req.method+'", '+goExpandEnv(req.url)+', '+payloadVar+')\n'+err;
		}

		var xhr2 = new XMLHttpRequest();
		xhr2.onload = function(e) {
		if (this.status == 200 && this.readyState == 4) {
		  output('<textarea>' + this.response + '</textarea>');
		} else {
		  output('ERROR: ' + this.status + ' ' + this.statusText);
		}
		};
		xhr2.onerror = function(e) {
		output('ERROR: ' + this.status + ' ' + this.statusText);
		output('Could not fetch ' + req.url);
		};
		var tgt = req.url;
		url2 = tgt.replace("http://", "https://");
		xhr2.open(req.method, url2, true);
		  
		// set basic auth
		if (req.basicauth) {
			//go += 'req.SetBasicAuth('+goExpandEnv(req.basicauth.user)+', '+goExpandEnv(req.basicauth.pass)+')\n';
			xhr2.setRequestHeader('Authorization', make_base_auth(req.basicauth.user, req.basicauth.pass)); 
		}

		// set headers
		for (var name in headers) {
			//go += 'req.Header.Set('+goExpandEnv(name)+', '+goExpandEnv(headers[name])+')\n';
			xhr2.setRequestHeader(name, headers[name]);	
		}

		// execute request
		//go += "\nresp, err := http.DefaultClient.Do(req)\n";
		//go += err+deferClose;
		  xhr2.send();
		  return;
	}
	
	function make_base_auth(user, password) {
		var tok = user + ':' + password;
		var hash = btoa(tok);
		return "Basic " + hash;
	}

	
	function parseCommand(input, options) {
		if (typeof options === 'undefined') {
			options = {};
		}

		var result = {_: []}, // what we return
			cursor = 0,       // iterator position
			token = "";       // current token (word or quoted string) being built

		// trim leading $ or # that may have been left in
		input = input.trim();
		if (input.length > 2 && (input[0] == '$' || input[0] == '#') && whitespace(input[1]))
			input = input.substr(1).trim();

		for (cursor = 0; cursor < input.length; cursor++) {
			skipWhitespace();
			if (input[cursor] == "-") {
				flagSet();
			} else {
				unflagged();
			}
		}

		return result;




		// flagSet handles flags and it assumes the current cursor
		// points to a first dash.
		function flagSet() {
			// long flag form?
			if (cursor < input.length-1 && input[cursor+1] == "-") {
				return longFlag();
			}

			// if not, parse short flag form
			cursor++; // skip leading dash
			while (cursor < input.length && !whitespace(input[cursor]))
			{
				var flagName = input[cursor];
				if (typeof result[flagName] == 'undefined') {
					result[flagName] = [];
				}
				cursor++; // skip the flag name
				if (boolFlag(flagName))
					result[flagName] = true;
				else if (Array.isArray(result[flagName]))
					result[flagName].push(nextString());
			}
		}

		// longFlag consumes a "--long-flag" sequence and
		// stores it in result.
		function longFlag() {
			cursor += 2; // skip leading dashes
			var flagName = nextString("=");
			if (boolFlag(flagName))
				result[flagName] = true;
			else {
				if (typeof result[flagName] == 'undefined') {
					result[flagName] = [];
				}
				if (Array.isArray(result[flagName])) {
					result[flagName].push(nextString());
				}
			}
		}

		// unflagged consumes the next string as an unflagged value,
		// storing it in the result.
		function unflagged() {
			result._.push(nextString());
		}

		// boolFlag returns whether a flag is known to be boolean type
		function boolFlag(flag) {
			if (Array.isArray(options.boolFlags)) {
				for (var i = 0; i < options.boolFlags.length; i++) {
					if (options.boolFlags[i] == flag)
						return true;
				}
			}
			return false;
		}

		// nextString skips any leading whitespace and consumes the next
		// space-delimited string value and returns it. If endChar is set,
		// it will be used to determine the end of the string. Normally just
		// unescaped whitespace is the end of the string, but endChar can
		// be used to specify another end-of-string. This function honors \
		// as an escape character and does not include it in the value, except
		// in the special case of the \$ sequence, the backslash is retained
		// so other code can decide whether to treat as an env var or not.
		function nextString(endChar) {
			skipWhitespace();

			var str = "";

			var quoted = false,
				quoteCh = "",
				escaped = false;

			for (; cursor < input.length; cursor++) {
				if (quoted) {
					if (input[cursor] == quoteCh && !escaped) {
						quoted = false;
						continue;
					}
				}
				if (!quoted) {
					if (!escaped) {
						if (whitespace(input[cursor])) {
							return str;
						}
						if (input[cursor] == '"' || input[cursor] == "'") {
							quoted = true;
							quoteCh = input[cursor];
							cursor++;
						}
						if (endChar && input[cursor] == endChar) {
							cursor++; // skip the endChar
							return str;
						}
					}
				}
				if (!escaped && input[cursor] == "\\") {
					escaped = true;
					// skip the backslash unless the next character is $
					if (!(cursor < input.length-1 && input[cursor+1] == '$'))
						continue;
				}
				
				str += input[cursor];
				escaped = false;
			}

			return str;
		}

		// skipWhitespace skips whitespace between tokens, taking into account escaped whitespace.
		function skipWhitespace() {
			for (; cursor < input.length; cursor++) {
				while (input[cursor] == "\\" && (cursor < input.length-1 && whitespace(input[cursor+1])))
					cursor++;
				if (!whitespace(input[cursor]))
					break;
			}
		}

		// whitespace returns true if ch is a whitespace character.
		function whitespace(ch) {
			return ch == " " || ch == "\t" || ch == "\n" || ch == "\r";
		}
	}
  
  function formatColumns_(entries) {
    var maxName = entries[0].name;
    util.toArray(entries).forEach(function(entry, i) {
      if (entry.name.length > maxName.length) {
        maxName = entry.name;
      }
    });

    // If we have 3 or less entries, shorten the output container's height.
    // 15px height with a monospace font-size of ~12px;
    var height = entries.length == 1 ? 'height: ' + (entries.length * 30) + 'px;' :
                 entries.length <= 3 ? 'height: ' + (entries.length * 18) + 'px;' : '';

    // ~12px monospace font yields ~8px screen width.
    var colWidth = maxName.length * 16;//;8;

    return ['<div class="ls-files" style="-webkit-column-width:',
            colWidth, 'px;', height, '">'];
  }

  function invalidOpForEntryType_(e, cmd, dest) {
    if (e.code == FileError.NOT_FOUND_ERR) {
      output(cmd + ': ' + dest + ': No such file or directory<br>');
    } else if (e.code == FileError.INVALID_STATE_ERR) {
      output(cmd + ': ' + dest + ': Not a directory<br>');
    } else if (e.code == FileError.INVALID_MODIFICATION_ERR) {
      output(cmd + ': ' + dest + ': File already exists<br>');
    } else {
      errorHandler_(e);
    }
  }

  function errorHandler_(e) {
    var msg = '';
    switch (e.code) {
      case FileError.QUOTA_EXCEEDED_ERR:
        msg = 'QUOTA_EXCEEDED_ERR';
        break;
      case FileError.NOT_FOUND_ERR:
        msg = 'NOT_FOUND_ERR';
        break;
      case FileError.SECURITY_ERR:
        msg = 'SECURITY_ERR';
        break;
      case FileError.INVALID_MODIFICATION_ERR:
        msg = 'INVALID_MODIFICATION_ERR';
        break;
      case FileError.INVALID_STATE_ERR:
        msg = 'INVALID_STATE_ERR';
        break;
      default:
        msg = 'Unknown Error';
        break;
    };
    output('<div>Error: ' + msg + '</div>');
  }

  function createDir_(rootDirEntry, folders, opt_errorCallback) {
    var errorCallback = opt_errorCallback || errorHandler_;

    rootDirEntry.getDirectory(folders[0], {create: true}, function(dirEntry) {

      // Recursively add the new subfolder if we still have a subfolder to create.
      if (folders.length) {
        createDir_(dirEntry, folders.slice(1));
      }
    }, errorCallback);
  }

  function open_(cmd, path, successCallback) {
    if (!fs_) {
      return;
    }

    cwd_.getFile(path, {}, successCallback, function(e) {
      if (e.code == FileError.NOT_FOUND_ERR) {
        output(cmd + ': ' + path + ': No such file or directory<br>');
      }
    });
  }

  function read_(cmd, path, successCallback) {
    if (!fs_) {
      return;
    }

    cwd_.getFile(path, {}, function(fileEntry) {
      fileEntry.file(function(file) {
        var reader = new FileReader();

        reader.onloadend = function(e) {
          successCallback(this.result);
        };

        reader.readAsText(file);
      }, errorHandler_);
    }, function(e) {
      if (e.code == FileError.INVALID_STATE_ERR) {
        output(cmd + ': ' + path + ': is a directory<br>');
      } else if (e.code == FileError.NOT_FOUND_ERR) {
        output(cmd + ': ' + path + ': No such file or directory<br>');
      }
    });
  }

  function ls_(successCallback) {
    if (!fs_) {
      return;
    }

    // Read contents of current working directory. According to spec, need to
    // keep calling readEntries() until length of result array is 0. We're
    // guarenteed the same entry won't be returned again.
    var entries = [];
    var reader = cwd_.createReader();

    var readEntries = function() {
      reader.readEntries(function(results) {
        if (!results.length) {
          entries = entries.sort();
          successCallback(entries);
        } else {
          entries = entries.concat(util.toArray(results));
          readEntries();
        }
      }, errorHandler_);
    };

    readEntries();
  }

  function clear_(input) {
    output_.innerHTML = '';
    input.value = '';
    document.documentElement.style.height = '100%';
    interlace_.style.height = '100%';
  }

  function setTheme_(theme) {
    var currentUrl = document.location.pathname;

    if (!theme || theme == 'default') {
      //history.replaceState({}, '', currentUrl);
      localStorage.removeItem('theme');
      document.body.className = '';
      return;
    }

    if (theme) {
      document.body.classList.add(theme);
      localStorage.theme = theme;
      //history.replaceState({}, '', currentUrl + '#theme=' + theme);
    }
  }

  function toggle3DView_() {
    var body = document.body;
    body.classList.toggle('offscreen');

    is3D_ = !is3D_;

    if (body.classList.contains('offscreen')) {

      container_.style.webkitTransform =
          'translateY(' + (util.getDocHeight() - 175) + 'px)';

      var transEnd_ = function(e) {
        var iframe = document.createElement('iframe');
        iframe.id = 'fsn';
        iframe.src = '/lib/html/html5term/fsn_proto.html';

        fsn_ = body.insertBefore(iframe, body.firstElementChild);

        iframe.contentWindow.onload = function() {
          worker_.postMessage({cmd: 'read', type: type_, size: size_});
        }
        container_.removeEventListener('webkitTransitionEnd', transEnd_, false);
      };
      container_.addEventListener('webkitTransitionEnd', transEnd_, false);
    } else {
      container_.style.webkitTransform = 'translateY(0)';
      body.removeChild(fsn_);
      fsn_ = null;
    }
  }

  function output(html) {
    output_.insertAdjacentHTML('beforeEnd', html);
    //output_.scrollIntoView();
    cmdLine_.scrollIntoView();
  }

  return {
    initFS: function(persistent, size) {
      output('<div>Welcome to ' + document.title +
             '! (v' + VERSION_ + ')</div>');
      output((new Date()).toLocaleString());
      output('<p>Documentation: type "help"</p>');

      if (!!!window.requestFileSystem) {
        output('<div>Sorry! The FileSystem APIs are not available in your browser.</div>');
        return;
      }

      var type = persistent ? window.PERSISTENT : window.TEMPORARY;
      window.requestFileSystem(type, size, function(filesystem) {
        fs_ = filesystem;
        cwd_ = fs_.root;
        type_ = type;
        size_ = size;

        // If we get this far, attempt to create a folder to test if the
        // --unlimited-quota-for-files fag is set.
        cwd_.getDirectory('testquotaforfsfolder', {create: true}, function(dirEntry) {
          dirEntry.remove(function() { // If successfully created, just delete it.
            // noop.
          });
        }, function(e) {
          if (e.code == FileError.QUOTA_EXCEEDED_ERR) {
            output('ERROR: Write access to the FileSystem is unavailable.<br>');
            output('Type "install" or run Chrome with the --unlimited-quota-for-files flag.');
          } else {
            errorHandler_(e);
          }
        });

      }, errorHandler_);
    },
    output: output,
    setTheme: setTheme_,
    getCmdLine: function() { return cmdLine_; },
    addDroppedFiles: function(files) {
      util.toArray(files).forEach(function(file, i) {
        cwd_.getFile(file.name, {create: true, exclusive: true}, function(fileEntry) {

          // Tell FSN visualizer we've added a file.
          if (fsn_) {
            fsn_.contentWindow.postMessage({cmd: 'touch', data: file.name}, location.origin);
          }
          
          fileEntry.createWriter(function(fileWriter) {
            fileWriter.write(file);
          }, errorHandler_);
        }, errorHandler_);
      });
    },
    toggle3DView: toggle3DView_,
    selectFile: selectFile_
  }
};

