import { StyleSheet,View, Text,TextInput,Button, Modal,Image } from 'react-native'
import React ,{useState}from 'react'

export default function Input(prop) {
  const[txt,setTxt]=useState("")
  function storetext(e){
    setTxt(e)
  }
  return (
    <Modal visible={prop.modalv}>
      <View style={styles.container}>
        <TextInput style={styles.input} onChangeText={storetext}/>
        <Button title="confirm" onPress={()=>{prop.checkbutton(txt)
        prop.modalv}}/>
        <Button title="cancl" onPress={
          ()=>{setTxt('')
          prop.checkbutton(txt)
        }}/>
        <Image source={require('./2617812.png')} width={100} height={100}/>
        <Image source={{url:'https://cdn-icons-png.flaticon.com/512/2617/2617812.png'}} width={100} height={100}/>
      </View>
    </Modal>
  )
}
const styles = StyleSheet.create({
    input:{backgroundColor:'grey',width:200,height:50},
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });