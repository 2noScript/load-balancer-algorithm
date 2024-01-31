"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sample = void 0;
const sample = (models) => {
    const index = Math.floor(Math.random() * models.length);
    return models[index];
};
exports.sample = sample;
