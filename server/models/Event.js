const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
const dateFormat = require('../utils/dateFormat');

const eventSchema = new Schema(
  {
    eventText: {
      type: String,
      required: 'You need to post an event!',
      minlength: 1,
      maxlength: 280
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

eventSchema.virtual('reactionCount').get(function() {
  return this.reactions.length;
});

const Event = model('event', eventSchema);

module.exports = Event;
