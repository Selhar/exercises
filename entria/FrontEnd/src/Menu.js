import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Menu extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Button
            title="asdas a new user"
            color="#841584"            
        />
        <Button
            title="View or edit an existing user"
            color="#841584"            
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  }
});