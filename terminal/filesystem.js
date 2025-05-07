// @ts-check

//placeholder filesystem
export const fileSystem = {
    "/": {
        type: "dir",
        children: {
            "home": {
                type: "dir",
                children: {
                    "readme.txt": {
                        type: "file",
                        content: "welecome to ghostnet"
                    }
                }
            },
            "log": {
                type: "file",
                content: "somethings happened here..."
            }
        }
    }
}

// okay new plan: just construct a tree out of nodes
//generally don't touch this unless through the filesystem class to keep logical abstraction
class FSnode{
    
    constructor(name, type='dir', parent=null){
        this.name = name;
        this. type = type;
        this.parent=parent;
        if (this.type =='dir') {
            this.children = 'null';
        } 
        if (this.type = 'file'){
            this.content = null;
        }
    }
    //do I even need these getters in Javascript??

}

export class fileSystem2 {
    constructor() {
        this.root = new FSnode('/', 'dir', null);
    }

    createTestFileSystem() {
        //
    }

    //gets parent of node
    //just gonna violate the whole getter thing rn cuz this is javascript and I have no idea what I'm doing
    getNodeParent(node){
        return node.parent;
    }

    //adds file at the end of the path, impliment later
    addFile(path,content) {

    }

    //makes a dir at the end of the path, impliment later
    mkDir(path){

    }


}
//making the actual filesystem


//current structure
/*

/
--home
    --readme.txt
--log

*/
