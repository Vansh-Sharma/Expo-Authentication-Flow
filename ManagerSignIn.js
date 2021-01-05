import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert  } from 'react-native';
import * as firebase from 'firebase';
import { loggingOut } from '../API/firebaseMethods';
import { signIn } from '../API/firebaseMethods.js';
import { globalStyles } from '../styles/global.js';

export default function ManagerSignIn({ navigation }){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pressSignUp = () => {
    navigation.navigate('ManagerSignUp')
  }

  const pressSignIn = () => {
    if (!email) {
      Alert.alert("Email field is requried.")
    } 
    else if (!password) {
      Alert.alert("Passowrd field is required.")
    }
    else{

      signIn(email, password);
      navigation.navigate('LoadingtoManager');
    }
    //setEmail('');
    //setPassword('');
  };



  return (

      <View style={globalStyles.container}>
        <Text style = {globalStyles.title}>Owners,</Text>
        <Text style = {globalStyles.bigLetters}>Email:</Text>
        <TextInput
        style={globalStyles.input}
        onChangeText={(value) => setEmail(value)}/>
        <Text style = {globalStyles.bigLetters}>Password:</Text>
        <TextInput
        style={globalStyles.input}
        onChangeText={(value) => setPassword(value)}
        secureTextEntry/>
        <Button title='Done' onPress={pressSignIn} />
        <Button title='Business not Registered? Click Here!' onPress={pressSignUp} />
  
  
      </View>
    );


}