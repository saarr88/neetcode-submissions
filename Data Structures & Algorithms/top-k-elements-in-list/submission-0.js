class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let topCounts = {}
        for(let val of nums){
            if(val in topCounts){
                topCounts[val] += 1
            } else {
                topCounts[val] = 1
            }
        }
        return Object.keys(topCounts)
            .sort((a, b) => topCounts[b] - topCounts[a])   // rank by count, high → low
            .slice(0, k)                                    // take top k
            .map(Number);   
    }
}
