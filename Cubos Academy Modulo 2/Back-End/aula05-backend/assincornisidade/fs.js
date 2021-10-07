const fs = require('fs');
// console.log("antes de ler");
// console.log(fs.readFileSync("a.txt").toString());
// console.log("depois de ler");

console.log("antes de ler");
fs.readFile("a.txt", (err, data) => {
    if (err) {
        console.log("deu erro", err);
    } else {
        console.log(data.toString());
    }
});
fs.readFile("b.txt", (err, data) => {
    if (err) {
        console.log("deu erro", err);
    } else {
        console.log(data.toString());
    }
});
fs.readFile("c.txt", (err, data) => {
    if (err) {
        console.log("deu erro", err);
    } else {
        console.log(data.toString());
    }
});

console.log("depois de ler");
