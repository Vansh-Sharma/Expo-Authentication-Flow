import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState, useEffect } from 'react';
import { Text, View, TextInput, Button, Alert  } from 'react-native';
import * as firebase from 'firebase';
import { loggingOut } from '../API/firebaseMethods';
import { signIn } from '../API/firebaseMethods.js';
import { globalStyles } from '../styles/global.js';

export default function Home({ navigation }){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const pressSignUp = () => {
    navigation.navigate('SignUp')
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
    navigation.navigate('Loading');
    //userSignedIn = true;
    }
    //setEmail('');
    //setPassword('');
  };

  const pressOwner = () => {
    navigation.navigate('ManagerSignIn')
  }

  return (

      <View style={globalStyles.container}>
        <Text style = {globalStyles.title}>Sign In!</Text>
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
        <Button title='Not a current user? Sign Up!' onPress={pressSignUp} />
        <Button title='Business Owner? Tap Here!' onPress={pressOwner} />
  
  
      </View>
    );


}