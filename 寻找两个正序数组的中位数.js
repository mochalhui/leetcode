/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    if(nums1.length && nums2.length){
        if(nums1[nums1.length-1]<nums2[0]){
       var resultArr=nums1.concat(nums2);
   }else if (nums1[0]>nums2[nums2.length-1]){
       var resultArr = nums2.concat(nums1)
   }else{
       var resultArr = nums1.concat(nums2);
       resultArr.sort()
   }
    }else{
        var resultArr = nums1.length ?nums1 :nums2;
    }
   console.log(resultArr)
    const arrLen = resultArr.length;
    return arrLen % 2 === 0 ? (resultArr[arrLen / 2 - 1] + resultArr[arrLen / 2]) / 2 : resultArr[(arrLen - 1) / 2];
};
console.log(findMedianSortedArrays([2],[1,3,4,5,6,7,8,9,10]))