
function playGame() {
    csrftoken = getCookie('csrftoken');
    $.ajax({
        headers: {"X-CSRFToken": csrftoken },
        method: "POST",
        url: "/admin/play/",
    }).done(function( msg ) {
        console.log( "Data Saved: " + msg.OK );
    });
}

// using jQuery
function getCookie(name) {
    var cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        var cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            var cookie = $.trim(cookies[i]);
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}
