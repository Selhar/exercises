/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

/* 
   TODO:
   Relay []
   Refatoração de listusers []
   CSS []
   DELETE/UPDATE mutations []
*/
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';
import Menu from './Menu';
import ListUsers from './ListUsers';
import NewUser from './NewUser';

export default Navigation = StackNavigator({ 
    Menu: {screen: Menu}, 
    NewUser: {screen: NewUser},
    ListUsers: {screen: ListUsers}
});

