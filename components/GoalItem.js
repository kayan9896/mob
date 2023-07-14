import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";

export default function GoalItem({ goalData }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goalData.text}</Text>
      <Button color="black" title="X" />
    </View>
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
  },
});
