import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
const Stack = createNativeStackNavigator();
import Login from "./components/Login";
import Signup from "./components/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/firebase-setup";
import Profile from "./components/Profile";
import { Ionicons } from "@expo/vector-icons";
import PressableButton from "./components/PressableButton";

export default function App() {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //the callback will be called on any authentication changes
      if (user) {
        setIsUserLoggedIn(true);
      } else {
        setIsUserLoggedIn(false);
      }
    });
  }, []);
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
        options={({ navigation }) => {
          return {
            title: "All My Goals",
            headerRight: () => {
              return (
                <PressableButton
                  pressableFunction={() => navigation.navigate("Profile")}
                >
                  {/* <Text>X</Text> */}
                  <Ionicons name="person" size={24} color="black" />
                </PressableButton>
              );
            },
          };
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
      <Stack.Screen name="Profile" component={Profile} />
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
