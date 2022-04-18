/*import React from 'react';
import {View,StyleSheet} from 'react-native';
import {Input,Button} from 'react-native-elements';
import {auth} from '../firebase';

const RegisterScreen = ({navigation}) => {
    const [email,setEmail] = useState('');
    const [name,setName] = useState('');
    const [password, setPassword] = useState('');
    const [imageURl, setImageUrl] = useState('');
    const register =() =>{ 
        auth.createUserWithEmailAndPassword(email,password)
            .then((userCredential)=>{
                var user = userCredential.user;
                user.updateProfile({
                    displayName: name,
                    photoURl: imageURl ? imageURl:
                    'https://racktronics.com.au/pub/static/frontend/Magento/blank/en_US/Magebuzz_Testimonial/images/default-avatar.jpg'
                }).then(function(){

                }).catch(function(error){

                });
                navigation.popToTop();
            })
            .catch((error)=>{
                
                var errorMessage = error.message;
                alert(errorMessage)
            })
    }
    return (
        <View style={{padding:10,alignItems:'center',flex:1}}>
            <Input 
                placeholder="Enter your name" 
                label="Name"
                leftIcon={{ type:'material',name:'badge'}}
                value={name}
                onChangeText={text => setName(text)} 
            />
            
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
            <Input 
                placeholder="Enter your image URl" 
                label="Profile Picture"
                leftIcon={{ type:'material',name:'face'}}
                value={imageURl}
                onChangeText={text => setImageUrl(text)} 
            />
            
            <Button title="register" onPress={register} style={styles.button1}/>
        </View>
    )

}

export default RegisterScreen*/