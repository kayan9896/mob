import { View, Text } from "react-native";
import React from "react";

export default function GoalDetails({ route }) {
  return (
    <View>
      <Text>
        This is the detils of goal with id {route.params.pressedGoal.id}
      </Text>
    </View>
  );
}
