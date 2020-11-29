/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function(numCourses, prerequisites) {
    let inDegrees = new Array(numCourses).fill(0);
    let graph = [];
    
    for(let i=0; i<prerequisites.length; i++) {
        let pre = prerequisites[i];
        inDegrees[pre[0]]++;
        
        if(graph[pre[1]]) {
            graph[pre[1]].push(pre[0]);
        } else {
            graph[pre[1]] = [pre[0]];
        }
    }
    
    let queue = [];
    let zeroIndegree = 0;
    let result = [];
    for(let i=0; i<numCourses; i++) {
        if(inDegrees[i] === 0) queue.push(i);
    }
    
    while(queue.length > 0) {
        let cur = queue.shift();
        zeroIndegree++;
        const toTake = graph[cur] || [];
        result.push(cur);
        for(let i=0; i<toTake.length; i++) {
            const totake = toTake[i];
            inDegrees[totake]--;
            if(inDegrees[totake] === 0) queue.push(totake);
        }
        
    }
    if(zeroIndegree !== numCourses) return [];
    return result;
};