class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        let counts = {}
        for(let val of s){
            if(val in counts){
                counts[val] += 1

            } else {
                counts[val] = 1
            }
        }

        for(let val of t){
            if(!(val in counts)|| counts[val] === 0) 
            { 
                return false
            }else {
                counts[val] -=1
            }

        }
        return true

    }
}
