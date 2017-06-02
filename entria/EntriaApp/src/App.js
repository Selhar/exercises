import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
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
    console.log(this.props.viewer.users.edges);
    return (
      <Text>viewer id: {this.props.viewer.id}</Text>
    )
  }
}

UserInfo = Relay.createContainer(UserInfo, {
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer {
      users {
        edges {
          node {
            id
            name
          }
        }
      }
    }`
  }
})

//console.log('\n\n\n\n\n'+UserInfo+"\nXX\n"+ViewerQueryRoute);
export default class EntriaApp extends Component {
  render() {
    return (
      <RootContainer
        Component={UserInfo}
        route={new ViewerQueryRoute()}
      />
    )
  }
}