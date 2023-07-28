import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import PressableButton from "./PressableButton";
import { AntDesign } from "@expo/vector-icons";
import GoalUsers from "./GoalUsers";

export default function GoalDetails({ route, navigation }) {
  const [warned, setWarned] = useState(false);
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

  return (
    <View>
      <Text>
        This is the detils of goal with id {route.params.pressedGoal.id}
      </Text>
      {warned && <Text>Warned</Text>}
      <GoalUsers />
    </View>
  );
}
