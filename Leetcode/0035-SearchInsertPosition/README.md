### [35] 搜索插入位置

#### 题目

**Problem** : Search Insert Position 搜索插入位置

**Difficulty** : Easy

**Related Topics** : Array / Binary Search

**Link** : [中文](https://leetcode.cn/problems/binary-search/)、 [English](https://leetcode.com/problems/binary-search/)

**Description**

​	给定一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。如果目标值不存在于数组中，返回它将会被按顺序插入的位置。 

​	请必须使用时间复杂度为 O(log n) 的算法。

​	Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

​	You must write an algorithm with O(log n) runtime complexity.

**Example 1** :

> Input: nums = [1,3,5,6], target = 5 
> 
> Output: 2 

**Example 2** :

> Input: nums = [1,3,5,6], target = 2 
> 
> Output: 1 

**Example 3** :

> Input: nums = [1,3,5,6], target = 7 
> 
> Output: 4 

**Constraints** :

> 1 <= nums.length <= $10^4$ 
> 
> $-10^4$ <= nums[i] <= $10^4$ 
> 
> nums contains distinct values sorted in ascending order. 
> 
> $-10^4$ <= target <= $10^4$ 

#### 解题思路及答案

[JavaScript 版本 1](./0035-1.js)

[JavaScript 版本 2](./0035-2.js)(执行时间减少)
