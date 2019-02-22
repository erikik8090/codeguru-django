function initPlayerPanel() {
    var container = new PlayerContainer()
    window.player_container = container;
}

const blindRanger =
    "# Technique - Blind Ranger\n" +
    "loop:\n" +
    "add x2, x2, 750\n" +
    "add x3, x1, x2\n" +
    "sw x2, 32(x3)\n" +
    "j loop\n";

const blindWarrior =
    "# Technique - Blind Knight\n" +
    "loop:\n" +
    "add x2, x2, 4\n" +
    "add x3, x1, x2\n" +
    "sw x2, 32(x3)\n" +
    "j loop\n";

const still =
    "# Technieque - Stand Still\n" +
    "j x1\n";

function initDefaultPlayers() {
    $.ajax({
        headers: {"X-CSRFToken": csrf_token },
        method: "GET",
        url: `/codes/${username}/current`,
    }).done(function( msg ) {
        let [code1, code2] = [msg.code[0], msg.code[1]];
        user_panel = window.player_container.add_constant(username, code1, code2, code2!=undefined, true);
        triggerSrc(user_panel.label, 1);
    });
    window.player_container.add('Ranger', blindRanger, blindRanger);
    window.player_container.add('Still', still);
    window.player_container.add('Warrior', blindWarrior);

}

class PlayerContainer {
    constructor() {
        this.$container = $('#players_contaier');
        this.$addButton = $('#addPlayerBtn');
        this.nextLetter = 'A'
        this.usedLetters = []
        this.playerPanels = []

        this.enable()
    }

    add_constant(name, code1, code2, two_warriors) {
        let panel = this.add(name, code1, code2, two_warriors, true);
        panel.$panel.find('.pl_close_icon').remove();
        panel.$panel.css('background','#ababab');
        return panel;
    }

    add(name, code1, code2, two_warriors, atStart) {
        if (this.usedLetters.length >= 20) {
            return; // max players
        }

        const playerName = name || 'Player ' + this.nextLetter
        const wtype = two_warriors || false;

        if(atStart != undefined && atStart === true) {
            this.$container.prepend(createPlayerPanelString(this.nextLetter, playerName));
        }
        else {
            this.$container.append(createPlayerPanelString(this.nextLetter, playerName));
        }
        const playerPanel = new PlayerPanel(this.nextLetter, playerName, code1, code2, wtype);        

        playerPanel.changeWType(wtype); // do update label

        this.usedLetters.push(this.nextLetter);
        this.nextLetter = asciiAdd(this.nextLetter, 1);
        this.playerPanels.push(playerPanel);
        return playerPanel;
    }

    remove(panel) {
        const elem = panel.$panel;
        const letter = panel.letter

        elem.on('animationend', function () {
            elem.remove();
        })
        elem.addClass('removed_anim')

        arrayRemove(this.usedLetters, letter);
        arrayRemove(this.playerPanels, panel);
        j_removePlayer('p' + letter)

        if (this.usedLetters.length == 0) {
            this.nextLetter = 'A'
        } else {
            // figure out what would be the next letter
            var check = 'Z' // check from Z backwards
            while (true) {
                if (this.usedLetters.indexOf(check) > -1)
                    break;
                check = asciiAdd(check, -1)
            }
            if (check != 'Z')
                this.nextLetter = asciiAdd(check, 1)
            else { // all letters are used up, check for holes
                check = 'A'
                while (check != 'Z') {
                    if (this.usedLetters.indexOf(check) == -1)
                        break;
                    check = asciiAdd(check, 1)
                }
                this.nextLetter = check // upper limit on number of players should avoid this causing a problem
            }
        }
        triggerSrc('p' + this.playerPanels[0].letter, 1  )
    }

    getByName(name) {
        return this.playerPanels.find(panel => panel.name == name);
    }

    disable() {
        this.playerPanels.forEach(p => p.disable())
        this.$addButton.off('click')
        this.$addButton.attr('disabled', "true");
    }

    enable() {
        this.playerPanels.forEach(p => p.enable());
        this.$addButton.click(function() {
            window.player_container.add();
        })
        this.$addButton.attr('disabled', false);
    }
}

