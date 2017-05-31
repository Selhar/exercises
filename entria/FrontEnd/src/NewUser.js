import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Teste extends Component {
  constructor(props) {
    super(props);
    this.state = { email: '' };
    this.state = { name: '' };
    this.state = { password: '' };
  }
  
  static navigationOptions = {
    title: 'Add a new user',
  };

  sendUserData() {
    fetch('http://localhost:5000/graphql/',{ method: "POST", body: "boga"})

  }

  render() {
    return (
      <View>
        <TextInput
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder={'Your name'}
        />
        <TextInput
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder={'your@email.com'}
        />
        <TextInput
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={'Your password'}
        />
        <Button
            onPress={() => this.sendUserData()}
            title="Submit"
            color="#841584"            
        />
      </View>
    );
  }
}