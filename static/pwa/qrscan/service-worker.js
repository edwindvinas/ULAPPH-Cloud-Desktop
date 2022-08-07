"use strict";

function setOfCachedUrls(e) {
    return e.keys().then(function(e) {
        return e.map(function(e) {
            return e.url
        })
    }).then(function(e) {
        return new Set(e)
    })
}
var precacheConfig = [
        ["/static/pwa/qrscan/qrscan.html", "132d3884d3dd3f78fa91f957ac8f2972"],
        ["/static/pwa/qrscan/scanner.html", "132d3884d3dd3f78fa91f957ac8f2972"],
        ["/static/lib/css/chat-bubble/setup.css", "6296fbc6af1a661b21004b585ebdc3ae"],
        ["/static/lib/css/chat-bubble/says.css", "1ed9dd88ce2cbe2fbd003a7b404e9054"],
        ["/static/lib/css/chat-bubble/reply.css", "1ed9dd88ce2cbe2fbd003a7b404e9055"],
        ["/static/lib/css/chat-bubble/typing.css", "1ed9dd88ce2cbe2fbd003a7b404e9056"],
        ["/static/lib/css/chat-bubble/input.css", "1ed9dd88ce2cbe2fbd003a7b404e9057"]
    ],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/],
    addDirectoryIndex = function(e, t) {
        var n = new URL(e);
        return "/" === n.pathname.slice(-1) && (n.pathname += t), n.toString()
    },
    cleanResponse = function(e) {
        return e.redirected ? ("body" in e ? Promise.resolve(e.body) : e.blob()).then(function(t) {
            return new Response(t, {
                headers: e.headers,
                status: e.status,
                statusText: e.statusText
            })
        }) : Promise.resolve(e)
    },
    createCacheKey = function(e, t, n, r) {
        var a = new URL(e);
        return r && a.pathname.match(r) || (a.search += (a.search ? "&" : "") + encodeURIComponent(t) + "=" + encodeURIComponent(n)), a.toString()
    },
    isPathWhitelisted = function(e, t) {
        if (0 === e.length) return !0;
        var n = new URL(t).pathname;
        return e.some(function(e) {
            return n.match(e)
        })
    },
    stripIgnoredUrlParameters = function(e, t) {
        var n = new URL(e);
        return n.hash = "", n.search = n.search.slice(1).split("&").map(function(e) {
            return e.split("=")
        }).filter(function(e) {
            return t.every(function(t) {
                return !t.test(e[0])
            })
        }).map(function(e) {
            return e.join("=")
        }).join("&"), n.toString()
    },
    hashParamName = "_sw-precache",
    urlsToCacheKeys = new Map(precacheConfig.map(function(e) {
        var t = e[0],
            n = e[1],
            r = new URL(t, self.location),
            a = createCacheKey(r, hashParamName, n, /\.\w{8}\./);
        return [r.toString(), a]
    }));
self.addEventListener("install", function(e) {
    e.waitUntil(caches.open(cacheName).then(function(e) {
        return setOfCachedUrls(e).then(function(t) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(n) {
                if (!t.has(n)) {
                    var r = new Request(n, {
                        credentials: "same-origin"
                    });
                    return fetch(r).then(function(t) {
                        if (!t.ok) throw new Error("Request for " + n + " returned a response with status " + t.status);
                        return cleanResponse(t).then(function(t) {
                            return e.put(n, t)
                        })
                    })
                }
            }))
        })
    }).then(function() {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function(e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function(e) {
        return e.keys().then(function(n) {
            return Promise.all(n.map(function(n) {
                if (!t.has(n.url)) return e.delete(n)
            }))
        })
    }).then(function() {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function(e) {
    if ("GET" === e.request.method) {
        var t, n = stripIgnoredUrlParameters(e.request.url, ignoreUrlParametersMatching);
        t = urlsToCacheKeys.has(n);
        t || (n = addDirectoryIndex(n, "qrscan.html"), t = urlsToCacheKeys.has(n));
        !t && "navigate" === e.request.mode && isPathWhitelisted(["^(?!\\/__).*"], e.request.url) && (n = new URL("/static/pwa/qrscan/qrscan.html", self.location).toString(), t = urlsToCacheKeys.has(n)), t && e.respondWith(caches.open(cacheName).then(function(e) {
            return e.match(urlsToCacheKeys.get(n)).then(function(e) {
                if (e) return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function(t) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', e.request.url, t), fetch(e.request)
        }))
    }
});