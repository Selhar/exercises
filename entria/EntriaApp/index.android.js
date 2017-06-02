/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import Relay, { Route, RootContainer, DefaultNetworkLayer } from 'react-relay/classic';

//*****HAS TO BE INTERNAL IP. LOCALHOST DOESN'T WORK ON ANDROID.*******
Relay.injectNetworkLayer(new DefaultNetworkLayer('http://192.168.25.216:5000/graphql'))

class ViewerQueryRoute extends Route {
  static queries = {
    viewer: () => Relay.QL` query { viewer } `
  }
  static routeName = 'ViewerQueryRoute'
}

class UserInfo extends Component {
  render () {
    return (
      <Text>viewer id: {this.props.viewer.id}</Text>
    )
  }
}

UserInfo = Relay.createContainer(UserInfo, {
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer {
      id
    }`
  }
})

//console.log('\n\n\n\n\n'+UserInfo+"\nXX\n"+ViewerQueryRoute);
class RenderAttempt extends Component {
  render() {
    return (
      <RootContainer
        Component={UserInfo}
        route={new ViewerQueryRoute()}

      />
    )
  }
}

AppRegistry.registerComponent('EntriaApp', () => RenderAttempt);
