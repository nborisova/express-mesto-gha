const router = require('express').Router();
const Card = require('../models/cards');
const {
  getAllCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

const NOT_FOUND_ERROR = 404;
const INTERNAL_SERVER_ERROR = 500;

const doesCardExist = (req, res, next) => {
  const { cardId } = req.params;

  Card.findById(cardId)
    .then((card) => {
      if (!card) {
        res.status(NOT_FOUND_ERROR).send({ error: 'Такой карточки нет' });
      } else {
        next();
      }
    })
    .catch(() => {
      res.status(INTERNAL_SERVER_ERROR).send({ message: 'На сервере произошла ошибка' });
    });
};

router.get('/', getAllCards);
router.post('/', createCard);
router.delete('/:cardId', doesCardExist);
router.delete('/:cardId', deleteCard);
router.put('/:cardId/likes', doesCardExist);
router.put('/:cardId/likes', likeCard);
router.delete('/:cardId/likes', doesCardExist);
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
