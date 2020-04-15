const http = require('http');
const express = require('express');

const app = express();


app.use('/',(req, res, next) => {
    console.log('this always runs');
    next();
});


app.use('/add-product',(req, res, next) => {
    console.log('in add product');
    res.send('<h1>add product page</h1>');
});

app.use('/',(req, res, next) => {
    console.log('in another middle ware');
    res.send('<h1>hello from express js</h1>');
    console.log('---');
});

app.listen(3000);
console.log('server listening on 3000');
