//@ts-check

import {fileSystem2 } from "./filesystem.js";
import {FSnode } from "./filesystem.js";

//keeps track of whats going on
//export const realFileSystem = new fileSystem2();

//let filesystem = new fileSystem2();

export const shellContext = {
    currNode: new FSnode("placeholder"),//should hold a node eventually
    history: [],
    env: {USER: "guest"},
    fs: null , //placeholder, should hold a filesystem eventually
    outputBuffer: [],
    hooks:{}
}

export default shellContext;