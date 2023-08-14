import { View, Text } from "react-native";
import React from "react";
import { auth } from "../Firebase/firebase-setup";
import LocationManager from "./LocationManager";
import { useRoute } from "@react-navigation/native";
export default function Profile({route}) {
  return (
    <View>
      <Text>{auth.currentUser.email}</Text>
      <Text>{auth.currentUser.uid}</Text>
      <LocationManager />
      {route.params&&<Text>{route.params.passloc.latitude}</Text>}
    </View>
  );
}
