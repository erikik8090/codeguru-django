const option_string = '<div><input type="checkbox" id="NAME"><label for="NAME">NAME</label></div>';

class SettingsModal {
    constructor() {
        this.$modal = $("#settings-modal");
    }

    addOption(optionName) {
        this.$modal.append(option_string.replace(/NAME/g, optionName));
    }

    isEnabled(option) {
        this.$modal.find('#'+option).prop("checked");
    }
}

function setUpSettingsMenu() {
    window.settings_menu = new SettingsModal();
    settings_menu.addOption("new-memory");
}