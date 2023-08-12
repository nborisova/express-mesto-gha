const router = require('express').Router();
const Card = require('../models/cards');
const { getAllCards, createCard, deleteCard } = require('../controllers/cards');

const doesCardExist = (req, res, next) => {
  const { _id } = req.user;

  if (!Card[_id]) {
    res.send({ error: 'Такой карточки нет' });
    return;
  }

  next();
};

router.get('/', getAllCards);
router.post('/', createCard);
router.delete('/:cardId', doesCardExist);
router.delete('/:cardId', deleteCard);

module.exports = router;
