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
    <Pressable onPress={() => pressFunction(goalData.id)}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{goalData.text}</Text>
        <Button color="black" title="X" onPress={goalDeleted} />
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  text: {
    color: "#a09",
    padding: 10,
    fontSize: 25,
  },
  textContainer: {
    borderRadius: 5,
    backgroundColor: "#999",
    margin: 5,
    flexDirection: "row",
    alignItems: "center",
    // width: 280,
    // width: 0.8 * Dimensions.get("screen").width,
  },
});
