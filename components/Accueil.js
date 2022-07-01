import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';


// import ImageAccueil from './images/imageAccueil.jpg';
// export default function Accueil() {
export default class Accueil extends React.Component{
    render(){
        return (
            <View>
                <Image
                    source={require('./images/imageAccueil.jpg')}
                    style={{width: 400, height:400}}  
                 />
                    <View style={styles.rapAccueil}>
                        <Text style={styles.textRap}>Rap & cie</Text>
                    

                        <View style={styles.imgAccueil}>
                            <Image
                                source={require('./images/image1Accueil.jpg')}
                                style={{width: 60, height:60}}  
                            />
                            <Image
                                source={require('./images/image2Accueil.jpg')}
                                style={{width: 60, height:60}}  
                            />
                        </View>
                        <View style={styles.imgAccueil}>
                            <Image
                                source={require('./images/image3Accueil.jpg')}
                                style={{width: 60, height:60}}  
                            />
                            <Image
                                source={require('./images/image4Accueil.jpg')}
                                style={{width: 60, height:60}}  
                            />
                        </View>
                    </View>
                 
                <StatusBar style="auto" />
            </View>
         );
    }
  
}
const styles = {
    rapAccueil:{
    backgroundColor: '#2a0a44',
    

    },
    textRap:{
        color: 'yellow',
        marginTop:20,
        marginLeft:150,
        marginBottom:20,
        fontSize:20,
        fontWeight:'bold',
    //  alignItems: 'center',

    },
    imgAccueil:{
        flexDirection: 'row',
        marginLeft:140,
    },
    
    
};


