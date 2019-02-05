
function playGame() {
    //var csrftoken = jQuery("[name=csrfmiddlewaretoken]").val();
    $.ajax({
        //headers: {"X-CSRFToken": csrftoken },
        method: "POST",
        url: "/admin/play",
    }).done(function( msg ) {
        console.log( "Data Saved: " + msg.OK );
    });
}