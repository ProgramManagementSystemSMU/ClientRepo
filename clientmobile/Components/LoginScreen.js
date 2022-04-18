/*import React ,{useState,useEffect} from 'react';
import {View} from 'react-native';
import {Input,Button} from 'react-native-elements';
import {auth} from '../firebase';

const LoginScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [password, setPassword] = useState('');
    const signIn = () =>{
        auth.signInWithEmailAndPassword(email,password)
            .catch((error)=>{
                var errorMessage=error.message;
                alert(errorMessage)
            })
    }
    useEffect(()=> {
        
        const unsubscribe = auth.onAuthStateChanged
        (function(user){
            if(user){
                navigation.replace('Chat');
            }else {
                navigation.canGoBack()&&navigation.popToTop()
            }
        });
        return unsubscribe
    },[])
    return (
        <View style={{padding:10,alignItems:'center',flex:1}}>
            <Input 
                placeholder="Enter your email" 
                label="Email"
                leftIcon={{ type:'material',name:'email'}}
                value={email}
                onChangeText={text => setEmail(text)} 
            />
            <Input 
                placeholder="Enter your password" 
                label="Password"
                leftIcon={{ type:'material',name:'lock'}}
                value={password}
                onChangeText={text => setPassword(text)} 
                secureTextEntry
            />
            <Button title="sign in" onPress={signIn} style={styles.button}/>
            <Button title="register" style={styles.button1} 
            onPress={()=>navigation.navigate('Register')}/>
        </View>
    )    
    
}
export default LoginScreen*/