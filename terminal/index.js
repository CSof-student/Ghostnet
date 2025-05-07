// @ts-check


import { runCommand } from "./commandRouter.js"
import {shellContext} from "./shell.js"
import {parseInput} from "./parser.js";
import { normalizePathTests } from "./tests.js";

let command;
 
// document.getElementById("placeholder button").onclick = function(){
//     console.log("button clicked");
//     command = document.getElementById("my text").value;
//     console.log(runCommand(parseInput(command),shellContext));

    

// }
const input= document.getElementById("command-input");
    if (input){
        input.addEventListener('keydown', (e)=>{
            if(e.key == 'Enter') {
                // @ts-ignore
                console.log(runCommand(parseInput(input.value),shellContext)[0]);
                

            }

        } )
}
normalizePathTests();

