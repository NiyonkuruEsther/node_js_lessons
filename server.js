const http = require('http');

const server = http.createServer((req, res) => {
  console.log("request made")
  // res.writable("yes")
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
