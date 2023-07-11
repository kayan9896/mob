import { StatusBar } from "expo-status-bar";
import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
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
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header name={appName} />
        <Button
          title="Add A Goal"
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      {/* prop name changeTextCallBack is arbitrary */}
      {/* pass hdidemodal as another prop to Input as a callback function */}
      <Input
        changeTextCallBack={handleChangeText}
        modalVisible={modalVisible}
        hideModal={hideModal}
      />
      {/* we need to receive the data from Input and store it in inputText */}
      <View style={styles.bottomContainer}>
        <Text style={styles.text}>{inputText}</Text>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  topContainer: {
    flex: 1,
    alignItems: "center",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
  },
  text: {
    color: "#a09",
  },
});
