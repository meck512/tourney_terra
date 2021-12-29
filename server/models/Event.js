const { Schema, model } = require('mongoose');

const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    eventText: {
      type: String
    },
    eventCategory: {
      type: String
    },
    eventType: {
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
