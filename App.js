import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


import Accueil from './components/Accueil';
import Header from './components/Header';
// export default function App() {
export default class App extends React.Component{
  render(){
    return (
      <>
      <Header />
      <Accueil />
      </>
      
    );
  }
}


// const styles = StyleSheet.create({

