/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length != t.length) return false;
    const hashMap1 = {};
    const hashMap2 = {};
    for( let i = 0; i < s.length; i++){
        if(hashMap1[s[i]] === undefined) {
            hashMap1[s[i]] = i;
            if(hashMap2[t[i]]!== undefined) return false
            hashMap2[t[i]] = i;
        } else {
            if(hashMap2[t[i]]===undefined || hashMap1[s[i]] !== hashMap2[t[i]]) return false
        }

    }
    return true
};