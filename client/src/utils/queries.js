import gql from 'graphql-tag';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
    }
  }
`;

export const QUERY_ME = gql`
  {
    me {
      _id
      username
      email
    }
  }
`;
export const QUERY_USERS = gql` {
  users {
    _id
    username
    email
  }
}
`;

export const QUERY_ME_BASIC = gql`
  {
    me {
      _id
      username
      email
      
      Event {
        _id
        eventCategory
        ageGroup
        gender
        eventText
        createdAt
      }
    }
  }
`;

export const Query_Event = gql`
  query events($username: String) {
    events(username: $username) {
      _id
      eventCategory
      createdAt
      username
      eventType
      ageGroup
      gender
      eventText
      dateOfEvent
    }
  }
  `;
