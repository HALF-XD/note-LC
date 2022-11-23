#include <stdio.h>

int search(int* nums, int numsSize, int target){
    int left = 0;
    int right = numsSize-1;
    int middle = 0;
    while(left<=right) {
        middle = (left+right)/2;
        if(nums[middle] > target) {
            right = middle-1;
        }
        else if(nums[middle] < target) {
            left = middle+1;
        }
        else if(nums[middle] == target){
            return middle;
        }
    }
    return -1;
}

int main(void) {
	int nums[12] = {-1,0,3,5,9,12,99,123,145,166,187,222};
	int res = search(nums, 12, 12);
	printf("%d \n",res);
	return 0;
}