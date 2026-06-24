import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import colors from "../theme/colors";
import { loginUser } from "../services/authService";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setUser } = useContext(AuthContext);

const handleLogin = async () => {
  try {
    console.log("LOGIN CLICKED");
    const data = await loginUser(email, password);
    console.log("RESPONSE:", data);
    console.log("USER DATA:", data.user);

    setUser(data.user);

Alert.alert("Success", data.message);

navigation.navigate("Home");
 } catch (error) {
      console.log(
       error.response?.data
);
    Alert.alert(
      "Error",
      error.response?.data?.message || error.message
    );
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>
        Beauty Care
      </Text>

      <Text style={styles.subtitle}>
        Healthy Skin Starts Here
      </Text>

      <TextInput
        placeholder="Email"
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Password"
        secureTextEntry
        style={styles.input}
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleLogin}
      >
        <Text style={styles.buttonText}>
          Login
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Register")
        }
      >
        <Text style={styles.link}>
          Create New Account
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    padding: 25,
  },

  logo: {
    fontSize: 34,
    fontWeight: "bold",
    color: colors.primaryDark,
    textAlign: "center",
  },

  subtitle: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 40,
    color: colors.text,
  },

  input: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 15,
    padding: 15,
    marginBottom: 15,
  },

  button: {
    backgroundColor: colors.primary,
    padding: 16,
    borderRadius: 15,
  },

  buttonText: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },

  link: {
    textAlign: "center",
    marginTop: 20,
    color: colors.primaryDark,
  },
});