class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const numberHash = {}
        for(let k of nums){
            if(k in numberHash){
                return true
            } else {
                numberHash[k] = 1
            }
        }
        return false 
    }
}
