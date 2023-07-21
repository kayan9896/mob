import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import GoalDetails from "./components/GoalDetails";
import PressableButton from "./components/PressableButton";
import { AntDesign } from "@expo/vector-icons";


const Stack = createNativeStackNavigator();

export default function App() {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{
          title:'hom',
          headerStyle:{backgroundColor:'purple'},
          headerTintColor:'white'}}/>
        <Stack.Screen name="Goal Details" component={GoalDetails} options={
          function ({navigation,route}){
            return (
            {
              title:route.params.titl,
              headerRight:()=>{
                return (
                <PressableButton>
                  <AntDesign name="delete" size={24} color="black" />
                </PressableButton>)
            }
            })
          }
        }/>
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}
