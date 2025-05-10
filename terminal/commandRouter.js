// @ts-check
//basically decides which command to run from parser input

import { runLS } from "./commands/Ls.js";
import { runPwd } from "./commands/Pwd.js";


//list of commands and their functions
const commandRegistry = {
    pwd: runPwd,
    ls: runLS
}

//takes in an object from parser, runs the command from the command part of the parser object
export function runCommand(parsed, shellContext) {
    const handler = commandRegistry[parsed.command]

    //if the command doesn't exist, change to be more accurate later
    if (!handler) {
        return ['command not found'];
    }

    // deal with redirects later

    //calls the function w/ the args from parsed
   return handler(parsed.args,shellContext);
}