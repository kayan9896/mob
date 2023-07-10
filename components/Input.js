import {
  View,
  TextInput,
  StyleSheet,
  Button,
  Modal,
  Image,
} from "react-native";
import React, { useState } from "react";

// receive a callback function as prop and call it when confirm is pressed
// receive a callback functiona as prop and call it when cancel is pressed
export default function Input({ changeTextCallBack, modalVisible, hideModal }) {
  const [text, setText] = useState("");

  function storeText(changedText) {
    //store chagnedText in text state variable
    setText(changedText);
  }
  return (
    <Modal visible={modalVisible} animationType="slide">
      <View style={styles.container}>
        <Image
          style={styles.image}
          source={{
            uri: "https://cdn-icons-png.flaticon.com/512/2617/2617812.png",
          }}
        />
        <Image style={styles.image} source={require("../assets/goal.png")} />
        <TextInput style={styles.input} onChangeText={storeText} value={text} />
        <Button
          title="Confirm"
          onPress={() => {
            changeTextCallBack(text);
          }}
        />
        <Button
          title="Cancel"
          onPress={() => {
            setText("");
            hideModal();
          }}
        />
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderBottomWidth: 1,
    width: 200,
  },
  image: {
    height: 100,
    width: 100,
  },
});
