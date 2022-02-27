
import React from 'react';
import { Animated,View,Image,TouchableOpacity,Text} from 'react-native';
import Buttons from './Buttons';
// Welcome's Image
import Schedule from './Schedule.png';

export default function WelcomeScreen(){

    return(
        <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%'
        }}>
            <Image source={Schedule} style={{
             flex: 1,
             width: 400,
             height: 700,
             resizeMode: 'contain',
             position:'center'
            }}></Image>
            <Animated.Text style={{
                        fontSize: 25,
                        fontWeight: 'bold',
                        color: '#191970',
                        fontFamily:'sans-serif-thin',
                        position: 'absolute',
                        height:450
            }}>Welcome to our Booking System</Animated.Text>
        <View style={{flex:1,flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
            <Buttons btn_text={"Get Started"}/>
        </View>
        </View>  
        
        
    );
         
}          

              