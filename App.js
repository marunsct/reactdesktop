import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  const [outputText, setOutputtext] = useState('Open up App.js to start working on your app!');
  return (

    <View style={{padding: 100}}>

      <View>

        <TextInput placeholder="course goals" style={{borderColor:"blue", borderWidth:1}}/>

        <Button title="ADD"/>

      </View>
  

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
