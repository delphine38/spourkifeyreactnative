import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Nav extends React.Component{
    render(){
        return(
            <View>
                <View style={styles.nav}>
                    <Image
                        style={styles.imageNav}
                                source={require('./images/image1Accueil.jpg')}
                                // style={{width: 60, height:30}}  
                            />
                </View>
                
            </View>
        );
    }
}
    const styles = {
        nav:{
        backgroundColor: '#fec260',
        borderRadius:20

        },
        imageNav:{
            with:60,
            height:30,
            marginLeft:150
        }
    };
