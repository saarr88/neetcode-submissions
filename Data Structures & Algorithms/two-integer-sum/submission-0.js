class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let obj = {}
        for(let n in nums){
            let complement = target - nums[n]
            if(complement in obj) return [Number(obj[complement]), Number(n)]
            obj[nums[n]] = n
        }
        return []
    }
}
