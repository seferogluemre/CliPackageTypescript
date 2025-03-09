#!/usr/bin/env node
import yargs from "yargs";
import fs from 'fs'
import { exec } from "child_process";
import readline from "readline";

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

const argv = yargs.
    command({
        command: "create",
        describe: "createa style.css file",
        aliases: ["c"],
        builder: {},
        handler: function (argv) {
            createStyleCss()
        }
    })
    .command("build", "Run npm run build")
    .command("new", "create a new-project", {
        "name": {
            describe: "Project name",
            demandOption: true,
            type: "string",
            alias: "n"
        }
    })
    .help()
    .argv as { [key: string]: unknown, _: string[] };


if (argv._.includes("create")) {
    createStyleCss()
}

if (argv._.includes("build")) {
    exec("npm run build", (error, stdout, stderr) => {
        if (error) {
            console.error("Catch Error:", stdout)
            return;
        }
        console.log("stdout:", stdout)
        console.error("stderr:", stderr)
    })
}

if (argv._.includes("new")) {
    let projectName = argv.name as string;

    if (!projectName) {
        rl.question("Please enter a project name:", (inputName: string) => {
            projectName = inputName;
            rl.close();
            createNewProject(projectName)
        })
    } else {
        createNewProject(projectName)
    }

}

function createNewProject(projectName: string) {

    fs.mkdirSync(projectName)
    exec(`git clone https://github.com/seferogluemre/arduino-lcd-screen.git ${projectName}`, (error, stdout, stderr) => {
        if (error) {
            console.error("Catch Error:", stdout)
            return;
        }

        console.log("stdout:", stdout)
        console.error("stderr:", stderr)

        exec(`cd ${projectName} && npm install`, (error, stdout, stderr) => {
            if (error) {
                console.error("Catch Error:", stdout)
                return;
            }

            console.log("stdout:", stdout)
            console.error("stderr:", stderr)
        })
    })

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
}
