// @ts-check

import shellContext from "./shell.js";

//prolly the top priority, test extensively

// normalizes paths from home 
/*
    ex: from home/user/docs if cwd is /../projects/demo, 
    normalized path is home/user/projects/demo

*/


export function normalizePath(rawPath,cwd) {
    const rawPathArr = rawPath.split("/");
    let normalizedPath = [];
    let currNode = this.cwd;
    //deals with .. case
    
    for(let i = 0; i < rawPathArr.length; i++) {
        
        if(rawPathArr[i] =="..") {
            currNode = currNode.parent;
            normalizedPath.pop();
        } else if(rawPathArr[i] == "."||rawPathArr[i] =='') {
            continue;
        } else{
            normalizedPath.push(rawPathArr[i]);
        }
    }

    return normalizedPath;


}


