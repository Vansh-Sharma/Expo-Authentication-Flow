import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Alert, Button } from 'react-native';
import * as firebase from 'firebase';
import { globalStyles } from '../styles/global';
import { loggingOut } from '../API/firebaseMethods';

export default function ManagerPage({ navigation }) {
    let currentUserUID = firebase.auth().currentUser.uid;
    const [firstName, setFirstName] = useState('');

    useEffect(() => {
        async function getUserInfo() {
            let doc = await firebase
            .firestore()
            .collection('users')
            .doc(currentUserUID)
            .get();

            if (!doc.exists){
                Alert.alert('')
            } else {
                let dataObj = doc.data();
                setFirstName(dataObj.firstName)
            }
        }
        getUserInfo();
    })

    const pressLogOut = () => {
        loggingOut();
        navigation.navigate('LoadingtoManager');
    }

    return (
        <View style={globalStyles.container}>
            <Text style={globalStyles.title}>Manager Page</Text> 
            <Button title='Log Out' onPress={pressLogOut} />
        </View>

    )

}