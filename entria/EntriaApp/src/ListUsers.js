import React, { Component } from 'react';
import { FlatList, Text, StyleSheet } from 'react-native';
import Relay from 'react-relay/classic';

class UserList extends Component {
  render () {
   //Print the object array for debugging
   //console.log('\n\n\n\n\n\n\n'+JSON.stringify(this.props.viewer.users.edges, null, 4));
   let data_root = this.props.viewer.users.edges;
    return (
      <FlatList style={styles.list}
        data={data_root} 
        keyExtractor={(item) => item.node.id}
        renderItem={({item}) => <Text style={styles.item}>{item.node.name}</Text>} 
      />
    )
  }
}

const styles = StyleSheet.create({ 
  list: { 
    flexDirection: 'row', 
    flexWrap: 'wrap', 
  }, 
  item: { 
    fontSize: 25, 
  }, 
});

export default UserList = Relay.createContainer(UserList, {
  fragments: {
    viewer: () => Relay.QL`
    fragment on Viewer {
      users(first: 50) {
        edges {
          node {
            id
            name
          }
        }
      }
    }`
  }
})