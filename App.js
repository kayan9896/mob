import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import Header from './component/header';
import Input from './component/Input';
import { useState } from 'react';

export default function App() {
  const name="pj";
  const [dt,setDt]=useState("Dt");
  const [modalvisible,setModalvisible]=useState(false);
  function func(e){
    setDt(e);
    setModalvisible(false);
  }

  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on {dt} app!</Text>
      <Header nam='new header' >
        <Text>hello</Text>
      </Header>
      <Input checkbutton={func} modalv={modalvisible}/>
      <Button title='visible' onPress={function () {setModalvisible(true)}}/>
      <StatusBar style="auto" />
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
