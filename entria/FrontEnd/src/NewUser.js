import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import request from 'request';

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

/*
endereço: http://localhost:5000/graphql/
Query pra adição de e-mail:

query: ```
      mutation {
        RegisterEmail(input: {name: "abc" email: "abc@dfg.com" password: "asd"}){
          token
        }
      }
       ```
*/
  sendUserData() {
    request.post('http://localhost:5000/graphql/', {form:{key:'teste'}})
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