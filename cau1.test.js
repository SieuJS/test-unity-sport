const isSymmetrical = require('./cau1');

test('isSymmetrical should return true for a symmetrical string with special characters', () => {
    expect(isSymmetrical("A man, a plan, a canal, Panama")).toBe(true);
});

test('isSymmetrical should return false for a non-symmetrical string', () => {
    expect(isSymmetrical("hello")).toBe(false);
});

test('isSymmetrical should return true for an empty string', () => {
    expect(isSymmetrical("")).toBe(true);
});

test('isSymmetrical should return true for a single character string', () => {
    expect(isSymmetrical("a")).toBe(true);
});

test('isSymmetrical should return true for a symmetrical string with mixed case', () => {
    expect(isSymmetrical("Madam")).toBe(true);
});

test('isSymmetrical should return false for a non-symmetrical string with special characters', () => {
    expect(isSymmetrical("No lemon, no melon")).toBe(false);
});