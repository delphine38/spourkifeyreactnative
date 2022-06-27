import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


import ImageAccueil from './images/imageAccueil.jpg';
// export default function Accueil() {
export default class Accueil extends React.Component{
    render(){
        return (
            <View>
                <Image
                    source={require('./images/imageAccueil.jpg')}
                    style={{width: 400, height:400}}  
                    
                 />
                <StatusBar style="auto" />
            </View>
         );
    }
  
}
// const styles = {
//     image:{
//         width: 50,
//         height: 50,
    
//     }
// };


