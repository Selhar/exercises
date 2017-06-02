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

Relay.injectNetworkLayer(new DefaultNetworkLayer('http://localhost:5000/graphql'))

export default class EntriaApp extends Component {
  render() {
    return (
    );
  }
}
AppRegistry.registerComponent('EntriaApp', () => EntriaApp);
