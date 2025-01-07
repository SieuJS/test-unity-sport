
function allPairs(nums, target) {
    const map = new Map();
    const result = [];
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            result.push([map.get(complement), i]);
        }
        map.set(nums[i], i);
    }
    return result;
}

module.exports = allPairs ;
