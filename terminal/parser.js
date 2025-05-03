 export function parseInput(input) {
    input = input.trim();

    // splits into basecomands and redirects if necesary, storing it in a redirect object
    if (input.includes(">>")) {
        [baseCommand, redirect] = input.split(">>");
        redirect = {type: ">>", target: redirect.trim()};
    }
    else if (input.includes(">")) {
        [baseCommand, redirect] = input.split(">");
        redirect = {type: ">", target: redirect.trim()}
    }

    // break the command string into words
    const args = [];
    let currentWord = "";
    let inQuotes = false;
    for (let i = 0; i < baseCommand.length; i++) {
        const char = baseCommand[i];

        // should read arguments in quotes as one argument
        if(char == '"') {
            inQuotes = !inQuotes;
        }

        if(char == " " && !inQuotes) {
            if(currentWord) {
                args.push(currentWord)
                currentWord = "";
            }
        } else{
            currentWord += char;
        }
    }
    if (currentWord) {
        args.push(currentWord);
    }
    
    //get the command name:
    const command = args.shift();
    return {
        command, 
        args, 
        redirect};

 }