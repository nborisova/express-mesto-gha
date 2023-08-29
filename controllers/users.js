const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/users');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const InternalServerError = require('../errors/internal-server-err');
const UnauthorizedError = require('../errors/unauthorized-err');
const ConflictError = require('../errors/conflict-err');

const CREATED = 201;

const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      const token = jwt.sign({ _id: user._id }, 'some-secret-key', { expiresIn: '7d' });
      res.send({ token });
    })
    .catch(() => next(new UnauthorizedError('Неправильные почта или пароль')));
};

const doesUserExist = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        next(new NotFoundError('Такого пользователя нет'));
      } else {
        next();
      }
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError('Некорректно задан id пользователя'));
      } else {
        next(new InternalServerError('На сервере произошла ошибка'));
      }
    });
};

const getAllUsers = (req, res, next) => {
  User.find({})
    .then((users) => res.send(users))
    .catch(() => next(new InternalServerError('На сервере произошла ошибка')));
};

const getUser = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => res.send(user))
    .catch(() => next(new InternalServerError('На сервере произошла ошибка')));
};

const createUser = (req, res, next) => {
  const {
    name, about, avatar, email, password,
  } = req.body;

  bcrypt.hash(password, 10)
    .then((hash) => User.create({
      name, about, avatar, email, password: hash,
    }))
    .then((user) => res.status(CREATED).send(user))
    .catch((err) => {
      if (err.code === 11000) {
        next(new ConflictError('Пользователь с таким email уже зарегистрирован'));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорретные данные'));
      } else {
        next(new InternalServerError('На сервере произошла ошибка'));
      }
    });
};

const getCurrentUser = (req, res, next) => {
  const { user } = req.body;

  User.findOne({ user })
    .then((userData) => res.send(userData))
    .catch(() => next(new InternalServerError('На сервере произошла ошибка')));
};

const updateUserProfile = (req, res, next) => {
  const { _id } = req.user;
  const { name, about } = req.body;

  User.findByIdAndUpdate(_id, { name, about }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорретные данные'));
      } else {
        next(new InternalServerError('На сервере произошла ошибка'));
      }
    });
};

const updateUserAvatar = (req, res, next) => {
  const { _id } = req.user;
  const { avatar } = req.body;

  User.findByIdAndUpdate(_id, { avatar }, {
    new: true,
    runValidators: true,
    upsert: true,
  })
    .then((user) => res.send(user))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError('Переданы некорретные данные'));
      } else {
        next(new InternalServerError('На сервере произошла ошибка'));
      }
    });
};

module.exports = {
  login,
  doesUserExist,
  getAllUsers,
  getUser,
  createUser,
  getCurrentUser,
  updateUserProfile,
  updateUserAvatar,
};
