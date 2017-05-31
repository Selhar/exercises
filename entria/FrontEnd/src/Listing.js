import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Teste extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
            title="Register a new user"
            color="#841584"            
        />
      </View>
    );
  }
}