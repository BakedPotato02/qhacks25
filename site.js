// Import the required 'fs' module for file operations
const fs = require('fs');

// Define the prompts
const purpose = ""
const border = ""
const color1 = ""
const color2 = ""
const text = ""
const artstyle = ""
const mascot = ""

// Test variable for Prompt (DO DELETE THIS FOR FINAL PRODUCT and replace the file)

const logoDescription = "Create a logo for ".concat(
    purpose,
    " with the border of the logo being ",
    border,
    ". The hex value for the primary color is ",
    color1,
    " the hex value for the secondary color is ",
    color2,
    ". The text that surrounds the logo the user wants to be implemented in the logo is: ",
    text,
    ". The artstyle of the logo is ",
    artstyle,
    " and the mascot should be within the borders of the logo. The mascot is ",
    mascot,
    "."
);

// Write to 'prompt.txt'

fs.writeFile('prompt', logoDescription, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
        return;
    }
        console.log('File has been written successfully!');
    });
