/**
* Creates a new SaveDocumentView. This view renders a dialog where the user can
* save the mind map.
* 
* @constructor
*/
mindmaps.SaveDocumentView = function() {
  var self = this;

  var $dialog = $("#template-save").tmpl().dialog({
    autoOpen : false,
    modal : true,
    zIndex : 5000,
    width : 550,
    close : function() {
      // remove dialog from DOM
      $(this).dialog("destroy");
      $(this).remove();
    }
  });


  var $saveCloudStorageButton = $("#button-save-cloudstorage").button().click(
    function() {
      if (self.cloudStorageButtonClicked) {
        self.cloudStorageButtonClicked();
      }
    });

  var $localSorageButton = $("#button-save-localstorage").button().click(
    function() {
      if (self.localStorageButtonClicked) {
        self.localStorageButtonClicked();
      }
    });

  var $autoSaveCheckbox = $("#checkbox-autosave-localstorage").click(
    function() {
      if (self.autoSaveCheckboxClicked) {
        self.autoSaveCheckboxClicked($(this).prop("checked"));
      }
    });

  var $hddSaveButton = $("#button-save-hdd").button().click(
    function () {
      if (self.hddSaveButtonClicked) {
        self.hddSaveButtonClicked();
      }
    });

  var $ulapphSaveButton = $("#button-save-ulapph").button().click(
    function () {
      if (self.ulapphSaveButtonClicked) {
        self.ulapphSaveButtonClicked();
      }
    });

  this.setAutoSaveCheckboxState = function(checked) {
    $autoSaveCheckbox.prop("checked", checked);
  };

  this.showSaveDialog = function() {
    $dialog.dialog("open");
  };

  this.hideSaveDialog = function() {
    $dialog.dialog("close");
  };

  this.showCloudError = function(msg) {
    $dialog.find('.cloud-error').text(msg);
  }
};

