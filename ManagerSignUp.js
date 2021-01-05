import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {useState} from 'react';
import { Text, View, TextInput, Button, Alert, SafeAreaView } from 'react-native';
import { globalStyles } from '../styles/global.js';
import { registration } from '../API/firebaseMethods';

export default function ManagerSignUp({ navigation }) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [email, setEmail] = useState("");

    const emptyState = () => {
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    }

    const pressDone = () => {
        if (!firstName) {
            Alert.alert('First name is required');
        } else if (!email) {
            Alert.alert('Email field is required.');
        } else if (!password) {
            Alert.alert('Password field is required.');
        } else if (!confirmPassword) {
            Alert.alert("Confirm password field is required.");
        } else if (!lastName) {
            Alert.alert("Last name is required.");
        } else {
            registration(
                email,
                password,
                lastName,
                firstName,
            );
            navigation.navigate('LoadingtoManager');
            //emptyState();
        
        }
    }

    return (
        
        <View style={globalStyles.container}>
            <Text style = {globalStyles.title}>Sign Up!</Text>
            <Text style = {globalStyles.bigLetters}>First Name:</Text>
            <TextInput
            style={globalStyles.input}
            onChangeText={(value) => setFirstName(value)}/>
            <Text style = {globalStyles.bigLetters}>Last Name:</Text>
            <TextInput
            style={globalStyles.input}
            onChangeText={(value) => setLastName(value)}/>
            <Text style = {globalStyles.bigLetters}>Email:</Text>
            <TextInput style={globalStyles.input} onChangeText={(value) => setEmail(value)} keyboardType='email-address'/>
            <Text style = {globalStyles.bigLetters}>Password:</Text>
            <TextInput style={globalStyles.input} onChangeText={(value) => setPassword(value)}/>
            <Text style = {globalStyles.bigLetters}>Confirm Password:</Text>
            <TextInput style={globalStyles.input} onChangeText={(value) => setConfirmPassword(value)}/>
            <Button title='Done' onPress={pressDone}/>
        </View>
        
    );
}