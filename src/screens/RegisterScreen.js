import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from "react-native";

import colors from "../theme/colors";
import React, { useState } from "react";
import { registerUser } from "../services/authService";

export default function RegisterScreen({ navigation }) {
  const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [nationalId, setNationalId] = useState("");
const [birthDate, setBirthDate] = useState("");
const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      console.log("REGISTER CLICKED");
      console.log({
  fullName,
  email,
  phone,
  nationalId,
  birthDate,
  password,
});
      const data = await registerUser({
        fullName,
        email,
        phone,
        nationalId,
        birthDate,
        password,
      });

      Alert.alert("Success", data.message);

      navigation.navigate("Login");
    } catch (error) {
      console.log(error);

      Alert.alert(
        "Error",
        error.response?.data?.message ||
        error.message
      );
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Create Account
      </Text>

     <TextInput
  placeholder="Full Name"
  style={styles.input}
  value={fullName}
  onChangeText={setFullName}
/>

<TextInput
  placeholder="Email"
  style={styles.input}
  value={email}
  onChangeText={setEmail}
/>

<TextInput
  placeholder="Phone"
  style={styles.input}
  value={phone}
  onChangeText={setPhone}
/>

<TextInput
  placeholder="National ID"
  style={styles.input}
  value={nationalId}
  onChangeText={setNationalId}
/>

<TextInput
  placeholder="Birth Date (YYYY-MM-DD)"
  style={styles.input}
  value={birthDate}
  onChangeText={setBirthDate}
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
  onPress={handleRegister}
>
  <Text style={styles.buttonText}>
    Register
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

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginBottom: 30,
    textAlign: "center",
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
});

