import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#C0C0C0',
      alignItems: 'center',
      justifyContent: 'center',
    },
    bigLetters: {
      fontWeight: 'bold',
    },
    question: {
        padding: 8,
    },
    input: {
      borderWidth: 1,
      borderColor: '#777',
      padding: 8,
      margin: 10,
      width: 200,
    },
    title: {
      fontWeight: 'bold',
      fontSize: 22,
      padding: 20,
      
    },
  });