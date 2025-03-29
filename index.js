const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter',(req,res)=>{
    res.send('MUH me lele')
})

app.get('/xnxx',(req,res)=>{
    res.send('<h1>HARSH KI GAND FAAD</h1>')
})
app.get('/xhamster',(req,res)=>{
    res.send("<h2>Noty hora ha ke BKL</h2>")
})
app.get('/noty',(req,res)=>{
  res.send("<h2>teri daddi ka</h2>")
})
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})