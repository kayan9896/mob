import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function GoalItem({ goalData }) {
  return (
    <View style={styles.textContainer}>
      <Text style={styles.text}>{goalData.text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
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
