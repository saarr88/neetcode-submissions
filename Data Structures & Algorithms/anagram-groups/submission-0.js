class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        const group = {}
        for(let val of strs){
            let sort = val.split('').sort().join('')
            if(sort in group){
                group[sort].push(val)
            } else {
                group[sort] = [val]
            }
        }
        return Object.values(group)
    }
}
