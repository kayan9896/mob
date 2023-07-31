import React, { useState } from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
const Stack = createNativeStackNavigator();
import { AntDesign } from "@expo/vector-icons";
import PressableButton from "./components/PressableButton";
import Login from "./components/Login";
import Signup from "./components/Signup";

export default function App() {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);
  //screens related for non authenticated users
  const AuthStack = (
    <>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Signup" component={Signup} />
    </>
  );

  //screens related for authenticated users

  const AppStack = (
    <>
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
    </>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Signup"
        screenOptions={{
          headerStyle: { backgroundColor: "#a2a" },
          headerTintColor: "white",
        }}
      >
        {/* decide which stack to show */}
        {isUserLoggedin ? AppStack : AuthStack}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
