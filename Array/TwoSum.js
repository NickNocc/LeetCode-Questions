// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

var twoSum = function(nums, target) {
    let solution = [];
     let left = 0;
     let right = nums.length - 1;
     
     while(nums[left] + nums[right] != target) {
         if (left != right){
             right = right -1;
         }
         
         if (left == right) {
             left = left + 1;
             right = nums.length -1;
         }
     }
     solution.push(left);
     solution.push(right);
     return solution;
 };
