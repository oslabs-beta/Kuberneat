"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const Chart_1 = __importDefault(require("./Chart"));
const GUI_1 = __importDefault(require("./GUI"));
const Main = () => {
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement("div", { className: 'main' },
            react_1.default.createElement(GUI_1.default, null))));
};
exports.default = Main;
