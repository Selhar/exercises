import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import Relay from 'react-relay';

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
            style = {styles.button}
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
    justifyContent: 'center',
    marginTop: 50,
    padding: 20,
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});