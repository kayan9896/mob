import { View, Text, TextInput, Button, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  const signupHandler = () => {
    navigation.replace("Signup");
  };
  const loginHandler = () => {};
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Email</Text>
      <TextInput placeholder="Email" style={styles.input} />
      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button title="Login" onPress={loginHandler} />
      <Button title="New User? Create An Account" onPress={signupHandler} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "stretch",
    justifyContent: "center",
  },
  input: {
    borderColor: "#552055",
    borderWidth: 2,
    width: "90%",
    margin: 5,
    padding: 5,
  },
  label: {
    marginLeft: 10,
  },
});
