import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {profiles: []}
  }
  
  static navigationOptions = {
    title: 'List of currently registered users',
  };

  componentWillMount() {
    let xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open("POST", "http://localhost:5000/graphql");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.setRequestHeader("Accept", "application/json");
    let output = [];
    
    xhr.onload = () => {
      for(let node of xhr.response.data.viewer.users.edges){
        output.push({
          name: node.name,
          id: node.id
        })
      }
      this.setState({profiles: output});
    };

    const query = "query {viewer {users {edges {node {name id}}}}}";
    xhr.send(JSON.stringify({ query: query }));
  }

  render() {
    if(this.state.profiles.length > 0){
      let output = [];
      for (let profile in this.state.profiles){
        output.push(
          <Text>{profile.name} - {profile.id}</Text>
        )
      }
      return (
         <View>
           <Text>
            {output}
          </Text>
        </View>
      )
    }
    return (
      <View>
        <Text>Loading...</Text>
      </View>
    );
  }
}

/* { renderProfiles.map((item) => {
          <Text> item.name - item.id </Text>
        }) }
        */