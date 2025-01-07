function isSymmetrical(str) {
    // Remove non-alphanumeric characters and convert to lowercase
    str = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    // Compare the string with its reverse
    return str === str.split('').reverse().join('');
}

// Example usage
console.log(isSymmetrical("A man, a plan, a canal, Panama")); // true
console.log(isSymmetrical("hello")); // false