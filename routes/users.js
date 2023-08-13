const router = require('express').Router();
const User = require('../models/users');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

const NOT_FOUND_ERROR = 404;
const INTERNAL_SERVER_ERROR = 500;

const doesUserExist = (req, res, next) => {
  const { userId } = req.params;

  User.findById(userId)
    .then((user) => {
      if (!user) {
        res.status(NOT_FOUND_ERROR).send({ error: 'Такого пользователя нет' });
      } else {
        next();
      }
    })
    .catch(() => {
      res.status(INTERNAL_SERVER_ERROR).send({ message: 'На сервере произошла ошибка' });
    });
};

router.get('/', getAllUsers);
router.get('/:userId', doesUserExist);
router.get('/:userId', getUser);
router.post('/', createUser);
// router.patch('/me', doesUserExist);
router.patch('/me', updateUserProfile);
// router.patch('/me/avatar', doesUserExist);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
