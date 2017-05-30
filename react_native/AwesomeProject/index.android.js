/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  Image,
  View
} from 'react-native';

const REQUEST_URL = 'https://raw.githubusercontent.com/facebook/react-native/master/docs/MoviesExample.json';

export default class AwesomeProject extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: null,
    };
  }

  componentDidMount() {
    this.fetchData();
  }

  fetchData() {
    fetch(REQUEST_URL)
      .then((response) => response.json())
      .then((response_data) => {
        this.setState({
          movies: response_data.movies,
        });
      }).done();
  }

  	render() {
    	if(!this.state.movies) {
			return this.renderLoadingView();
		}
		var movie = this.state.movies[0];
		return this.renderMovie(movie);
	}

	renderLoadingView() {
		return (
			<View style={styles.container}>
				<Text>
					Loading movies...
				</Text>
			</View>
		);
	}

	renderMovie(movie) {
		return (
			<View style={styles.container}>
				<Image
					source={{uri: movie.posters.thumbnail}}
					style={styles.thumbnail}
				/>
				<View style={styles.rightContainer}>
					<Text style={styles.title}>{movie.title}</Text>
					<Text style={styles.year}>{movie.year}</Text>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF'
    },
    thumbnail: {
      width: 53,
      height: 81
    },
    rightContainer: {
      flex: 1,
    },
    title: {
      fontSize: 20,
      marginBottom: 8,
      textAlign: 'center',
    },
    year: {
      textAlign: 'center'
    }
});

AppRegistry.registerComponent('AwesomeProject', () => AwesomeProject);
