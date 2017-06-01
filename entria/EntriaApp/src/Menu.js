import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';

const ViewerQueries = { viewer: () => Relay.QL`query { viewer }` }

export default class Menu extends Component {
  static navigationOptions = {
    title: 'Menu',
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <View >
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