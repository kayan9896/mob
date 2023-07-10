import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import React, { useState } from "react";

// receive a callback function as prop and call it when the text changes
export default function Input({ changeTextCallBack }) {
  const [text, setText] = useState("");

  function storeText(changedText) {
    console.log("changed in Input ", changedText);
    //store chagnedText in text state variable
    setText(changedText);
  }
  return (
    <View>
      <TextInput style={styles.input} onChangeText={storeText} />
      <Button
        title="Confirm"
        onPress={() => {
          changeTextCallBack(text);
        }}
      />
      {/* <Text>Input</Text> */}
    </View>
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
});
