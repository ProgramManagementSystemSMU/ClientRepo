import React,{useState,useCallback,useEffect, useLayoutEffect} from 'react';
import {View,Text} from 'react-native';
import { Avatar, GiftedChat } from 'react-native-gifted-chat';
import {AntDesign} from '@expo/vector-icons';
import { auth, db } from '../firebase';
import { TouchableOpacity } from 'react-native-gesture-handler';

const ChatScreen = ({navigation}) => {
    const [messages,setMessages]=useState([]);
    /*useLayoutEffect(()=>{
        navigation.setOptions({
            headerLeft:()=>(
                <View style={{marginLeft:20}}>
                    <Avatar
                        rounded
                        source={{ uri:auth?.currentUser?.photoURl}}
                    />
                </View> 
            ),
            headerRight: () => (
                <TouchableOpacity style={{marginRight:30}} onPress={signOut}>
                    <AntDesign name= "logout" size={24} color="black"/>
                </TouchableOpacity>
            )
        })
    },[])
    const signOut =() => {
        auth.signOut().then(()=>{
            navigation.replace('Login')
        }).catch((error)=>{

        });
    }
    useEffect(()=> {
        setMessages([
            {
                _id:1,
                text:'Hello developer',
                createdAt: new Date(), 
                user:{
                    _id: 2,
                    name: 'React Native',
                    avatar:'https://placeimg.com/140/140/any',
                },
            },
        ])
    },[])*/

    useLayoutEffect(()=>{
        const unsubscribe = db.collection('chats').orderBy('createdAt','desc').onSnapshot
        (snapshot => setMessages(
            snapshot.docs.map(doc => ({
                _id: doc.data()._id,
                createdAt: doc.data().createdAt.toDate(),
                text: doc.data().text,
                user: doc.data().user
            }))
        ))
        return unsubscribe;
    },[])
    
    const onSend = useCallback((messages = []) => {
        setMessages(previousMessages => GiftedChat.append(previousMessages,messages))
        const {
            _id,
            createdAt,
            text,
            user
        }=messages[0]
        db.collection('chats').add({
            _id,
            createdAt,
            text,
            user
        })
    },[])
    
    return(
        <View style={{backgroundColor:'white',height:50}}>
            <Text style={{fontSize:17,fontWeight:'bold',marginLeft:169,marginTop:15}}>Chat</Text>
            <View style={{height:630}}>
                <GiftedChat>
                    messages={messages}
                    showAvatarForEveryMessage={true}
                    onSend={messages => onSend(messages)}
                    user={{ 
                        _id: auth?.currentUser?.email,
                        name: auth?.currentUser?.displayName,
                        avatar: auth?.currentUser?.photoURl
                    }}
                </GiftedChat></View>
            
        
        </View>
         
        
    )
}
export default ChatScreen