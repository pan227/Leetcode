var twoSum = function(nums, target) {
    const hashMap = new Map();
    for(const i in nums) {
        const num = nums[i];
        const complement = target - num;
        if(hashMap.get(num)) {
            return [hashMap.get(num), i];
        }
        hashMap.set(complement, i);
    }
    
};

// Test Case
console.log(twoSum([2,7,11,15], 9));