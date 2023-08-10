import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";
import GoalUsers from "./GoalUsers";
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../Firebase/firebase-setup";

export default function GoalDetails({ route, navigation }) {
  const [warned, setWarned] = useState(false);
  const [uri, setUri] = useState("");
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <PressableButton pressableFunction={() => setWarned(true)}>
            {/* <Text>X</Text> */}
            <AntDesign name="warning" size={24} color="white" />
          </PressableButton>
        );
      },
    });
  });
  useEffect(() => {
    const goal = route.params.pressedGoal;
    async function getImageUri() {
      const reference = ref(storage, goal.imageUri);
      const downloadUri = await getDownloadURL(reference);
      setUri(downloadUri);
    }
    if (goal.imageUri) {
      getImageUri();
    }
  }, goal);
  return (
    <View>
      <Text>
        This is the detils of goal with id {route.params.pressedGoal.id}
      </Text>
      {uri && (
        <Image source={{ uri: uri }} style={{ width: 100, height: 100 }} />
      )}
      {warned && <Text>Warned</Text>}
      <GoalUsers />
    </View>
  );
}
