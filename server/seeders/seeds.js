const faker = require('faker');

const db = require('../config/connection');
const { User, Event } = require('../models');

db.once('open', async () => {
  await User.deleteMany({});
  await Event.deleteMany({});

  // create user data
  const userData = [
    {
      "username": "m_eck12",
      "email": "whatever@gmail.com",
      "password": "whatTheHell12345"
    },
    {
      "username": "twfb29@yahoo.com",
      "email": "neverAgain29@gmail.com",
      "password": "peopleCanSuck12345"
    }
  ];

  // for (let i = 0; i < 50; i += 1) {
  //   const username = faker.internet.userName();
  //   const email = faker.internet.email(username);
  //   const password = faker.internet.password();

  //   userData.push({ username, email, password });
  // }

  const createdUsers = await User.collection.insertMany(userData);

  // create events
  let createdEvents = [];
  for (let i = 0; i < 100; i += 1) {
    const eventText = faker.lorem.words(Math.round(Math.random() * 20) + 1);

    const randomUserIndex = Math.floor(Math.random() * createdUsers.ops.length);
    const { username, _id: userId } = createdUsers.ops[randomUserIndex];

    const createdEvent = await Event.create({ eventText, username });

    const updatedUser = await User.updateOne(
      { _id: userId },
      { $push: { events: createdEvent._id } }
    );

    createdEvents.push(createdEvent);
  }

  console.log('all done!');
  process.exit(0);
});
