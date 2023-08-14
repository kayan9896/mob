import { View, Text, Button, Alert,Image } from 'react-native'
import React from 'react'
import * as Location from 'expo-location';
import {API_KEY} from '@env';
import { useNavigation } from '@react-navigation/native';

export default function LocationManager() {
    const navigation=useNavigation();
    const [permissionResponse, requestPermission] = Location.useForegroundPermissions();
    const [loc, setLoc] = React.useState(null);
    async function valid() {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status === 'granted') {
            return true;
        } else {
            return false;
        }
    }
    const locateUserHandler = async () => {
    try {
        const haspm = await valid();
    if(!haspm) {
        Alert.alert('Permission needed');
    }else {
        const location = await Location. getCurrentPositionAsync();
        setLoc(location.coords);
        console.log(location.coords.latitude);
        console.log(`https://maps.googleapis.com/maps/api/staticmap?center=${loc.latitude},${loc.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${loc.latitude},${
    loc.longitude}&key=${API_KEY}`
    )
    }
    }
    catch (err) {console.log(err)}
    };

  return (
    <View>
      <Button onPress={locateUserHandler} title='loc'></Button>
      <Button onPress={()=>{navigation.navigate('map')}} title='choose'/>
      {loc?<Image style={{height:100, width:100}} source={{uri:`https://maps.googleapis.com/maps/api/staticmap?center=${loc.latitude},${loc.longitude}&zoom=14&size=400x200&maptype=roadmap&markers=color:red%7Clabel:L%7C${loc.latitude},${
loc.longitude}&key=${API_KEY}`
}}/>:null}
    </View>
  )
}