
class ScoreGraph {
    constructor(canvas) {
        this.$canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.width = canvas.width;
        this.height = canvas.height;

        this.data = new Map();
        this.colorGenerator = new ColorGenerator();
        this.counter = 0;

        this.ctx.textAlign = "center";
    }

    clear(names) {
        names.forEach(name => {
            this.data.set(name, {
                score: [0, 0],
                color: this.colorGenerator.next()
            });
        });
    }

    addToValue(name, subIndex, addedValue) {
        // TODO: Improve this - prohibiting users from having a username with 1/2 on the end
        if (name.endsWith('1') || name.endsWith('2')) name = name.slice(0, -1);
        this.data.get(name).score[subIndex] += addedValue;
        this.draw();
    }

    draw() {
        this.ctx.clearRect(0, 0, this.width, this.height);

        const padding = 5;
        const colWidth = ((this.width + padding) / this.data.size);
        const colHeightStep = this.height / 100;

        let curr_index = 0
        for (const [name, scoreData] of this.data) {

            this.ctx.fillStyle = scoreData.color.toString();
            this.ctx.fillRect(curr_index, this.height - 20, colWidth, scoreData.score[0] * colHeightStep * (-1));
            this.ctx.fillStyle = scoreData.color.darken().toString();
            this.ctx.fillRect(curr_index, this.height - 20 + (scoreData.score[0] * colHeightStep * (-1)), colWidth, scoreData.score[1] * colHeightStep * (-1))

            this.ctx.fillText(name, curr_index + 0.5 * colWidth, this.height - 5);
            curr_index += colWidth + padding;
        }

    }
}

const golden_ratio_conjugate = 0.618033988749895;

class ColorGenerator {
    constructor() {
        this.hue = Math.random();
    }

    next() {
        this.hue += golden_ratio_conjugate;
        this.hue %= 1;
        return new Color(this.hue * 360, 80, 60);
    }
}

class Color {
    constructor(h, s, l) {
        this.h = h;
        this.s = s;
        this.l = l;
    }

    toString() {
        return `hsl(${this.h}, ${this.s}%, ${this.l}%)`;
    }

    darken() {
        return new Color(this.h, this.s, Math.max(this.l - 20, 0));
    }
}

window.ScoreGraph = ScoreGraph