"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const random_1 = __importDefault(require("./algorithm/random"));
const round_robin_1 = __importDefault(require("./algorithm/round-robin"));
const hostTest = [
    "127.0.0.2:6061",
    "127.0.0.1:6062",
    "127.0.0.3:6063",
    "127.0.0.2:6069",
];
const random = new random_1.default(hostTest);
const roundRobin = new round_robin_1.default(hostTest);
console.log(roundRobin.pick());
