import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const appName = "CS 5220";
  function hideModal() {
    setModalVisible(false);
  }
  // this function is called when the text input changes
  // inside it update the state variable inputText
  function handleChangeText(changedText) {
    setInputText(changedText);
    //also hide the modal
    hideModal();
  }

  return (
    <View style={styles.container}>
      <Header name={appName} />
      <Button
        title="Add A Goal"
        onPress={() => {
          setModalVisible(true);
        }}
      />
      {/* prop name changeTextCallBack is arbitrary */}
      {/* pass hdidemodal as another prop to Input as a callback function */}
      <Input
        changeTextCallBack={handleChangeText}
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
      {/* we need to receive the data from Input and store it in inputText */}
      <Text style={styles.text}>{inputText}</Text>
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
  text: {
    color: "#a09",
  },
});
