import React, {useState} from 'react';
import {Text, StyleSheet, Image, View, TextInput, Button} from 'react-native'; 
import Buttons from './Buttons';

const App = ({navigation}) => {
  
  return (
    <View style={styles.container} >
     
      <Text style={styles.formLabel} > Booking Form </Text>
      <View>
      <TextInput 
          placeholder="Full Name" style={styles.inputStyle} />
          <TextInput 
          placeholder="ID" style={styles.inputStyle} />
        <TextInput 
          placeholder="Email" style={styles.inputStyle} />
          <TextInput 
          placeholder="Date" style={styles.inputStyle} />
          <TextInput 
          placeholder="Time" style={styles.inputStyle} />

        
        
<Text  style={{
            fontSize: 30,
            color: '#fff',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
         
        </Text>
        <View style={{flex:1,borderRadius:50,height:90,marginTop:60,paddingHorizontal: 10,marginRight:32}}>
            <Buttons btn_text={"Submit"} on_press={() => navigation.navigate('Confirmation')}/>
        </View>    
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#FAF9F6',
  alignItems: 'center',
  justifyContent: 'center',
  margin:0,
  padding:0
},

formLabel: {
  fontSize: 22,
  color: '#22292F',
  fontFamily:'sans-serif-thin',
  fontWeight: 'bold',
  marginBottom:10
},
inputStyle: {
  marginTop: 23,
  width: 300,
  height: 43,
  paddingHorizontal: 10,
  borderRadius: 18,
  fontFamily:'sans-serif-thin',
  backgroundColor: '#E5E4E2'
},
formText: {
  alignItems: 'center',
  justifyContent: 'center',
  color: '#fff',
  fontSize: 25,
},
text: {
  color: '#fff',
  fontSize: 20,
},
});

export default App;