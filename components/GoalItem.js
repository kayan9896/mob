import {
  View,
  Text,
  StyleSheet,
  Button,
  Dimensions,
  Pressable,
} from "react-native";
import React from "react";

export default function GoalItem({ goalData, deleteFunction, pressFunction }) {
  function goalDeleted() {
    deleteFunction(goalData.id);
  }

  return (
    <View>
      <Pressable
        onPress={() => pressFunction(goalData.id)}
        android_ripple={{ color: "blue" }}
        style={({ pressed }) => {
          return [
            styles.goalContainer,
            pressed && { backgroundColor: "#c0c", opacity: 0.5 },
          ];
        }}
      >
        <Text style={styles.text}>{goalData.text}</Text>
        <Button color="black" title="X" onPress={goalDeleted} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#a09",
    padding: 10,
    fontSize: 25,
  },
  goalContainer: {
    borderRadius: 5,
    backgroundColor: "#999",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    // width: 280,
    // width: 0.8 * Dimensions.get("screen").width,
  },
});
