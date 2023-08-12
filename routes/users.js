const router = require('express').Router();
const User = require('../models/users');
const {
  getAllUsers,
  getUser,
  createUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

const doesUserExist = (req, res, next) => {
  const { userId } = req.params;

  if (!User[userId]) {
    res.send({ error: 'Такого пользователя нет' });
    return;
  }

  next();
};

router.get('/', getAllUsers);
router.get('/:userId', doesUserExist);
router.get('/:userId', getUser);
router.post('/', createUser);
router.patch('/me', updateUserProfile);
router.patch('/me/avatar', updateUserAvatar);

module.exports = router;
