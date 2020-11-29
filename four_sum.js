/**
 * 可以考虑 K sum
 * use recursive to break it into k-1, k-2 ... 2
 * time complexity: n ^ (k-1)
 * space complexity: n
 */
var fourSum = function(nums, target) {
    nums.sort((a, b) => a - b);
    return kSum(nums, target, 0, 4);
    
};

var kSum = function(nums, target, start, k) {
    const res = [];
    
    if(start === nums.length - 1 || nums[start] * k > target || nums[nums.length - 1] * k < target) {
        return res;
    }
    
    if(k === 2) {
        return twoSum(nums, target, start);
    }
    
    for(let i=start; i<nums.length - k + 1; i++) {
        if(i == start || nums[i] !== nums[i-1]) {
            const result = kSum(nums, target - nums[i], i+1, k-1);
            for(let j = 0; j<result.length; j++) {
                res.push([nums[i], ...result[j]]);
            }
        }
    }
    
    return res;
}

var twoSum = function(nums, target, start) {
    const res = [];
    let l = start, h = nums.length - 1;
    while(l < h) {
        const sum = nums[l] + nums[h];

        if (sum < target || l!== start && nums[l] === nums[l-1]) {
            l++;
        } else if (sum > target || h!== nums.length - 1 && nums[h] === nums[h+1]) {
            h--;
        } else {
            res.push([nums[l], nums[h]]);
            l++; 
            h--;
        }
    }
    return res;
}