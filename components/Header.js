// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function Accueil() {
export default class Header extends React.Component{
    render(){
        return (
            <View style={styles.header}>
                <Text style={styles.h1Your}>Your</Text>
                <Text style={styles.h1Play}>Playlist</Text>
            {/* <StatusBar style="auto" /> */}
            </View>
           
         );
    }
  
}
const styles = {
  header: {
    backgroundColor: '#1d072e',
    marginTop:80,
    // flex: 1,
    flexDirection: 'row',
    marginTop:30,
    paddingTop:20,
    paddingBottom:20,


    // alignItems: 'center',
    // justifyContent: 'center',
  },

  h1Your: {
    color: 'white',
   backgroundColor: '#1d072e',
    marginLeft: 10,
  },
  h1Play: {
    color: 'yellow',
    marginLeft: 10,
backgroundColor: '#1d072e',
  }
};


