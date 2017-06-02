import Relay from 'react-relay';

export default class UserMutationRoute extends Relay.Mutation {

  getMutation() {
    return Relay.QL`mutation { RegisterEmail }`
  }

  getVariables() {
    return {
      email: this.props.email,
      name: this.props.name,
      password: this.props.password
    }
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
  getConfigs () {
    return [{
      type: 'RANGE_ADD',
      parentName: 'viewer',
      parentID: this.props.viewer.id,
      connectionName: 'user',
      edgeName: 'edge',
      rangeBehaviors: {
        '': 'append',
      },
    }]
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