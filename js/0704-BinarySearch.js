/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1; // 闭区间
    while (left <= right) {
        // let mid = (left + right) / 2; // 错在忽略了js中不整除
        // let mid = Math.floor((left + right) / 2); // 溢出状况
        let mid = left + Math.floor((right - left) / 2);
        if (target < nums[mid]) {
            right = mid - 1;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
    return -1;
};