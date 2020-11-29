/**
 * time Complexity: N * logN
 * space Complexith: N
 */

const quickSort = function(nums) {
  quick_sort(nums, 0, nums.length - 1);
}

const quick_sort = function(nums, l, h) {
    if(l<h) {
        const piv = partition(nums, l, h);
        quick_sort(nums, l, piv - 1);
        quick_sort(nums, piv + 1, h);
    }
}

const partition = function(nums, l, h) {
    let i = l - 1;

    const p = nums[h];

    for(let j=l; j<h; j++) {
        if(nums[j] < p) {
            i++;
            swap(nums, i, j);
        }
    }
    swap(nums, i+1, h);
    return i+1;
}

const swap = function(nums, i, j) {
    const temp = nums[i];
    nums[i] = nums[j];
    nums[j] = temp;
}
const nums = [2, -1, 3, 0];
quickSort(nums);
console.log(nums);