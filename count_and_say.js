/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function(n) {
    let say = "1";
    
    for(let i=1; i<n; i++) {
        let sb = [];
        let start = say[0];
        
        let count = 0;
        
        for(let j=0; j<say.length; j++) {
            let c = say[j];
            
            if(c===start) {
                count++;
            } else {
                sb.push(count);
                sb.push(start);
                count = 1;
                start = say[j];
            }
        }
        
        sb.push(count);
        sb.push(start);
        say = sb.join("");
    }
    
    return say;
};