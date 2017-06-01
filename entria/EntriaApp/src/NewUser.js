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

  sendUserData = () => {
    const { navigate } = this.props.navigation;
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://localhost:5000/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");

    xhr.onload = () => navigate('ListUsers')
    
    let name = this.state.name;
    let email = this.state.email;
    let password = this.state.password;
    
    const query = `mutation RegisterEmail($input: RegisterEmailInput!) {
        RegisterEmail(input: $input) {
          token
        }
      }`;
    xhr.send(JSON.stringify({
      query: query,
      variables: {
        input: {
          name: name, email: email, password: password
        }
      }
    }));
}

  render() {
    return (
      <View>
        <TextInput
          style={styles.inputField}
          onChangeText={(name) => this.setState({name})}
          value={this.state.name}
          placeholder={'Your name'}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={(email) => this.setState({email})}
          value={this.state.email}
          placeholder={'your@email.com'}
        />
        <TextInput
          style={styles.inputField}
          onChangeText={(password) => this.setState({password})}
          value={this.state.password}
          secureTextEntry={true}
          placeholder={'Your password'}
        />
        <Button
            style={styles.button}
            onPress={() => this.sendUserData()}
            title="Submit"  
        />
      </View>
    );
  }
}


const styles = StyleSheet.create({ 
  inputField: {
    fontSize: 25,
    justifyContent: 'center',
    textAlign: 'center',
    padding: 25,
  },  
  button: {
    height: 36,
    backgroundColor: '#fff',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 25,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});