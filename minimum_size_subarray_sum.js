// O(N) 
var minSubArrayLen = function(s, nums) {
    let left = 0;
    let sum = 0;
    let ans = Number.MAX_VALUE;
    for (let i=0; i<nums.length; i++) {
        sum+=nums[i];
        
        while(sum >= s) {
            ans = Math.min(ans, i - left + 1);
            sum-=nums[left++];          

        }
    }
    return  ans != Number.MAX_VALUE ? ans : 0;
};

//O(NlogN)
//binary search tree
