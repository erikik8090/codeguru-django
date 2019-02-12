const transition_event = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

function setUpDomEffects(){
    SidePanel.grayOut = $("#gray_out_debugger")
        .on(transition_event, grayOutAfterTansition)
        .hide();
    new window.SidePanel('competeBtn', 'graphs_panel');
    setUpTournamentPanel();
}

function setUpTournamentPanel() {
    new window.SidePanel('tournament-btn', 'tournament-panel');

    $("#submit-button").click(function() {
        selectedWarrior = window.player_container.getByName(username);
        panel = selectedWarrior.$panel;
        checkbox = selectedWarrior.$wtype;

        codes = []

        triggerSrc(selectedWarrior.label, 1);

        code = $('#asm_edit').val();
        codes.push({name: selectedWarrior.name + '1', code: code});

        if(checkbox.prop('checked')) {
            triggerSrc(selectedWarrior.label, 2);

            code = $('#asm_edit').val()
            codes.push({name: selectedWarrior.name + '2', code: code});
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