const express = require ('express');
const app = express();

app.get('/', (req, res)=>{
    res.send('Welcome to my site!!\n.My name is Asfi Rahman.  ID: 16')
})

app.listen(8080, ()=>{
    console.log('Server is listening on port 8080....')
})