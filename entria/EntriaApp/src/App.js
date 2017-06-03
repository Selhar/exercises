import React, { Component } from 'react';
import Relay, { RootContainer, DefaultNetworkLayer } from 'react-relay/classic';
import ViewerQueryRoute from './views/ViewerQueryRoute';
//Adding all screens here for testing, at the end it should only be Menu.js
import UserList from './ListUsers';

// *****HAS TO BE INTERNAL IP. LOCALHOST DOESN'T WORK ON ANDROID.*******
Relay.injectNetworkLayer(new DefaultNetworkLayer('http://192.168.25.216:5000/graphql'));

export default class EntriaApp extends Component {
  render() {
    return (
      <RootContainer
        Component={UserList}
        route={new ViewerQueryRoute()}
      />
    )
  }
}