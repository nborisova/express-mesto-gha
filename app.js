const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');
const {
  login,
  createUser,
} = require('./controllers/users');
const auth = require('./middlewares/auth');

const { PORT = 3000, DB_URL = 'mongodb://localhost:27017/mestodb' } = process.env;

const app = express();

const NOT_FOUND_ERROR = 404;

mongoose.connect(DB_URL, { useNewUrlParser: true });

app.use(bodyParser.json());
app.post('/signin', login);
app.post('/signup', createUser);
app.use(auth);
app.use('/users', routerUsers);
app.use('/cards', routerCards);
app.use((req, res) => {
  res.status(NOT_FOUND_ERROR).send({ message: 'Такой страницы не существует' });
});
app.use((err, req, res, next) => {
  res.status(err.statusCode).send({ message: err.message });
});

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Приложение слушает порт ${PORT}`);
});
