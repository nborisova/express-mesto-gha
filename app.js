const express = require('express');
const mongoose = require('mongoose');
const users = require('./models/users');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  // useCreateIndex: true,
  // useFindAndModify: false,
});

app.listen(PORT, () => {
  console.log(`Приложение слушает порт ${PORT}`);
});

app.get('/users', (req, res) => {
  res.send(users);
});

app.get('/users/:userId', (req, res) => {
  const { userId } = req.params;
  res.send(userId);
});

app.post('/users', (req, res) => {

});
