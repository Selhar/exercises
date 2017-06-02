import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button, FlatList} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Relay from 'react-relay';

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

    let profile_data = [];
    
    xhr.onload = () => {
      for(let item of xhr.response.data.viewer.users.edges){
        profile_data.push(item.node)
      }
      this.setState({profiles: profile_data});
    };

    const query = "query {viewer {users {edges {node {name id}}}}}";
    xhr.send(JSON.stringify({ query: query }));
  }

  render() {
    if(this.state.profiles.length > 0){
      return (
         <View>
          <FlatList
            data={this.state.profiles} 
            keyExtractor={(item) => item.id}
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
