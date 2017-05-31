import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Button
          onPress={() => navigate('NewUser')}
          title="Add a new user"
          color="#841584"            
        />
        <Button
            onPress={() => navigate('ListUsers')}
            title="View all registered users"
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