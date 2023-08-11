const router = require('express').Router();
const { users } = require('../models/users');

const getAllUsers = (req, res, next) => {
  res.send(users);

  next();
};

const doesUserExist = (req, res, next) => {
  const { userId } = req.params;

  if (!users[userId]) {
    res.send({ error: 'Такого пользователя нет' });
    return;
  }

  next();
};

const sendUser = (req, res, next) => {
  const { userId } = req.params;

  res.send(users[userId]);

  next();
};

const createUser = (req, res, next) => {
  const { name, about, avatar } = req.body;

  users.create({ name, about, avatar })
    .then((user) => res.send({ data: user }))
    .catch((err) => res.status(500).send({ message: 'Произошла ошибка' }));

  next();
};

router.get('/', getAllUsers);
router.get('/:userId', doesUserExist);
router.get('/:userId', sendUser);
router.post('/users', createUser);

module.exports = router;
