import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import ErrorScreen from './Components/ErrorScreen';
import Confirmation from './Components/Confirmation';
import SplashScreen from './Components/SplashScreen';



export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreen></SplashScreen> 
    </SafeAreaProvider>
  );
} 

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
