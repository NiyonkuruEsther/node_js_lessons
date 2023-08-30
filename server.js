const http = require('http');

const server = http.createServer((req, res) => {
// the difference between setHeaders and writeHeaders is that writeHeaders can be used to set the status code 
// along side with the object containing a number of headers as well
  // res.setHeader('Content-Type', 'text/plain') this comes like normal response from backends with black background
  res.setHeader('Content-Type', 'text/html')
  res.write("Response just sent") // this is to be sent to the client as a part of the response body
  res.write('<h1> Why not </h1>') //this comes like normal html but you still have to wrap everything like a string
  res.end() // this is to mark a signal that the response is complete
  // to always stop the response from hanging you need to explicitly stop the response with res.end method
});

const port = 3000;
server.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
