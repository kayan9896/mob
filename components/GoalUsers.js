import { View, FlatList, Text, Button } from "react-native";
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

  async function postNewUser() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify({ name: "Neda" }),
        }
      );
      if (!response.ok) {
        // throwing an error exist this function
        throw new Error("Data was not written!");
      }
      const data = await response.json();
      setUsers((prevUsers) => {
        return [...prevUsers, data.name];
      });
    } catch (err) {
      // any of the promises above is rejected
      console.log("post new user  ", err);
    }
  }

  return (
    <View>
      <Button title="Add a new user" onPress={postNewUser} />
      <FlatList
        data={users}
        renderItem={({ item }) => {
          return <Text>{item}</Text>;
        }}
      />
    </View>
  );
}
