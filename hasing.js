const crypto = require("crypto");

console.log("\n MD5 Hash: ");
const md5Hash = crypto.createHash("md5").update("nawaz01711").digest("hex"); // nor recommended
const md5Hash2 = crypto.createHash("md5").update("nawaz01711").digest("hex");
console.log("input: nawaz01711");
console.log("MD5 HashPassword: ", md5Hash);
console.log("MD5 Hash2: ", md5Hash2);

// sha256
const sha256Hash = crypto.createHash("sha256").update("nawaz01711").digest("hex");
console.log("SHA256 HashPassword: ", sha256Hash);
// sha512
const sha512Hash = crypto.createHash("sha512").update("nawaz01711").digest("hex");
console.log("SHA256 HashPassword: ", sha512Hash);

console.log(2 ** 32 / 10 ** 9);

