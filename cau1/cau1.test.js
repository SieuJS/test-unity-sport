const isSymmetrical = require('./cau1');

test('isSymmetrical should return true for a symmetrical string with special characters', () => {
    expect(isSymmetrical("A man, a plan, a canal, Panama")).toBe(false);
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
    expect(isSymmetrical("Madam")).toBe(false);
});

test('isSymmetrical should return false for a non-symmetrical string with special characters', () => {
    expect(isSymmetrical("No lemon, no melon")).toBe(false);
});
test('isSymmetrical should return true for a symmetrical string with spaces', () => {
    expect(isSymmetrical("race car")).toBe(true);
});

test('isSymmetrical should return false for a non-symmetrical string with spaces', () => {
    expect(isSymmetrical("hello world")).toBe(false);
});

test('isSymmetrical should return true for a symmetrical string with numbers', () => {
    expect(isSymmetrical("12321")).toBe(true);
});

test('isSymmetrical should return false for a non-symmetrical string with numbers', () => {
    expect(isSymmetrical("12345")).toBe(false);
});

test('isSymmetrical should return false for a symmetrical string with mixed characters', () => {
    expect(isSymmetrical("A Santa at NASA")).toBe(false);
});


