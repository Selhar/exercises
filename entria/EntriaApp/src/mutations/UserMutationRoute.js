import Relay from 'react-relay';

export default class UserMutationRoute extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation RegisterEmail`
  }

  getFatQuery() {
    return Relay.QL`
      fragment on User {
        name
        email
        id      
      }
      `;
  }  
  static fragments = {
    viewer: () => Relay.QL`
      fragment on User {
        email,
        name,
      }
    `,
  };
}