import { StatusBar } from "expo-status-bar";
import {
  Button,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";

export default function App() {
  const [inputText, setInputText] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);

  const appName = "CS 5220";
  function hideModal() {
    setModalVisible(false);
  }
  // this function is called when the text input changes
  // inside it update the state variable inputText
  function handleChangeText(changedText) {
    // setInputText(changedText);
    //make an object {text:,id:}
    const newGaol = { text: changedText, id: Math.random() };
    // const newGoalsArray = [...goals, newGaol];
    // setGoals(newGoalsArray);
    //using updater function in setGoals to make sure we get the updated goals value
    setGoals((prevGoals) => {
      return [...prevGoals, newGaol];
    });
    // try adding this new object to goals array
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
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {/* map each element of the goals array to <View><Text></Text></View>*/}
          {goals.map((goalItem) => {
            return (
              <View key={goalItem.id} style={styles.textContainer}>
                <Text style={styles.text}>{goalItem.text}</Text>
              </View>
            );
          })}
        </ScrollView>
      </View>
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
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
  scrollViewContent: {
    alignItems: "center",
  },
  text: {
    color: "#a09",
    padding: 5,
  },
  textContainer: {
    borderRadius: 5,
    backgroundColor: "#999",
    margin: 5,
  },
});
