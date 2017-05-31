/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Menu from './Menu';
import Teste from './Listing';

export default Navigation = StackNavigator({ 
    Menu: {screen: Menu}, 
    Teste: {screen: Teste}
});


