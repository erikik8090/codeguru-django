const option_string = '<div><input type="checkbox" id="NAME"><label for="NAME">NAME</label></div>';

class SettingsModal {
    constructor() {
        this.$modal = $("#settings-modal");
    }

    addOption(optionName) {
        this.$modal.append(option_string.replace(/NAME/g, optionName));
    }

    isEnabled(option) {
        return this.$modal.find('#'+option).prop("checked");
    }
}

function setUpSettingsMenu() {
    window.settings_menu = new SettingsModal();
    $.ajax({
        headers: {"X-CSRFToken": csrf_token },
        method: "GET",
        url: `/api/features`,
    }).done(function( msg ) {
        let features = msg.features;
        for(var i = 0; i<features.length; i++) {
            window.settings_menu.addOption(features[i]);
        }
    });
}