import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, TextInput, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";

export default function App() {
  const appName = "CS 5220";
  function handleChangeText(changedText) {
    console.log(changedText);
  }
  return (
    <View style={styles.container}>
      <Header name={appName} />
      <TextInput style={styles.input} onChangeText={handleChangeText} />
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
