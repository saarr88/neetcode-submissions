class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let result = []
        // result[0] = [0]
        let leftProduct =1 
        for(let i =0 ; i<nums.length;i++){
             result[i] = leftProduct
            leftProduct = leftProduct * nums[i];
        }
          let rightProduct = 1;                // "nothing to the right yet" = 1
            for (let i = nums.length - 1; i >= 0; i--) {
                result[i] = result[i] * rightProduct
                rightProduct = rightProduct *nums[i]
                // YOUR TURN: multiply result[i] by rightProduct, then fold nums[i] into rightProduct
            }
    return result

    }
}
