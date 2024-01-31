"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Base = void 0;
class Base {
    constructor(pool) {
        this._pool = pool;
    }
    pick() {
        return "http://localhost:3000";
    }
    get pool() {
        return this._pool;
    }
    get size() {
        var _a, _b;
        return (_b = (_a = this._pool) === null || _a === void 0 ? void 0 : _a.length) !== null && _b !== void 0 ? _b : 0;
    }
}
exports.Base = Base;
