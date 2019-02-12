function initPlayerPanel() {
    var container = new PlayerContainer()
    window.player_container = container;

    $('#addPlayerBtn').click(function () {
        window.player_container.add()
    });
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
    window.player_container.add('Ranger', blindRanger, blindRanger, true);
    window.player_container.add('Still', still);
    window.player_container.add('Warrior', blindWarrior);
    triggerSrc('pA', 1);
    $('#sel_code_w1_pA').prop('checked',true)
}

class PlayerContainer {
    constructor() {
        this.$container = $('#players_contaier');
    }

    add(name, code1, code2, two_warriors) {
        if (g_usedLetters.length >= 20) {
            return; // max players
        }

        const playerName = name || 'Player ' + g_nextLetter
        const wtype = two_warriors || false;

        this.$container.append(createPlayerPanelString(g_nextLetter, playerName));
        const a = new PlayerPanel(g_nextLetter, playerName, code1, code2, wtype);
        var container = this;
        a.$panel.find('.pl_close_icon').click(function () {
            container.remove(a);
        });

        a.changeWType(wtype); // do update label

        g_usedLetters.push(g_nextLetter);
        g_nextLetter = asciiAdd(g_nextLetter, 1)
    }

    remove(panel) {
        const elem = panel.$panel;
        const letter = panel.letter

        elem.on('animationend', function () {
            elem.remove();
        })
        elem.addClass('removed_anim')

        arrayRemove(g_usedLetters, letter);
        j_removePlayer('p' + letter)

        if (g_usedLetters.length == 0) {
            g_nextLetter = 'A'
        } else {
            // figure out what would be the next letter
            var check = 'Z' // check from Z backwards
            while (true) {
                if (g_usedLetters.indexOf(check) > -1)
                    break;
                check = asciiAdd(check, -1)
            }
            if (check != 'Z')
                g_nextLetter = asciiAdd(check, 1)
            else { // all letters are used up, check for holes
                check = 'A'
                while (check != 'Z') {
                    if (g_usedLetters.indexOf(check) == -1)
                        break;
                    check = asciiAdd(check, 1)
                }
                g_nextLetter = check // upper limit on number of players should avoid this causing a problem
            }
        }
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
        this.$panel = $('#pl_frame_p' + letter)
        this.letter = letter

        var panel = this;
        const playerCode1 = code1 || ""
        const playerCode2 = code2 || ""

        j_addPlayer('p' + letter, name, playerCode1, playerCode2, wtype);
        this.$panel.find('.wtype_checkbox').change(function () {
            panel.changeWType($(this).prop('checked'));
        });
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
}

var g_nextLetter = 'A'
var g_usedLetters = []

function asciiAdd(letter, val) {
    return String.fromCharCode(letter.charCodeAt(0) + val)
}

function arrayRemove(arr, value) {
    var index = arr.indexOf(value);
    console.assert(index > -1, "did not find " + value)
    arr.splice(index, 1);
}

function triggerSrc(label, index) {
    console.log(`${label} - ${index}`);
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