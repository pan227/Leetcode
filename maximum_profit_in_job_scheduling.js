/**
 * @param {number[]} startTime
 * @param {number[]} endTime
 * @param {number[]} profit
 * @return {number}
 */
var jobScheduling = function(startTime, endTime, profit) {
    let jobs = [];
    let n = startTime.length;
    for(let i=0; i<n; i++) {
        jobs.push({s: startTime[i], e: endTime[i], p: profit[i]});
    }
    
    jobs.sort((x, y) => (x.e -y.e));
    
    let dp = [jobs[0].p];
    
    for(let i=1; i<n; i++) {
        let profit = jobs[i].p;
        
        let no_overlap = -1;
        for(let j=i-1; j>=0; j--) {
            if(jobs[j].e <= jobs[i].s) {
                no_overlap = j;
                break;
            }
        }
        
        if(no_overlap !== -1) {
            profit += dp[no_overlap];
        }
        dp[i] = Math.max(profit, dp[i-1]);
    }
    
    return dp[n-1];
};