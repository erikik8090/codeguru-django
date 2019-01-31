const transition_event = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

function setUpDomEffects(){
    SidePanel.grayOut = $("#gray_out_debugger")
        .on(transition_event, grayOutAfterTansition)
        .hide();
    new window.SidePanel('competeBtn', 'graphs_panel');
    setUpTournamentPanel();
}

function setUpTournamentPanel() {
    var tournamentPanel = new window.SidePanel('tournament-btn', 'tournament-panel');

    selectBox = $("#warrior-select");
    selectBox.on('side-panel:open', function() {
        newOptions = getCurrentPlayers();

        selectBox.empty(); // remove old options
        for (let [key, value] of Object.entries(newOptions))
        {
            selectBox.append($("<option></option>")
                .attr("value", value)
                .text(key));
        }
    });
    tournamentPanel.addListener(selectBox);

    $("#submit-button").click(function() {
        selectedWarrior = selectBox.find(":selected")
        panel = $(`#pl_frame_${selectedWarrior.val()}`)
        checkbox = panel.find('.fam_check_box')

        codes = []

        triggerSrc(selectedWarrior.val(), 1);

        code = $('#asm_edit').val();
        codes.push({name: selectedWarrior.text() + '1', code: code});

        console.log(`pl_frame_${selectedWarrior.val()}`)

        if(checkbox.prop('checked')) {
            triggerSrc(selectedWarrior.val(), 2);

            code = $('#asm_edit').val()
            codes.push({name: selectedWarrior.text() + '2', code: code});
        }

        sendCodeToServer(JSON.stringify(codes));
    });
}

function sendCodeToServer(codes) {
    $.ajax({
        headers: {"X-CSRFToken": csrf_token },
        method: "POST",
        url: "/submit/",
        dataType: 'json',
        data: {codes: codes}
    }).done(function( msg ) {
        console.log( "Data Saved: " + msg.OK );
    });
}

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

class SidePanel {
    constructor(button, panel) {
        this.listeners = []

        this.button = $(`#${button}`);
        this.panel = $(`#${panel}`);
        this.button.click(this.openPanel.bind(this));
        this.panel.on(transition_event, this.afterTransition.bind(this));
    }

    openPanel() {
        if(!this.panel.hasClass('active')){
            this.panel.removeClass("after-transition");
            this.button.siblings().prop("disabled", true);
            this.listeners.forEach(element => {
                element.trigger('side-panel:open');
            });
        }    
        else {
            this.button.siblings().prop("disabled", false);
        }
        this.panel.toggleClass("active");
        SidePanel.grayOut.show().toggleClass("active");
    }

    addListener(listener) {
        this.listeners.push(listener);
    }

    afterTransition() {
        this.panel.addClass("after-transition")
    }
}

// For a smooth transition at the end, we hide the gray background only at the end of the transition.
// Earlier and we don't see the animation
function grayOutAfterTansition() {
    if($(".side-panel.active").length == 0)
        $("#gray_out_debugger").hide();
}

function hidePopup(event) {
    if($(event.target).closest('.popupWin').length == 0)
        window.location.replace('#');
}

//A neccessary evil, becuase the GWT section uses a lot of global variables
window.SidePanel = SidePanel;