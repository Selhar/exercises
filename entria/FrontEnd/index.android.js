/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import Relay, { 
  Route,
  RootContainer,
  DefaultNetworkLayer
} from 'react-relay/classic'
console.log("\nXXXXXXXXXXXXX\n")
Relay.injectNetworkLayer(
  new Relay.DefaultNetworkLayer('http://localhost:5000/graphql', {
    credentials: 'same-origin',
  })
);
console.log("\nTTTTTTTTTTTTTTT\n")
class RelayApp extends Component {
  render() {
    return (
      <View style={styles.center}>
        <Text>User Length: {this.props.viewer.users.edges.length}</Text>
      </View>
    );
  }
}

// Create a Relay.Renderer container
let teste = createRenderer(RelayApp, {
  queries: ViewerQuery,
  fragments: {
    viewer: () => Relay.QL`
      fragment on Viewer {
        users(first: 10) {
          edges {
            node {
              name
            }
          }
        }
      }
    `,
  },
});
AppRegistry.registerComponent('FrontEnd', () => teste);
