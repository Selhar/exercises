import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList} from 'react-native';
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
      for(let item of xhr.response.data.viewer.users.edges){
        output.push(item.node)
      }
      this.setState({profiles: output});
    };

    const query = "query {viewer {users {edges {node {name id}}}}}";
    xhr.send(JSON.stringify({ query: query }));
  }

  render() {
    if(this.state.profiles.length > 0){
      let output = [];

      for(let i = 0; i < this.state.profiles.length; i++){
        output.push(
          <Text>{this.state.profiles[i].name}</Text>
        )
      }
      
      return (
         <View>
          <FlatList 
            data={this.state.profiles} 
            renderItem={({item}) => <Text>{item.name}</Text>} 
          />
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