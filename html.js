const http = require('http')
const fs =  require('fs');
const path = require('path');

const server = http.createServer((req, res)=>{
    const errorPath = "./html/error.html"
    const mainPagePath = path.join(__dirname, 'html', 'main.html');


    fs.readFile(mainPagePath, (err, data)=>{
        if (err) {
           console.log(err) 
           res.writeHead(500, { 'Content-Type': 'text/plain' });
           res.end('Internal error')
        }
        else{
            console.log("Success");
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data)
        }
    })
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});