const router = require('express').Router();
const { celebrate, Joi } = require('celebrate');
const {
  doesUserExist,
  getAllUsers,
  getUser,
  getCurrentUser,
  updateUserProfile,
  updateUserAvatar,
} = require('../controllers/users');

router.get('/', getAllUsers);
router.get('/me', getCurrentUser);
router.patch('/me', celebrate({
  body: Joi.object().keys({
    name: Joi.string().min(2).max(30),
    about: Joi.string().min(2).max(30),
  }),
}), updateUserProfile);
router.patch('/me/avatar', celebrate({
  body: Joi.object().keys({
    avatar: Joi.string().regex(/^https?:\/\/(www\.)?([a-z0-9-]+\.)+[a-z]{2,}(\/[\w-._~:/?#[\]@!$&'()*+,;=]*)*#?$/i),
  }),
}), updateUserAvatar);
router.get('/:userId', celebrate({
  params: Joi.object().keys({
    userId: Joi.string().alphanum().length(24),
  }),
}), doesUserExist);
router.get('/:userId', getUser);

module.exports = router;
