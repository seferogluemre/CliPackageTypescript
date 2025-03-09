#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const fs_1 = __importDefault(require("fs"));
const argv = yargs_1.default.
    command({
    command: "create",
    describe: "createa style.css file",
    aliases: ["c"],
    builder: {},
    handler: function (argv) {
        createStyleCss();
    }
})
    .help()
    .argv;
if (argv._.includes("create")) {
    createStyleCss();
}
function createStyleCss() {
    const defaultCss = `
    * {
        margin:0;
        padding:0;
    }
`;
    fs_1.default.writeFileSync('style.css', defaultCss);
    console.log("Style.css has ben created");
}
