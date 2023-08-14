import { View, Text, Button } from 'react-native'
import React,{useState} from 'react'
import MapView, { Marker } from 'react-native-maps';


export default function Map({navigation}) {
    const [selectedLocation, setSelectedLocation] = useState();
  return (
    <MapView initialRegion={{latitude: 37.78825, longitude: -122.4324, latitudeDelta: 0.0922, longitudeDelta: 0.0421}}
    style={{flex:1}}
    onPress={(event)=>{setSelectedLocation(event.nativeEvent.coordinate)
    console.log(event.nativeEvent.coordinate)}}
    >
      <Marker coordinate={{latitude: 37.78825, longitude: -122.4324}}/>
      <Marker coordinate={{latitude: 37.78844, longitude: -122.4344}}/>
        <Button disabled={!selectedLocation} title='pass' onPress={()=>{navigation.navigate('Profile',{passloc:selectedLocation})}}></Button>
    </MapView>
  )
}