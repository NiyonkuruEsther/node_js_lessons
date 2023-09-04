const express = require('express')
const app = express()

app.get('/', function (req, res) {
    res.sendFile('/html/main.html', {root: __dirname})
    // res.send('Hello World')
})

// the app.use is used upon any route regardlessly
// , if you put the use on top of any get then that get will be ignored and 
//  instead whenever you want to get that url then you can't access it

// since express can't know that this is an error thus we have to set it automaticaly
// So that this use will be used only when there is an error or a certain thing
// However if you still put the use above it won't work
app.use((req, res)=>{
    // To achive the error thing we use the checking of status code
  res.status(404).sendFile('/html/error.html', {root: __dirname})
})

app.listen(3000)