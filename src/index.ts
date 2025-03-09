#!/usr/bin/env node
import yargs from "yargs";
import fs from 'fs'
import { log } from "console";

const argv = yargs.
    command({
        command: "create",
        describe: "createa style.css file",
        aliases: ["c"],
        builder: {},
        handler: function (argv) {
            createStyleCss()
        }
    },
    )
    .help()
    .argv as { _: string[] };

if (argv._.includes("create")) {
    createStyleCss()
}

function createStyleCss() {
    const defaultCss = `
    * {
        margin:0;
        padding:0;
    }
`
    fs.writeFileSync('style.css', defaultCss)
    console.log("Style.css has ben created")
}Writing the first cli command