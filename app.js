const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');

const { PORT = 3000, DB_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

const NOT_FOUND_ERROR = 404;

mongoose.connect(DB_URL, { useNewUrlParser: true });

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '64d79f6aad8d227a097a5d13',
  };

  next();
});
app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: 'Такой страницы не существует' });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Приложение слушает порт ${PORT}`);
});
