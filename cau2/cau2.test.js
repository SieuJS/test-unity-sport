const twoSum = require('./cau2');
test('twoSum should return [0, 1] for [2, 7, 11, 15] and target 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([[0, 1]]);
});
test('twoSum should return [1, 2] for [3, 2, 4] and target 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([[1, 2]]);
});

test('twoSum should return [0, 1] for [3, 3] and target 6', () => { 
    expect(twoSum([3, 3], 6)).toEqual([[0, 1]]);
});

test('twoSum should return [1,2] , [0,3] for [2, 7, 11, 15] and target 9', () => {
    expect(twoSum([2, 7, 11, 15, 5, 4, 7], 9)).toEqual([[0, 1], [4,5], [0,6]]);
});