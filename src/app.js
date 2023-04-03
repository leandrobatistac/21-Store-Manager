const express = require('express');
const productsRouter = require('./router/productsRouter');
const salesRouter = require('./router/salesRouter');

const app = express();

app.get('/', (_request, response) => {
  response.send();
});

app.use('/products', productsRouter);
app.use('/sales', salesRouter);

module.exports = app;
