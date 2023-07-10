import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [inputText, setInputText] = useState("");
  const appName = "CS 5220";
  // this function is called when the text input changes
  // inside it update the state variable inputText
  function handleChangeText(changedText) {
    console.log(changedText);
    setInputText(changedText);
  }
  return (
    <View style={styles.container}>
      <Header name={appName} />
      {/* prop name changeTextCallBack is arbitrary */}
      <Input changeTextCallBack={handleChangeText} />
      {/* we need to receive the data from Input and store it in inputText */}
      <Text>{inputText}</Text>
      <StatusBar style="auto" />
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
