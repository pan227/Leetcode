var lengthOfLongestSubstringTwoDistinct = function(s) {
    let n = s.length;
     if(n < 3) return n;
    let max = 2;
     let map = {};
     
     for(let i=0, j=0; j<s.length; j++) {
         map[s[j]] = j;
         
         if(Object.keys(map).length === 3) {
             const left = Object.values(map).reduce((acc, cur) => {
                 acc = Math.min(acc, cur);
                 return acc;
             }, Number.MAX_VALUE);
             delete map[s[left]];
             i = left + 1;
         }
 
         max = Math.max(max, j-i+1);
     }
     return max;
 };