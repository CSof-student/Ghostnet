
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
class FSnode{
    constructer(name, type='dir', parent=null){
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
}

class fileSystem {
    constructor() {
        this.root = new FSnode('/', 'dir', null);
    }

    //adds file at the end of the path, impliment later
    addFile(path,content) {

    }

    //makes a dir at the end of the path, impliment later
    mkDir(path){

    }


}
//current structure
/*

/
--home
    --readme.txt
--log

*/
