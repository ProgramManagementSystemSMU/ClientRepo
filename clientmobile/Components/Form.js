import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput,Image} from 'react-native'; 
import Buttons from './Buttons';
import smu1 from '../assets/smu1.png';
import { useNavigation } from '@react-navigation/native';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Keyboard} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import DropDownPicker from 'react-native-dropdown-picker';


const isValidObjField = (obj) => {
  return Object.values(obj).every(value => value.trim())
}
const updateError = (error,stateUpdater) => {
  stateUpdater(error);
  setTimeout(() => {
    stateUpdater('')
  },2500);
}

const isValidEmail = (value) => {
  const regx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  return regx.test(value)
}

const isValidId = (value) => {
  const regx = /^(?=.*[a-z])[a-z0-9]{8,20}$/gm ;
  return regx.test(value)
}

const App = () => {
const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
const [isTimePickerVisible, setTimePickerVisibility] = useState(false);
const [date,setDate] = useState(new Date());

const showDatePicker = () => {
  setDatePickerVisibility(true);
};
const showTimePicker = () => {
  setTimePickerVisibility(true);
};

const hideDatePicker = () => {
  setDatePickerVisibility(false);
};
const hideTimePicker = () => {
  setTimePickerVisibility(false);
}

const handleConfirm = (date) => {
  
  hideDatePicker();
    
};
const handle_confirm = () => {
  hideTimePicker();
}

  const [userInfo,setUserInfo]= useState({
    fullName:'',
    Id:'',
    email:''
  })
  const [error,setError] = useState('')

  const {fullName,Id,email} = userInfo;

  const handleOnChangeText = (value,fieldName) => {
    setUserInfo({...userInfo,[fieldName]: value});
  };
  
  const isValidForm = () => {
    if(!isValidObjField(userInfo)) return updateError('All fields are required!',setError)
    if(!fullName.trim() || fullName.length < 3) return updateError('Invalid name!',setError)
    if(!isValidEmail(email)) return updateError('Invalid email!',setError)
    if(!isValidId(Id)) return updateError('Invalid ID!',setError)
    return true;
  };
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const submitForm = () => {
    if(isValidForm()){
      navigation.navigate('Confirmation');
    }
    /*else if (!isValidForm()){navigation.navigate('Error');}*/
  }
  
  return (
    
    <View style={styles.container} >
      <StatusBar style="dark" />
      <Image source={smu1} style={{
        width: 140,
        height: 50,
        top:40,
        backgroundColor:'#FAF9F6',
        left:100

      }}></Image>
      <Text style={styles.formLabel} > Booking Form </Text>
      {error ? <Text style={{color:'red',fontSize:18,textAlign:'center'}}>{error}</Text> : null}
      <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      scrollEnabled={false}
      >
      <TextInput 
          value={fullName} onChangeText={(value)=> handleOnChangeText(value,'fullName')} placeholder="Full Name" style={styles.inputStyle} />
          <TextInput 
          value={Id} onChangeText={(value)=> handleOnChangeText(value,'Id')} placeholder="ID" style={styles.inputStyle} />
        <TextInput 
          value={email} onChangeText={(value)=> handleOnChangeText(value,'email')}  placeholder="Email" style={styles.inputStyle} />
          
          <TextInput 
           value={date} placeholder="Date" style={styles.inputStyle} onChangeText={(val)=> setDate(val)} onFocus = {() => {showDatePicker(), Keyboard.dismiss()}}  />
         
          <TextInput 
          placeholder="Time" style={styles.inputStyle} onFocus = {() => {showTimePicker(), Keyboard.dismiss()}}/>
          <TextInput 
          placeholder="Duration" style={styles.inputStyle} keyboardType='numeric'/>
          
        </KeyboardAwareScrollView>
        <View style={{flex:1,borderRadius:50,height:22,marginTop:30,paddingHorizontal: 10,marginRight:32}}>
            <Buttons btn_text={"Submit"} on_press={submitForm}/>
        </View> 
        <View style={{flex:1,alignItems: 'center',justifyContent:'center'}}>
        <DateTimePickerModal
          date={date}
          isVisible={isDatePickerVisible}
          mode={'single'}
          format="DD-MM-YYYY"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
          onDateChange={(date)=> {console.log(date),setDate(date);}}
        />
        <DateTimePickerModal
        isVisible={isTimePickerVisible}
        mode="time"
        onConfirm={handle_confirm}
        onCancel={hideTimePicker}
        />
        <DropDownPicker
          open={open}
          style={styles.inputStyle}
          items={[
              {label: 'Classroom', value: 'c'},
              {label: 'Box', value: 'b'}
          ]}
          setOpen={setOpen}
          placeholder="Select Study Space"
          defaultIndex={0}
          containerStyle={{height: 260}}
          onChangeItem={item => console.log(item.label, item.value)}
        />
        </View>   
        
      </View>
    

    
  );
};
const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: '#FFF',
  alignItems: 'center',
  justifyContent: 'flex-start',
  margin:0,
  padding:0
},

formLabel: {
  fontSize: 22,
  color: '#22292F',
  fontFamily:'sans-serif-thin',
  fontWeight: 'bold',
  marginTop:50,
  marginBottom:10
},
inputStyle: {
  marginTop: 20,
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