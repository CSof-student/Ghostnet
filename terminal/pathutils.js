// @ts-check

import shellContext from "./shell.js";

//prolly the top priority, test extensively

// normalizes paths from home 
/*
    ex: from home/user/docs if cwd is /../projects/demo, 
    normalized path is home/user/projects/demo

*/


export function normalizePath(rawPath,cwd) {
    // if the thing that is attempting to normalize doesn't exist

    const rawPathArr = rawPath.split("/");
    let normalizedPath = [];
    let currNode = cwd||this.cwd;
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

//hopefully this version works
export function listChildrenNames(children) {
    if (!children || typeof children !== 'object') return [];

    // Case: if children is an object (keyed by name)
    if (!Array.isArray(children)) {
        return Object.keys(children);
    }

    // Case: if children is accidentally an array
    return children.map(c => c.name);
}

export function followPath(startNode, pathSegments) {
    let currentNode = startNode;
    for (const seg of pathSegments) {
        if(!currentNode.children || !currentNode.children[seg]) {
            console.error("path is invalid");
        }
        currentNode = currentNode.children[seg];
    }
    return currentNode;
}


