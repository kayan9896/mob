import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Header({ name }) {
  return (
    <View>
      <Text style={styles.header}>Welcome to {name} </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    borderWidth: 3,
    fontSize: 30,
    fontWeight: "bold",
    padding: 5,
  },
});
