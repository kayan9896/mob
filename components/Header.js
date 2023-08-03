import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Dimensions, Platform } from "react-native";
import { useWindowDimensions } from "react-native";

const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default function Header({ name }) {
  const { height, width } = useWindowDimensions();
  const paddingVerticalDynamic = height < 450 ? 0 : 5;
  return (
    <View>
      <Text
        style={[styles.header, { paddingVertical: paddingVerticalDynamic }]}
      >
        Welcome to {name}{" "}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  header: {
    color: "darkslateblue",
    borderColor: "darkslateblue",
    borderWidth: Platform.OS === "android" ? 3 : 0,
    fontSize: windowWidth < 400 ? 20 : 30,
    fontWeight: "bold",
    padding: 5,
    width: 350,
    maxWidth: "90%",
  },
});
