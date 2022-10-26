var http = require('http'); // 1 - Import Node.js core module

let c;

var server = http.createServer(function (req, res) {   // 2 - creating server

    console.log("\nNEW REQUEST\n")

    const chunks = [];

    req.on('data', chunk => chunks.push(chunk))
    req.on('end', () => {
        const data = Buffer.concat(chunks)
        c = data.toString()
        console.log(c)
    })

    // res.on("data", (chunk) => {
    //     console.log(chunk)
    // })

    res.writeHead(200)
    res.end()

});

server.listen(8080); //3 - listen for any incoming requests

console.log('Node.js web server at port 8080 is running..')