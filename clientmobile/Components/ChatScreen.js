/*import React,{useState,useCallback,useEffect, useLayoutEffect} from 'react';
import {View,Text} from 'react-native';
import { Avatar, GiftedChat } from 'react-native-gifted-chat';
import {AntDesign} from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';

const ChatScreen = ({navigation}) => {
    const [messages,setMessages]=useState([]);
    useLayoutEffect(()=>{
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
    },[])

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
        <SafeAreaView>
        <View style={{backgroundColor:'white',height:50}}>
            <Text style={{fontSize:17,fontWeight:'bold',marginLeft:169,marginTop:15}}>Chat</Text>
            <View style={{height:530}}>
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
        </SafeAreaView> 
        
    )
}
export default ChatScreen*/

import React, {useState, useEffect, useCallback} from 'react';
import {View, ScrollView, Text, Button, StyleSheet} from 'react-native';
import {Bubble, GiftedChat, Send} from 'react-native-gifted-chat';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Hello world',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            style={{marginBottom: 5, marginRight: 5}}
            size={32}
            color="#2e64e5"
          />
        </View>
      </Send>
    );
  };

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: '#2e64e5',
          },
        }}
        textStyle={{
          right: {
            color: '#fff',
          },
        }}
      />
      
    );
  };

  const scrollToBottomComponent = () => {
    return(
      <FontAwesome name='angle-double-down' size={22} color='#333' />
    );
  }

  return (
    
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
      alwaysShowSend
      renderSend={renderSend}
      scrollToBottom
      scrollToBottomComponent={scrollToBottomComponent}
    />
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});