/**
* Creates a new SaveDocumentPresenter. The presenter can store documents in the
* local storage or to a hard disk.
* 
* @constructor
* @param {mindmaps.EventBus} eventBus
* @param {mindmaps.MindMapModel} mindmapModel
* @param {mindmaps.SaveDocumentView} view
* @param {mindmaps.AutoSaveController} autosaveController
* @param {mindmaps.FilePicker} filePicker
*/
mindmaps.SaveDocumentPresenter = function(eventBus, mindmapModel, view, autosaveController, filePicker) {

  /**
  * Save in cloud button was clicked.
  */
  view.cloudStorageButtonClicked = function() {
    mindmaps.Util.trackEvent("Clicks", "cloud-save");

    filePicker.save({
      success: function() {
        view.hideSaveDialog();
      },
      error: function(msg) {
        view.showCloudError(msg);
      }
    });
  };

  /**
  * View callback when local storage button was clicked. Saves the document
  * in the local storage.
  * 
  * @ignore
  */
  view.localStorageButtonClicked = function() {
    mindmaps.Util.trackEvent("Clicks", "localstorage-save");

    var success = mindmapModel.saveToLocalStorage();
    if (success) {
      view.hideSaveDialog();
    } else {
      eventBus.publish(mindmaps.Event.NOTIFICATION_ERROR, "Error while saving to local storage");
    }
  };


  /**
  * View callback: Enables or disables the autosave function for localstorage.
  *
  * @ignore
  */
  view.autoSaveCheckboxClicked = function(checked) {
    if (checked) {
      autosaveController.enable();
    } else {
      autosaveController.disable();
    }
  };

  view.hddSaveButtonClicked = function() {
    mindmaps.Util.trackEvent("Clicks", "hdd-save");

    var filename = mindmapModel.getMindMap().getRoot().getCaption() + ".json";
    var content = mindmapModel.getDocument().prepareSave().serialize();
    var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    window.saveAs(blob, filename);

    var doc = mindmapModel.getDocument();
    eventBus.publish(mindmaps.Event.DOCUMENT_SAVED, doc);
    view.hideSaveDialog();
  };

  view.ulapphSaveButtonClicked = function() {
    mindmaps.Util.trackEvent("Clicks", "ulapph-save");

    //var filename = mindmapModel.getMindMap().getRoot().getCaption() + ".json";
    var filename = mindmapModel.getMindMap().getRoot().getCaption();
    var content = mindmapModel.getDocument().prepareSave().serialize();
    //var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
    //window.saveAs(blob, filename);
    //upload/save to ulapph
    var urlParams;
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
       urlParams[decode(match[1])] = decode(match[2]);

    //alert("Saving data... Please wait... This may take a while.");
    
    var xmlhttp;
    if (window.XMLHttpRequest)
      {// code for IE7+, Firefox, Chrome, Opera, Safari
      xmlhttp=new XMLHttpRequest();
      }
    else
      {// code for IE6, IE5
      xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
      }

    var editor_url = "";
    var root = location.protocol + '//' + location.host;
    var SID = urlParams["SID"];
    if (SID == "" || SID == undefined) {
      SID = "NEWTEXT"
    }
    editor_url = root + '/editor?EDIT_FUNC=GET_UP_URL&SID=' + SID;
    xmlhttp.open("POST",editor_url,true);
    xmlhttp.send();

     xmlhttp.onreadystatechange=function()
      {
      if (xmlhttp.readyState==4 && xmlhttp.status==200)
      {
        var uploadURL = xmlhttp.responseText;
        var formData = new FormData();

        formData.append("EDIT_FUNC2", "SAVE_TEXT");
        formData.append("SID", urlParams["SID"]);
        formData.append("CATEGORY", urlParams["CATEGORY"]);
        formData.append("FUNC_CODE", "UPD-FROM-EDITOR");
        formData.append("SPC_OPT", urlParams["SPC_OPT"]);
        var UID = urlParams["UID"];
        formData.append("UID", UID);
        //var thisLineTxtRaw = String(session.getLines(0,0));
        //var thisLineTxt = thisLineTxtRaw.replace(/[^A-Z0-9]/ig, "_");
        //var thisLineTxt_m = thisLineTxt.replace(/&/g, 'and');
        formData.append("TITLE", filename);
        //thisLineTxtRaw = String(session.getLines(1,1));
        //var thisLineTxtRaw_m = thisLineTxtRaw.replace(/&/g, 'and');
        
        //if (isExternalCloud == true) {
        //  var msg = prompt("Commit message", " -- Updated from ULAPPH Cloud Desktop by "+UID);
        //  formData.append("DESC", msg);
        //} else {
          formData.append("DESC", filename);
        //}
        if (SID == "NEWTEXT") {
          var msg = prompt("Enter title", filename);
          formData.append("DESC", msg);
          formData.append("TITLE", msg);
        }
        //var thisContent = session.getValue();
        var blob = new Blob([content], { type: "text/plain;charset=utf-8"});

        formData.append("file", blob);

        var xmlhttp2 = new XMLHttpRequest();
        xmlhttp2.open("POST", uploadURL);
        xmlhttp2.send(formData);
         xmlhttp2.onreadystatechange=function()
          {
            if (xmlhttp2.readyState==4 && xmlhttp2.status==200)
            {
                var redirLink = xmlhttp2.responseText;
                //alert("Cloud Response: "+redirLink);
                console.log("Cloud Response: "+redirLink);
                if (SID == "NEWTEXT") {
                  window.location.assign(redirLink); 
                }
                alert("Ok, saved successfully!");
                return;
            }

         }
      }
      
    }
    //end ulapph

    var doc = mindmapModel.getDocument();
    eventBus.publish(mindmaps.Event.DOCUMENT_SAVED, doc);
    view.hideSaveDialog();
  };

  this.go = function() {
    view.setAutoSaveCheckboxState(autosaveController.isEnabled());
    view.showSaveDialog();
  };
};
