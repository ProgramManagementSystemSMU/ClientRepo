import { StatusBar } from 'expo-status-bar';
import React, { useRef, useState } from 'react';
import { Animated, Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Logo from './Logo.png';
import menu from '../assets/menu.png';
import close from '../assets/close.png';
import home from '../assets/home.png';
import Box from '../assets/Box.png';
import room from '../assets/room.png';
import Buttons from './Buttons';


export default function App({navigation}) {
  const [currentTab, setCurrentTab] = useState("Home");
  // To get the curretn Status of menu ...
  const [showMenu, setShowMenu] = useState(false);

  // Animated Properties...

  const offsetValue = useRef(new Animated.Value(0)).current;
  // Scale Intially must be One...
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>

      <View style={{ justifyContent: 'flex-start', padding: 15 }}>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {
            // Tab Bar Buttons....
          }

          {TabButton(currentTab, setCurrentTab, "Home", home)}
          {TabButton(currentTab, setCurrentTab, "Box Booking", Box)}
          {TabButton(currentTab, setCurrentTab, "Classroom Booking",room)}

        </View>

      </View>
      {
        // Over lay View...
      }
      <Animated.View style={{
        flexGrow: 1,
        backgroundColor: '#FFFF',
        position: 'absolute',
        top: 0,
        bottom: 20,
        left: 0,
        right: 0,
        paddingHorizontal: 15,
        paddingVertical: 0,
        borderRadius: showMenu ? 15 : 0,
        // Transforming View...
        transform: [
          { scale: scaleValue },
          { translateX: offsetValue }
        ]
      }}>
        {
          // Menu Button...
        }
        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }] 
        }}>
          
          <TouchableOpacity onPress={() => {
            // Do Actions Here....
            // Scaling the view...
            Animated.timing(scaleValue, {
              toValue: showMenu ? 1 : 1,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(offsetValue, {
              // YOur Random Value...
              toValue: showMenu ? 0 : 230,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            Animated.timing(closeButtonOffset, {
              // YOur Random Value...
              toValue: !showMenu ? -30 : 0,
              duration: 300,
              useNativeDriver: true
            })
              .start()

            setShowMenu(!showMenu);
          }}>

            <Image source={showMenu ? close : menu} style={{
              width: 30,
              height: 20,
              tintColor: 'black',
              marginTop: 40,

            }}></Image>
            
          </TouchableOpacity>
          
          <Text style={{
            fontSize: 30,
            fontWeight: 'bold',
            color: '#22292F',
            paddingTop: 10
          }}>{currentTab}</Text>


          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily:'sans-serif-thin',
            color:'#088F8F',
            height:250,
            marginTop:200,
            marginLeft:30,
            flex:0,
            position:'absolute'
          }}>Choose your booking option</Text>

          <View style={{flex:1,height:'100%',flexDirection:'column',marginTop:210,marginRight:15,padding:10}}>
            <Buttons btn_text={"Classroom"} on_press={() => navigation.navigate('Form')}/>
            <Buttons btn_text={"Box"} on_press={() => navigation.navigate('Form')}/>          
          </View> 
        </Animated.View>

      </Animated.View>

    </SafeAreaView>
  );
}

// For multiple Buttons...
const TabButton = (currentTab, setCurrentTab, title, image) => {
  return (

    <TouchableOpacity onPress={() => {
        setCurrentTab(title)
      
    }}>
      <View style={{
        flexDirection: "row",
        alignItems: 'center',
        paddingVertical: 8,
        paddingLeft: 13,
        paddingRight: 35,
        borderRadius: 8,
        marginTop: 15
      }}>

        <Image source={image} style={{
          width: 28, height: 28,
        }}></Image>

        <Text style={{
          fontSize: 17,
          fontWeight: 'bold',
          paddingLeft: 15,
          color:'#22292F'
        }}>{title}</Text>

      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
});