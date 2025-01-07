const fs = require('fs');
const { join } = require('path');

// Read the JSON file
fs.readFile(join(__dirname,"compress.json"), 'utf8', (err, data) => {
    if (err) {
        console.error('Error reading file:', err);
        return;
    }
    try {
        // Parse the JSON data
        const jsonData = JSON.parse(data);

        // Stringify the JSON data with no spaces to minimize size
        const compressedData = JSON.stringify(jsonData);

        // Write the compressed JSON data to a new file
        fs.writeFile(join(__dirname, 'compress.json'), compressedData, (err) => {
            if (err) {
                console.error('Error writing file:', err);
                return;
            }
            console.log('JSON data compressed successfully.');
        });
    } catch (err) {
        console.error('Error parsing JSON:', err);
    }
});