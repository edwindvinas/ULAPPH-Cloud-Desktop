
var buttonShowHelper = $('#help-button');
var popupHelper = $('#popup-help');
var buttonSubmitHelper = $('#submit-help');

var mailHelper = $("#mail-help");
var textHelper = $("#text-help");
var error = $("#error-popup");

buttonShowHelper.on('click', function() {
    popupHelper.toggle();
    toggle_message(0);
});

buttonSubmitHelper.on('click', function() {
    var mail;
    var text = textHelper.val();

    if (mailHelper)
        mail = mailHelper.val();

    set_error('');
    if (!mail || mail.length == 0)
        mail = null;
    send_request({
        mail: mail,
        text: text,
        path: window.location.pathname
    });
});

function send_request(params) {
    var request = $.ajax({
        url: helperUrl,
        type: 'POST',
        dataType: 'application/json; charset=utf-8',
        data: params,
        xhrFields: {
            withCredentials: true
        }
    });

    request.always(function(response) {
        if (response.status != 200)
            return (set_error('Error with request, try later'));
        try {
            data = JSON.parse(response.responseText);
        }
        catch(e) {
            return (set_error('Error with request, try later'));
        }
        if (data.error)
            return (set_error(data.error));
        clear_form();
        toggle_message(1);
    });
}

function set_error(errorMessage) {
    error.html(errorMessage);
    if (errorMessage)
        error.show();
    else
        error.hide();
}

function clear_form() {
    mailHelper.val('');
    textHelper.val('');
}

function toggle_message(status) {
    if (status) {
        $("#content-popup").hide();
        $("#success-sending").show();
    } else {
        $("#content-popup").show();
        $("#success-sending").hide();
    }
}

function close_popup() {
    popupHelper.hide();
}

$(window).keydown(function(e) {
    if (e.which == 27) {
        close_popup();
    }
});
