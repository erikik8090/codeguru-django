
function setUpDomEffects(){
    SidePanel.grayOut = $("#gray_out_debugger")
        .on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', grayOutAfterTansition)
        .hide();
    new window.SidePanel('competeBtn', 'graphs_panel');
    new window.SidePanel('tournament-btn', 'tournament-panel');
}

class SidePanel{
    constructor(button, panel){
        this.button = $(`#${button}`);
        this.panel = $(`#${panel}`);
        this.button.click(this.openPanel.bind(this));
        this.panel.on('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', this.afterTransition.bind(this));
    }

    openPanel() {
        if(!this.panel.hasClass('active')){
            this.panel.removeClass("after-transition");
            this.button.siblings().prop("disabled", true);
        }    
        else {
            this.button.siblings().prop("disabled", false);
        }
        this.panel.toggleClass("active");
        SidePanel.grayOut.show().toggleClass("active");
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