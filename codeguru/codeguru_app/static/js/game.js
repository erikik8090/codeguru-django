
function getCurrentPlayers() {
    ans = {}
    $("#players_contaier")
        .children()
        .each(function() {
            id = $(this).attr('id');
            ans[$(this).find('.fam_label').text()] = id.substring(id.length-2);
        });
    return ans;
}
