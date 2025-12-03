const fs = require("fs");

fs.writeFileSync("./output/temp.txt", "this is a temp file");
console.log("temp file created");

if(fs.existsSync("./output/temp.txt")) {
    console.log("The file exits!!!");

    fs.unlinkSync("./output/temp.txt");
    console.log("The file is deleted.");
};

try{
    fs.unlinkSync("./output/temp.txt")
} catch(error) {
    console.log("Error: ", error.message)
};

fs.writeFile("./output/temp2.txt", "Another temp file", (error) => {
    if(error) return console.error(error.message);

    console.log("Another temp file created");

    fs.unlink("./output/temp2.txt", (error) => {
        if(error) {
            console.error("Error: ", error.message);
        }
        else {
            console.log("Temp2 deleted")
        }
    })
});