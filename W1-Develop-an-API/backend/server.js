const express = require('express')
const app = express()
const port = 8080
const professionalRoutes = require('./routes/professional');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
}).use('/professional', professionalRoutes);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})