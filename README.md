# 2D_Array_Assignment4
**Question 1**<br>
Given three integer arrays arr1, arr2 and arr3 sorted in strictly increasing order, return a sorted array of only the integers that appeared in all three arrays.<br>
**Example 1:**<br>
**Input:** arr1 = [1,2,3,4,5], arr2 = [1,2,5,7,9], arr3 = [1,3,4,5,8]<br>
**Output:** [1,5]<br>
**Explanation:** Only 1 and 5 appeared in the three arrays.<br><br>
Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans1.js)

**************************************************
**Question 2**<br>
Given two 0-indexed integer arrays nums1 and nums2, return a list answer of size 2 where:<br>
- answer[0] is a list of all *distinct integers in* nums1 which are *not present in* nums2*.*<br>
- answer[1] is a list of all *distinct integers in* nums2 which are *not present in* nums1*.<br>
**Note** that the integers in the lists may be returned in any order.<br>
**Example 1:**<br>
**Input:** nums1 = [1,2,3], nums2 = [2,4,6]<br>
**Output:** [[1,3],[4,6]]<br>
**Explanation:**<br>
For nums1, nums1[1] = 2 is present at index 0 of nums2, whereas nums1[0] = 1 and nums1[2] = 3 are not present in nums2. Therefore, answer[0] = [1,3].<br>
For nums2, nums2[0] = 2 is present at index 1 of nums1, whereas nums2[1] = 4 and nums2[2] = 6 are not present in nums2. Therefore, answer[1] = [4,6].<br><br>
Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans2.js)

**************************************************
**Question 3**<br>
Given a 2D integer array matrix, return the *transpose* of matrix.<br>
The *transpose* of a matrix is the matrix flipped over its main diagonal, switching the matrix's row and column indices.<br>
**Example 1:**<br>
**Input:** matrix = [[1,2,3],[4,5,6],[7,8,9]]<br>
**Output:** [[1,4,7],[2,5,8],[3,6,9]]<br>
![iamge_v3.png](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/img/iamge_v3.png)<br><br>
Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans3.js)

**************************************************
**Question 4**<br>
Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is *maximized. Return *the maximized sum.<br>
**Example 1:**<br>
**Input:** nums = [1,4,3,2]<br>
**Output:** 4<br>
**Explanation:** All possible pairings (ignoring the ordering of elements) are:<br>

1. (1, 4), (2, 3) -> min(1, 4) + min(2, 3) = 1 + 2 = 3<br>

2. (1, 3), (2, 4) -> min(1, 3) + min(2, 4) = 1 + 2 = 3<br>

3. (1, 2), (3, 4) -> min(1, 2) + min(3, 4) = 1 + 3 = 4<br>
So the maximum possible sum is 4.<br><br>
Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans4.js)

**************************************************
**Question 5**<br>
You have n coins and you want to build a staircase with these coins. The staircase consists of k rows where the ith row has exactly i coins. The last row of the staircase may be incomplete.
Given the integer n, return the number of *complete rows of the staircase you will build*.<br>
**Example 1:**<br>
![v2.jpg](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/img/v2.jpg)<br>

**Input:** n = 5<br>
**Output:** 2<br>
**Explanation:** Because the 3rd row is incomplete, we return 2.<br><br>
Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans5.js)

**************************************************
**Question 6**<br>
Given an integer array nums sorted in non-decreasing order, return an array of *the squares of each number sorted in non-decreasing order*.<br>
**Example 1:**<br>
**Input:** nums = [-4,-1,0,3,10]<br>
**Output:** [0,1,9,16,100]<br>
**Explanation:** After squaring, the array becomes [16,1,0,9,100].<br>
After sorting, it becomes [0,1,9,16,100]<br><br>

Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans6.js)

**************************************************
**Question 7**<br>
You are given an m x n matrix M initialized with all 0's and an array of operations ops, where ops[i] = [ai, bi] means M[x][y] should be incremented by one for all 0 <= x < ai and 0 <= y < bi.
Count and return the number of maximum integers in the matrix after performing all the operations<br>
**Example 1:**<br>

![q4.jpg](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/img/q4.jpg)<br>
**Input:** m = 3, n = 3, ops = [[2,2],[3,3]]<br>
**Output:** 4<br>
**Explanation:** The maximum integer in M is 2, and there are four of it in M. So return 4.<br><br>

Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans7.js)

**************************************************
**Question 8**<br>
Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
Return the array in the form [x1,y1,x2,y2,...,xn,yn].<br>
**Example 1:**<br>
**Input:**nums = [2,5,1,3,4,7], n = 3<br>
**Output:** [2,3,5,4,1,7]<br>
**Explanation:** Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].<br><br>
 Answer<br>
**code** [link](https://github.com/Srijana1425/2D_Array_Assignment4/blob/main/ans8.js)

**************************************************
