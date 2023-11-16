var fs = require('fs');
console.log("hi")

let result = readFile("localStorage.json")

makeImages(result);

console.log(result)

function readFile(path) {

    var obj = JSON.parse(fs.readFileSync(path, 'utf8'));

    return obj;
}


function makeImages(arr) {
    const Qr = require("qrcode");

    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        Qr.toFile(`pn${i}.png`, element)
    }
}