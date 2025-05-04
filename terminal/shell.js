import { fileSystem } from "./filesystem.js";

export const shellContext = {
    cwd: "/",
    history: [],
    env: {USER: "guest"},
    fs: fileSystem,
    outputBuffer: [],
    hooks:{}
}

export default shellContext;