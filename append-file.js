const fs = require("fs");

fs.writeFileSync("./output/app.log", "Application Started \n");
console.log("file created");

const logEntry = `${new Date().toISOString()} user logged in \n`;
fs.appendFileSync("./output/app.log", logEntry);

const logEntry2 = `${new Date().toISOString()} user data fetched \n`;
fs.appendFileSync("./output/app.log", logEntry2);