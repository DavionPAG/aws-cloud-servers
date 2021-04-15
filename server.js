'use strict';

const express = require('express');
const app = express();

app.use(express.static('./public'));

app.get('/', (req,res) => {
  res.status(200).send('To le moon!');
});

// this isn't working
app.listen(process.env.PORT, () => console.log(`Port ==> ${process.env.PORT}`));
