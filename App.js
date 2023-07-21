import React from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
const Stack = createNativeStackNavigator();
import { AntDesign } from "@expo/vector-icons";
import PressableButton from "./components/PressableButton";

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#a2a" },
          headerTintColor: "white",
        }}
      >
        <Stack.Screen
          name="Homepage"
          component={Home}
          options={{
            title: "All My Goals",
          }}
        />
        <Stack.Screen
          name="Goal Details"
          component={GoalDetails}
          options={({ route }) => {
            return {
              title: route.params.pressedGoal.text,
            };
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
