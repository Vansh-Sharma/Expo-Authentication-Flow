import React, { useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { globalStyles } from '../styles/global';


export default function LoadingScreen({ navigation }) {
    useEffect (
        () => {
            firebase.auth().onAuthStateChanged((user) => {
                if (user) {
                    navigation.navigate('UserPage')
                } else {
                    navigation.navigate('home')
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