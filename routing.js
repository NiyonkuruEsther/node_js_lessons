const http = require("http");


const server = http.createServer((req, res)=>{
res.setHeader('Content-Type', 'text/plain')
    let path = './html/'
    switch (req.url) {
        case "/":
            path += "main.html"
            break;
    
        default:
            // for redirection we use the setHeaders and target the location header and give it a new route
            path += "error.html"
            break;
    }
})

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});