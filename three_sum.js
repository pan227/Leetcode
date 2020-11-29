
//相同数字， i取第一个， 如果j已经在里面了，就取最后一个
//如果j 不确定在不在里面，就取任何一个，这个可以 包括  [0, 0, 0]

var threeSum = function(nums) {
    nums.sort((a, b) => a - b);
    const res = [];
    
    for(let i=0; i<nums.length - 2 && nums[i] <= 0; i++) {
        if(i==0 || nums[i] !== nums[i-1]) {
          twoSum(i, nums, res);    
        }
    }
    return res;
};

var twoSum = function(i, nums, res) {
    const hashMap = {};
    for(let j=i+1; j< nums.length; j++) {
        if(hashMap[nums[j]]) {
          res.push([nums[i], nums[hashMap[nums[j]]], nums[j]]);  
          while(j+1<nums.length && nums[j] === nums[j+1]) j++;
        }
        const complement = -nums[i] - nums[j];
        hashMap[complement] = j;                                
    }
 }