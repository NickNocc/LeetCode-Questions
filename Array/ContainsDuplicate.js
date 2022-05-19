// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
  var hashMap = {}

  if(nums.length === 1) {
      return false;
  }

  for (var i = 0; i < nums.length; i++) {
      if(!hashMap[nums[i]]){
          hashMap[nums[i]] = true
      } else {
          return true
      }
  }
  return false;
};
