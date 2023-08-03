import { View, Button, Alert } from "react-native";
import React from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
  const [permissionInfo, requestPermission] =
    ImagePicker.useCameraPermissions();

  async function verifyPermission() {
    // check the granted property of permissionInfo
    if (permissionInfo.granted) {
      //if granted is true return true
      return true;
    }
    // if granted is false requestPermission and
    //return the granted property of the response
    const response = await requestPermission();
    return response.granted;
  }
  async function takeImageHandler() {
    try {
      // only proceed to launch camera if you get true back from verifyPermission
      const hasPermission = await verifyPermission();
      if (!hasPermission) {
        Alert.alert("You need to give access to camera");
        return;
      }
      const result = await ImagePicker.launchCameraAsync({
        allowsEditing: true,
      });
    } catch (err) {
      console.log("launch camera ", err);
    }
  }
  return (
    <View>
      <Button title="Take a Picture" onPress={takeImageHandler} />
    </View>
  );
}
