import { View, Button, Alert, Image, StyleSheet } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

export default function ImageManager() {
  const [permissionInfo, requestPermission] =
    ImagePicker.useCameraPermissions();
  const [imageUri, setImageUri] = useState("");

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
      if (!result.canceled) {
        setImageUri(result.assets[0].uri);
      }
    } catch (err) {
      console.log("launch camera ", err);
    }
  }
  return (
    <View>
      <Button title="Take a Picture" onPress={takeImageHandler} />
      {imageUri && (
        <Image
          style={styles.image}
          source={{
            uri: imageUri,
          }}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 100,
  },
});
