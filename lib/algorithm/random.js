"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const utils_1 = require("../utils");
const base_1 = require("./base");
class Random extends base_1.Base {
    pick() {
        return (0, utils_1.sample)(this.pool);
    }
}
exports.default = Random;
