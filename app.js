const express = require('express')
const app = express()
const port = 3000

app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/about', (req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})
app.get('/contact', (req,res)=>{
    res.sendFile(__dirname + '/contact.html')
})
app.use('/', (req, res) => {
    res.status(404)
    res.send('page not found: 404')
})
app.listen(port, ()=> {
    console.log(`Example app listening on port ${port}`)
})