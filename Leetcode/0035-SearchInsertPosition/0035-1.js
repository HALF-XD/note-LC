/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    while (left <= right) {
        if (target < nums[left]) {
            return left;
        }
        if (target > nums[right]) {
            return right + 1;
        }

        let mid = left + Math.floor((right - left) / 2);
        if (target < nums[mid]) {
            right = mid - 1;
        } else if (target > nums[mid]) {
            left = mid + 1;
        } else {
            return mid;
        }
    }
};