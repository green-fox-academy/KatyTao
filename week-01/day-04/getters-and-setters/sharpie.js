'use strict'
class sharpie {
    constructor(color, width, inkAmount = 100) {
        this.color = color;
        this.width = width;
        this.inkAmount = inkAmount;
    }
    use() {
        return this.inkAmount--;
    }
}

module.exports = sharpie;