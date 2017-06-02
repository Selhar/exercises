/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* 
   TODO:
   Relay []
   Refatoração de listusers []
   CSS []
   DELETE/UPDATE mutations []
*/

import React from 'react';
import { StackNavigator } from 'react-navigation';
import Menu from './Menu';
import ListUsers from './ListUsers';
import NewUser from './NewUser';
import Relay from 'react-relay';

const ViewerQuery = { viewer: () => Relay.QL`query { viewer }` }

Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql', {
    credentials: 'same-origin',
  })
);

class RelayApp extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>User Length: {this.props.viewer.users.edges.length}</Text>
      </View>
    );
  }
}

export default createRenderer(RelayApp, {
  queries: ViewerQuery,
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        users(first: 10) {
          edges {
            node {
              name
              id
            }
          }
        }
      }
    `,
  },
});


