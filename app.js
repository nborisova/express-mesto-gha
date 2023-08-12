const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routerUsers = require('./routes/users');
const routerCards = require('./routes/cards');

const { PORT = 3000 } = process.env;
const app = express();

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
});

app.listen(PORT, () => {
  console.log(`Приложение слушает порт ${PORT}`);
});

app.use(bodyParser.json());
app.use((req, res, next) => {
  req.user = {
    _id: '64d79f6aad8d227a097a5d13',
  };

  next();
});
app.use('/users', routerUsers);
app.use('/cards', routerCards);
