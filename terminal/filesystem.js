
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

//current structure
/*

/
--home
    --readme.txt
--log

*/
