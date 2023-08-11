const express = require('express');
const mongoose = require('mongoose');
const routerUsers = require('./routes/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`Приложение слушает порт ${PORT}`);
});

app.use('/users', routerUsers);