function createPlayerPanelString(letter, name) {
    const template = document.getElementById('template_player_frame');
    return template.innerHTML
        .replace(/LETTER/g, letter)
        .replace(/PNAME/g, name);
}

class PlayerPanel {
    constructor(letter, name, code1, code2, wtype) {
        this.$panel = $('#pl_frame_p' + letter);
        this.$wtype = this.$panel.find('.wtype_checkbox');

        this.letter = letter;
        this.label = 'p'+letter;
        this.name = name;
        const playerCode1 = code1 || "";
        const playerCode2 = code2 || "";

        j_addPlayer('p' + letter, name, playerCode1, playerCode2, wtype);
        this.enable();
    }

    changeWType(v) {
        if (v === true || v === 'off')
            v = 'TWO_DIFFERENT';
        else if (v == false || v === 'on')
            v = 'SINGLE';

        let label = 'p' + this.letter;

        var elem2 = document.getElementById('sel_code_lbl_w2_' + label)
        var frame = document.getElementById('pl_frame_' + label)

        if (v == 'SINGLE' || v == 'TWO_IDENTICAL') {
            elem2.style.visibility = 'hidden'
            elem2.style.opacity = 0.0
            frame.style.height = '98px'
            document.getElementById('wtype_' + label).checked = false
        } else if (v == 'TWO_DIFFERENT') {
            elem2.style.visibility = 'visible'
            elem2.style.opacity = 1
            frame.style.height = ''
            document.getElementById('wtype_' + label).checked = true
        }

        j_changedWType(label, v);
    }

    disable() {
        this.$panel.find('.pl_close_icon').attr('disabled', true);
        this.$panel.find('.player-check').prop('disabled', true);
        this.$wtype.prop('disabled', true);
        this.$wtype.off('change');
        this.$panel.find('.pl_close_icon').off('click');
        
    }

    enable() {
        this.$panel.find('.pl_close_icon').attr('disabled', false);
        this.$panel.find('.player-check').prop('disabled', false);
        this.$wtype.prop('disabled', false);
        
        var playerPanel = this
        this.$wtype.change(function () {
            playerPanel.changeWType($(this).prop('checked'));
        });
        this.$panel.find('.pl_close_icon').click(function () {
            window.player_container.remove(playerPanel);
        });
    }
}

function asciiAdd(letter, val) {
    return String.fromCharCode(letter.charCodeAt(0) + val)
}

function arrayRemove(arr, value) {
    var index = arr.indexOf(value);
    console.assert(index > -1, "did not find " + value)
    arr.splice(index, 1);
}

function triggerSrc(label, index) {
    $(`#sel_code_w${index}_${label}`).prop('checked', true);
    j_srcSelectionChanged(label, index)
}


//////////////////////////////////////////////////////////////////////////////////////////
var g_nextZombNum = 1
var g_usedZnums = []

function addZombieCode() {
    if (addZombieBtn.getAttribute("disabled") == "true")
        return;
    var text = '<div id="zomb_line_zNUM">\
        <input id="sel_code_w1_zNUM" class="hidden sc-check" onclick="triggerSrc(\'zNUM\', 1)" type="radio" name="src_select">\
        <label id="player_name_lbl_zNUM" class="sc-btn src_sel_but zomb_sel_but" for="sel_code_w1_zNUM" >Zombie NUM</label>\
        <label id="player_erase_zNUM" class="fas fa-times pl_close_icon za_close_icon" onclick="triggerEraseZombie(this, zomb_line_zNUM, \'NUM\')"></label>\
        </div>'

    addTextChild(zombies_container, text.replace(/NUM/g, g_nextZombNum))
    var num = '' + g_nextZombNum // turn to a string
    g_nextZombNum += 1

    g_usedZnums.push(num)

    j_addPlayer('z' + num, "Zombie " + num, "", "", false) // players are identified by a letter, zombies by a number

}

function triggerEraseZombie(buttonElem, elem, num) {
    if (buttonElem.getAttribute("disabled") == "true")
        return;

    elem.parentNode.removeChild(elem);
    arrayRemove(g_usedZnums, num)

    j_removePlayer('z' + num)
}