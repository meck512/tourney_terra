const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
  }

  type Event {
    _id: ID
    eventCategory: String
    eventType: String
    ageGroup: String
    gender: String
    eventText: String
    createdAt: String
    username: String
    eventCount: Int
    dateOfEvent: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    me: User
    users: [User]
    user(username: String!): User
    events(username: String): [Event]
    event(_id: ID!): Event
  }

  type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addEvent(eventText: String, eventCategory: String, eventType: String, ageGroup: String, gender: String, dateOfEvent: String): Event
  }
`;

module.exports = typeDefs;
