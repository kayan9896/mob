import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalDetails from "./components/GoalDetails";
const Stack = createNativeStackNavigator();
import Login from "./components/Login";
import Signup from "./components/Signup";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "./Firebase/firebase-setup";
import Profile from "./components/Profile";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import PressableButton from "./components/PressableButton";
import Map from "./components/Map";

export default function App() {
  const [isUserLoggedin, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      //the callback will be called on any authentication changes
      //deleting the user doesn't call this callback - this is by design
      //https://stackoverflow.com/questions/35960546/firebase-still-retrieving-authdata-after-deletion/35961217#35961217

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
      <Stack.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "All My Goals",
          headerRight: () => {
            return (
              <PressableButton
                pressableFunction={async () => {
                  try {
                    await signOut(auth);
                  } catch (err) {
                    console.log("logout ", err);
                  }
                }}
              >
                <AntDesign name="logout" size={24} color="black" />
              </PressableButton>
            );
          },
        }}
      />
    </>
  );
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: "#a2a" },
          headerTintColor: "white",
        }}
      >
        {/* decide which stack to show */}
        {isUserLoggedin ? AppStack : AuthStack}
        <Stack.Screen name="map" component={Map}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
