import React,{Component} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import * as firebase from 'firebase';
import {firebaseConfig} from './config'

import LoadingScreen from './screens/LoadingScreen';
import LoginScreen from './screens/LoginScreen';
import DashboardScreen from './screens/DashboardScreen';
 
const AppSwitchNavigator = createSwitchNavigator({
   LoadingScreen : LoadingScreen,
   LoginScreen : LoginScreen,
   DashboardScreen : DashboardScreen,
})

const AppContainer = createAppContainer(AppSwitchNavigator);

if(!firebase.apps.length){
  firebase.initializeApp(firebaseConfig)
}
else{
  firebase.app()
}


export default function App(){
  return(
    <AppContainer/>
  )
}