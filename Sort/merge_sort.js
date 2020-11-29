/**
 * external sorting
 * time complexity: N * logN
 * space complexity: N
 */

const mergeSort = function(nums) {
    if(nums.length === 1) return nums;
    const l = 0; 
    const h = nums.length - 1;
    const m = (l + h) / 2;
    const leftArr = nums.slice(0, m+1);
    const rightArr = nums.slice(m+1);
    const result = merge(mergeSort(leftArr), mergeSort(rightArr));
    return result;
}

const merge = function(left, right) {
    const result = [];
    let l_ind = 0, r_ind = 0;

    while(l_ind < left.length && r_ind < right.length) {
        if(left[l_ind] < right[r_ind]) {
            result.push(left[l_ind]);
            l_ind++;
        } else {
            result.push(right[r_ind]);
            r_ind++; 
        }
    }

    if(l_ind < left.length) return result.concat(left);
    if(r_ind < right.length) return result.concat(right);
}

const result = mergeSort([0, -1, 2]);
console.log("result, ", result);