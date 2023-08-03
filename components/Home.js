import { StatusBar } from "expo-status-bar";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./Header";
import { useEffect, useState } from "react";
import Input from "./Input";
import GoalItem from "./GoalItem";
import PressableButton from "./PressableButton";
import { deleteFromDB, writeToDB } from "../Firebase/firestoreHelper";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { database } from "../Firebase/firebase-setup";
import { auth } from "../Firebase/firebase-setup";
export default function Home({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [goals, setGoals] = useState([]);
  useEffect(() => {
    const q = query(
      collection(database, "goals"),
      where("user", "==", auth.currentUser.uid)
    );
    const unsubscribe = onSnapshot(
      q,
      (querySnapshot) => {
        if (!querySnapshot.empty) {
          //querysnapshot.docs is an array, loop through it , call .data() on each element
          //const newArray = []
          // for (let item of querySnapshot.docs) {
          //   console.log(item.data());
          //   //update goals array
          //   newArray.push(item.data());
          // }
          //setGoals(newArray)
          const newGoals = querySnapshot.docs.map((item) => {
            return { ...item.data(), id: item.id };
          });
          setGoals(newGoals);
        } else {
          setGoals([]);
        }
      },

      (error) => {
        console.log("onshanpshot ", error);
      }
    );
    return () => {
      unsubscribe();
    };
  }, []);
  const appName = "CS 5220";
  function hideModal() {
    setModalVisible(false);
  }
  // this function is called when the text input changes
  // inside it update the state variable inputText
  function handleChangeText(changedText) {
    // setInputText(changedText);
    //make an object {text:,id:}
    const newGaol = { text: changedText };
    writeToDB(newGaol);
    // const newGoalsArray = [...goals, newGaol];
    // setGoals(newGoalsArray);
    //using updater function in setGoals to make sure we get the updated goals value
    // setGoals((prevGoals) => {
    //   return [...prevGoals, newGaol];
    // });
    // try adding this new object to goals array
    //also hide the modal
    hideModal();
  }
  function goalPressed(pressedGoal) {
    console.log("goal pressed ", pressedGoal);
    navigation.navigate("Goal Details", { pressedGoal });
  }
  async function goalDeleted(deletedId) {
    // console.log("clicked ", deletedId);
    // use array.filter to remove the element that its id matched the deletedId
    // const newArray = goals.filter((goalItem) => {
    //   return goalItem.id !== deletedId;
    // });
    // setGoals((prevGoals) => {
    //   return prevGoals.filter((goalItem) => {
    //     return goalItem.id !== deletedId;
    //   });
    // });
    await deleteFromDB(deletedId);
  }
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topContainer}>
        <Header name={appName} />
        <PressableButton
          pressableFunction={() => {
            setModalVisible(true);
          }}
          defaultStyle={styles.addButtonDefault}
          pressedStyle={styles.addButtonPressed}
        >
          <Text style={{ color: "white" }}>Add A Goal</Text>
        </PressableButton>
        {/* <Button
          title="Add A Goal"
          onPress={() => {
            setModalVisible(true);
          }}
        /> */}
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
        <FlatList
          contentContainerStyle={styles.scrollViewContent}
          data={goals}
          renderItem={({ item }) => {
            return (
              <GoalItem
                goalData={item}
                deleteFunction={goalDeleted}
                pressFunction={goalPressed}
              />
            );
          }}
        />
        {/* <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {goals.map((goalItem) => {
            return (
              <View key={goalItem.id} style={styles.textContainer}>
                <Text style={styles.text}>{goalItem.text}</Text>
              </View>
            );
          })}
        </ScrollView> */}
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
    justifyContent: "space-evenly",
  },
  bottomContainer: {
    flex: 4,
    backgroundColor: "#dcd",
  },
  scrollViewContent: {
    // this doesn't let the view to take % width
    alignItems: "center",
  },
  addButtonDefault: {
    backgroundColor: "green",
    padding: 5,
    borderRadius: 5,
  },
  addButtonPressed: {
    opacity: 0.5,
  },
});
