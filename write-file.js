const fs = require("fs");

const content = "This is a content \n nodejs is awesome!";

try {
    fs.writeFileSync("./output/text-sync.txt", content);
    console.log("file written sync");
} catch(error) {
    console.error(error.message);
}

const content2 = " This is a comtent2 \n asynchronous!";

fs.writeFile("./output/text-async.txt", content2, (error) => {
    if(error) {
        console.error(error.message);
    }
    else {
        console.log("file written asynchronously");
    }
});