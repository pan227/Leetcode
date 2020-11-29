/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    let stack = [];
    let skip = new Set(["..", ".", ""]);
    
    let splits = path.split("/");
    
    for(let dir of splits) {
        if(dir === ".." && stack.length > 0) stack.pop();
        else if(!skip.has(dir)) stack.push(dir);
    }
    
    let res = "";
    for(let i=stack.length-1; i>=0; i--) {
        const dir = stack[i];
        res = "/"+dir+res;
    } 
    
    return res.length === 0 ? "/" : res;
};