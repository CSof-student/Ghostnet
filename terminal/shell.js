//@ts-check

import {fileSystem2 } from "./filesystem.js";

//keeps track of whats going on

let filesystem = new fileSystem2();

export const shellContext = {
    currNode: filesystem.root,
    history: [],
    env: {USER: "guest"},
    fs: fileSystem2,
    outputBuffer: [],
    hooks:{}
}

export default shellContext;