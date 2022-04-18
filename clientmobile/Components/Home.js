import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import choose from '../assets/choose.png';


export default function App({navigation}) {

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="dark" />
      <View style={{ justifyContent: 'flex-start', padding: 15 }}>
          <Text style={{
            fontSize: 25,
            fontWeight: 'bold',
            fontFamily:'cursive',
            paddingLeft: 15,
            color:'#22292F'
          }}>
            Home
          </Text>
          <Image source={choose} style={{
              flex: 1,
              width: 250,
              height: 200,
              marginTop:80,
              marginLeft:50

            }}></Image>

          

      </View>
      <View>
      <TouchableOpacity onPress={() => {navigation.navigate('Form')}} 
            style={styles.button}>
         <Text style={{fontSize:20,letterSpacing:0.75,textAlign:'center',
          fontFamily:'monospace',color:'white',marginBottom:-8,marginTop:-15}}>Booking Form</Text></TouchableOpacity>         
          <TouchableOpacity onPress={() => {navigation.navigate('Login')}} 
            style={styles.button1}>
         <Text style={{fontSize:20,letterSpacing:0.75,textAlign:'center',
          fontFamily:'monospace',color:'white',marginBottom:-9,marginTop:-15}}>Chat System</Text></TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  button: {
    flex:2,flexDirection:'column',
    marginTop:100,
    marginRight:15,
    padding:40,
    backgroundColor:'#40B5AD',
    borderRadius:25,
    width:'75%',
    height:'50%',
    paddingVertical: 24,
    paddingHorizontal: 45,
    marginLeft:70,
    justifyContent:'center',
    marginBottom:70
  },
  button1 : {
    padding:10,
    marginLeft:70,
    justifyContent:'center',
    backgroundColor:'#40B5AD',
    borderRadius:25,
    width:'75%',
    height:'10%',flexDirection:'column',
    paddingVertical: 24,
    paddingHorizontal: 40,
  }
});