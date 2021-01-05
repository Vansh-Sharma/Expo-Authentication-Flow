import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Button, TextInput } from 'react-native';
import * as firebase from 'firebase';
import { globalStyles } from '../styles/global';
import { loggingOut } from '../API/firebaseMethods';
import { signIn } from '../API/firebaseMethods.js';


export default function UserPage({ navigation }) {
    const [firstName, setFirstName] = useState('');
    let currentUserUID = firebase.auth().currentUser.uid;
    useEffect(() => {
    async function getUserInfo() {
        let doc = await firebase
        .firestore()
        .collection('users')
        .doc(currentUserUID)
        .get();
    
        if (!doc.exists){
            Alert.alert('No user data found!')
        } else {
            let dataObj = doc.data();
            setFirstName(dataObj.firstName)
        }
        }
        getUserInfo();
    
      })
   
    const pressLogOut = () => {
        loggingOut();
        navigation.navigate('Loading');
        Alert.alert("You have been logged out")
    }
    
    return (
    <View style={globalStyles.container}>
        <Text style={globalStyles.title}>UserPage</Text> 
        <Button title='Log Out' onPress={pressLogOut} />
    </View>
    
    )

}