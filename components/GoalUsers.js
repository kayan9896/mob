import { View, FlatList, Text } from "react-native";
import React, { useEffect, useState } from "react";

export default function GoalUsers() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
          // throwing an error exist this function
          throw new Error("Data does not exist!");
        }
        const data = await response.json();
        const usersArray = data.map((item) => {
          return item.name;
        });
        setUsers(usersArray);
      } catch (err) {
        // any of the promises above is rejected
        console.log("fetch user data ", err);
      }
    }
    fetchUsers();
  }, []);

  return (
    <View>
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
}
