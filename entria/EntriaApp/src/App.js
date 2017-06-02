import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
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
   //Print the object array for debugging
   //console.log('\n\n\n\n\n\n\n'+JSON.stringify(this.props.viewer.users.edges, null, 4));

   let data_root = this.props.viewer.users.edges;
    return (
      <FlatList
        data={data_root} 
        keyExtractor={(item) => item.node.id}
        renderItem={({item}) => <Text>{item.node.name}</Text>} 
      />
    )
  }
}

UserInfo = Relay.createContainer(UserInfo, {
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer {
      users(first: 50) {
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