const path = require("path");

console.log("Current file info: \n");
console.log("Filename: ", __filename);
console.log("Directory: ", __dirname);

console.log("\n" + "-".repeat(50) + "\n");

const filePath = "/nawaz/document/nextLevel.pdf";

console.log("analyzing Path :", filePath, "\n");
console.log("Directory: ", path.dirname(filePath));
console.log("Base name: ", path.basename(filePath));    
console.log("Base name: ", path.basename(__filename)); 
console.log("File Extension: ", path.extname(filePath));
console.log("File Name: ", path.basename(filePath, path.extname(filePath)));

console.log("\n" + "-".repeat(50) + "\n");

const parsed = path.parse(filePath);
console.log("Parsed path object: ", parsed);

console.log("\n" + "-".repeat(50) + "\n");

console.log("formatted path: ", path.format(parsed));