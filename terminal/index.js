// @ts-check


import { runCommand } from "./commandRouter.js"
import {shellContext} from "./shell.js"
import {parseInput} from "./parser.js";
import { lsTests, normalizePathTests } from "./tests.js";
import { fileSystem2 } from "./filesystem.js";



let command;
 
// document.getElementById("placeholder button").onclick = function(){
//     console.log("button clicked");
//     command = document.getElementById("my text").value;
//     console.log(runCommand(parseInput(command),shellContext));
//

// }
const input= document.getElementById("command-input")
const output= document.getElementById('output');

//prolly move this somewhere else later.:
function printLine(text) {
    const line = document.createElement('div');
    line.textContent = text;
    //output can be null, fix later with error handling
    // @ts-ignore
    output.appendChild(line);
}


    if (input){
        input.addEventListener('keydown', (e)=>{
            if(e.key == 'Enter') {

                

                //logs the output
                // @ts-ignore
                let commandOutput = runCommand(parseInput(input.value),shellContext)[0]
                console.log(commandOutput);
                
                // shows the output on screen--fix up later
                //@ts-ignore
                const command = input.value.trim();

                if(command !== '') {
                    //temp shows the comand run
                    printLine(`user@ghostnet:$ ${command}`)
                    //@ts-ignore
                    printLine(`user@ghostnet:$ ${commandOutput}`);
                }

                //empties the typing box
                //@ts-ignore
                input.value = '';

            }

        } )
}
normalizePathTests();
// console.log(parseInput("ls"));
// console.log(runCommand(parseInput("ls")),shellContext);
lsTests();


