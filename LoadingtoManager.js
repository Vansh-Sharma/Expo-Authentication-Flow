import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { globalStyles } from '../styles/global'

export default function LoadingtoManager({ navigation }) {
    useEffect (
        () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.navigate('ManagerPage')
                } else {
                    navigation.navigate('ManagerSignIn')
                }
            });
        }
    );

    return (
        <View style={globalStyles.container}>
            <ActivityIndicator size='large' />
        </View>

    );
}