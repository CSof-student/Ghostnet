
// @ts-check
import { normalizePath } from "../pathutils.js"
export function runLS(args, shellContext) {
    console.log("runls running, args are: ", args,"currnode is: " + shellContext.currNode.name);
    console.log("children exist: ",shellContext.currNode.children != null);
    //console.log(shellContext.currNode.children[0].type);
    

    //assuming for now that args[0] is a path or doesn't exist, that can't always be an assumption
    if(!args || !args[0] || args[0] == "") {
        if(shellContext.currNode.children==null) {
            return "";
        } else{
            return listChildrenNames(shellContext.currNode.children)
        }
        ;
    }

    const realPath = normalizePath(args[0],shellContext.currNode);
    return listChildrenNames(realPath[realPath.length - 1].children);

}

//hopefully this version works
function listChildrenNames(children) {
    if (!children || typeof children !== 'object') return [];

    // Case: if children is an object (keyed by name)
    if (!Array.isArray(children)) {
        return Object.keys(children);
    }

    // Case: if children is accidentally an array
    return children.map(c => c.name);
}

