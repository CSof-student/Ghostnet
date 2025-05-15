
// @ts-check
import { normalizePath } from "../pathutils.js"
import {listChildrenNames} from "../pathutils.js";
import{followPath} from "../pathutils.js";
export function runLS(args, shellContext) {
   // console.log("runls running, args are: ", args,"currnode is: " + shellContext.currNode.name);
    //console.log("children exist: ",shellContext.currNode.children != null);
    //console.log(shellContext.currNode.children[0].type);
    

    //assuming for now that args[0] is a path or doesn't exist, that can't always be an assumption
    try{

        if(!args || !args[0] || args[0] == "") {
            if(shellContext.currNode.children==null) {
                return [];
            } else{
                return listChildrenNames(shellContext.currNode.children)
            }
            
        }

        const realPath = normalizePath(args[0],shellContext.currNode);
        const targetNode = followPath(shellContext.currNode,realPath)

        //checks if target node is a file
        if(targetNode.type=='file') {
            throw new Error('Ls error: cannot LS on a file');
        }
        let childrenNames = listChildrenNames(targetNode.children);
        return childrenNames;
        //return listChildrenNames(realPath[realPath.length - 1].children);
    } catch (e){
        throw new Error(`ls error: ${e.message}`);
    }

}



