const mongoose = require('mongoose');
// const validator = require('validator');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Поле "Название" должно быть заполнено'],
    minlength: [2, 'Минимальная длина поля - 2'],
    maxlength: [30, 'Максимальная длина поля - 30'],
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator: (v) => /https?:\/\/(www\.)?([a-z0-9-]+\.)+[a-z]{2,}(\/[\w-._~:/?#[\]@!$&'()*+,;=]*)*#?/gi.test(v),
      message: 'Некорректный URL',
    },
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'user',
  },
  likes: {
    type: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
    }],
    default: [],
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
}, { versionKey: false });

module.exports = mongoose.model('card', cardSchema);
