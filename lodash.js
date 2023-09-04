const http = require("http")
const _ = require('lodash')

const server = http.createServer((req, res)=>{

})

const port = '3000'

const lodash = _.once(()=>{
    console.log("Yello yeveryone");
})

lodash()
lodash()

server.listen(port, ()=>{
  console.log(`Server listening on port ${port}`);
})