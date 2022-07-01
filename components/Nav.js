import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Nav extends React.Component{
    render(){
        return(
            <View>
                <Image
                                source={require('./images/image1Accueil.jpg')}
                                style={{width: 60, height:30}}  
                            />
            </View>
        );
    }
}