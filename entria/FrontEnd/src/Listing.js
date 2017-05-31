import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Teste extends Component {
  static navigationOptions = {
    title: 'List of users',
  };
  render() {
    return (
      <View>
        <Button
            title="Register a new user"
            color="#841584"            
        />
      </View>
    );
  }
}