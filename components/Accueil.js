import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// export default function Accueil() {
export default class Accueil extends React.Component{
    render(){
        return (
            <View>
                <Text>Accueil</Text>
                <StatusBar style="auto" />
            </View>
         );
    }
  
}


