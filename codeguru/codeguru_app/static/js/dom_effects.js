const transition_event = 'webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

function setUpDomEffects() {
    SidePanel.grayOut = $("#gray_out_debugger")
        .on(transition_event, grayOutAfterTansition)
        .hide();
    new window.SidePanel('competeBtn', 'graphs_panel');
    setUpTournamentPanel();
}

function setUpTournamentPanel() {
    window.tournamet_panel = new window.SidePanel('tournament-btn', 'tournament-panel');

    $("#submit-button").click(function () {
        selectedWarrior = window.player_container.getByName(username);
        panel = selectedWarrior.$panel;
        checkbox = selectedWarrior.$wtype;

        codes = []

        triggerSrc(selectedWarrior.label, 1);

        code = $('#asm_edit').val();
        codes.push(code);

        if (checkbox.prop('checked')) {
            triggerSrc(selectedWarrior.label, 2);
            code = $('#asm_edit').val()
            codes.push(code);
        }

        
        if (window.tournamet_panel.loader)
            window.tournamet_panel.loader.delete();
        window.tournamet_panel.loader = new Loader($('#submit-button'));
        let loader = window.tournamet_panel.loader
        loader.$loader.on('side-panel:open', function () {
            $(this).remove();
        });
        window.tournamet_panel.addListener(loader.$loader);

        sendCodeToServer(JSON.stringify({
            name: selectedWarrior.name,
            codes: codes,
        }), 
        loader);
    });
}

function sendCodeToServer(codes, loader) {
    var l = loader;
    $.ajax({
        headers: {
            "X-CSRFToken": csrf_token
        },
        method: "POST",
        url: "/submit/",
        dataType: 'json',
        data: {
            codes_data: codes
        }
    }).done(function (msg) {
        console.log("Data Saved: " + msg.OK);
        l.done();
    }).fail(function () {
        l.fail();
    });
}

class Loader {
    constructor(originButton) {
        this.$button = originButton;

        originButton.append('<div class="lds-ring"><div></div><div></div><div></div><div></div></div>')
        this.$loader = originButton.find('.lds-ring')
            .css('position', 'absolute')
            .css('left', this.$button.position().left + this.$button.outerWidth() + 5)
            .css('top', this.$button.position().top);
    }

    done() {
        this.$loader.html('<i class="fas fa-check"></i>');
    }

    fail() {
        this.$loader.html('<i class="fas fa-times"></i>');
    }

    delete() {
        this.$loader.remove();
    }
}

window.Loader = Loader;

class SidePanel {
    constructor(button, panel) {
        this.listeners = []

        this.button = $(`#${button}`);
        this.panel = $(`#${panel}`);
        this.button.click(this.openPanel.bind(this));
        this.panel.on(transition_event, this.afterTransition.bind(this));
    }

    openPanel() {
        if (!this.panel.hasClass('active')) {
            this.panel.removeClass("after-transition");
            this.button.siblings().prop("disabled", true);
            this.listeners.forEach(element => {
                element.trigger('side-panel:open');
            });
        } else {
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
    if ($(".side-panel.active").length == 0)
        $("#gray_out_debugger").hide();
}

function hidePopup(event) {
    if ($(event.target).closest('.popupWin').length == 0)
        window.location.replace('#');
}

//A neccessary evil, becuase the GWT section uses a lot of global variables
window.SidePanel = SidePanel;