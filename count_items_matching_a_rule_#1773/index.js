/**
 * @param {string[][]} items
 * @param {string} ruleKey
 * @param {string} ruleValue
 * @return {number}
 */
var countMatches = function (items, ruleKey, ruleValue) {
  const keyIndex = {
    type: 0,
    color: 1,
    name: 2,
  };
  const index = keyIndex[ruleKey];
  let count = 0;
  items.forEach((element) => {
    if (element[index] === ruleValue) count++;
  });
  return count;
};
