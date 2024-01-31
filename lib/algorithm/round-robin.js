"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const base_1 = require("./base");
class RoundRobin extends base_1.Base {
    constructor() {
        super(...arguments);
        this.currentIndex = 0;
    }
    pick() {
        const address = this.pool[this.currentIndex];
        this.currentIndex = (this.currentIndex + 1) % this.size;
        return address;
    }
}
exports.default = RoundRobin;
