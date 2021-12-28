const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    eventText: {
      type: String,
      required: 'You need to post an event!',
      minlength: 1,
      maxlength: 280
    },
    eventCategory: {
      type: String
    },
    sports: {
      type: String
    },
    gamblingBingo: {
      type: String
    },
    gamingEsports: {
      type: String
    },
    cookingCrafts: {
      type: String
    },
    ageGroup: {
      type: String
    },
    gender: {
      type: String
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: timestamp => dateFormat(timestamp)
    },
    username: {
      type: String,
      required: true
    },
  },
  {
    toJSON: {
      getters: true
    }
  }
);




const Event = model('event', eventSchema);

module.exports = Event;
