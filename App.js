import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, ScrollView, Text, View } from 'react-native';
import Header from './components/Header';

const App = () => {
  return(
    <>
    <StatusBar
    backgroundColor='#000000'
    barStyle='dark-content'
    />
    <ScrollView
      backgroundColor='green'
    >
      <Header/>
    </ScrollView>
    </>
  )
}

export default App;