import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import colors from "../theme/colors";
import { ThemeContext } from "../context/ThemeContext";
import * as ImagePicker from "expo-image-picker";
import { Image } from "react-native";
import { changePassword } from "../services/authService";

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  const [fullName, setFullName] = useState(
    user?.fullName || ""
  );

  const [email, setEmail] = useState(
    user?.email || ""
  );

  const [phone, setPhone] = useState(
    user?.phone || ""
  );

  const [currentPassword, setCurrentPassword] = useState("");
const [newPassword, setNewPassword] = useState("");
const [confirmPassword, setConfirmPassword] = useState("");

  const { darkMode, toggleTheme } =
  useContext(ThemeContext);

  const [profileImage, setProfileImage] = useState(null);
  const pickImage = async () => {
  const result =
    await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

  if (!result.canceled) {
    setProfileImage(result.assets[0].uri);
  }
};
const handleChangePassword = async () => {
  try {
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    await changePassword(
      user.email,
      currentPassword,
      newPassword
    );

    alert("Password changed successfully");

    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  } catch (error) {
    alert(
      error?.response?.data?.message ||
        "Failed to change password"
    );
  }
};

  return (
  <ScrollView
  contentContainerStyle={[
    styles.container,
    {
      backgroundColor: darkMode
        ? "#1E1E1E"
        : "#F8F8F8",
    },
  ]}

>
     <Text
  style={{
    color: darkMode
      ? "white"
      : "black",
  }}
>
      </Text>

      <TouchableOpacity
  onPress={pickImage}
  style={{
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  }}
>
  {profileImage ? (
    <Image
      source={{ uri: profileImage }}
      style={{
        width: 120,
        height: 120,
        borderRadius: 60,
      }}
    />
  ) : (
    <Text style={{ fontSize: 35 }}>
      📷
    </Text>
  )}
</TouchableOpacity>

      <TextInput
        style={styles.input}
        value={fullName}
        onChangeText={setFullName}
        placeholder="Full Name"
      />

      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Email"
      />

      <TextInput
        style={styles.input}
        value={phone}
        onChangeText={setPhone}
        placeholder="Phone"
      />

      <Text style={styles.info}>
        National ID: {user?.nationalId}
      </Text>

      <Text style={styles.info}>
        Birth Date: {user?.birthDate?.split("T")[0]}
      </Text>

    

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Save Changes
        </Text>
      </TouchableOpacity>

      <TextInput
  style={styles.input}
  placeholder="Current Password"
  secureTextEntry
  value={currentPassword}
  onChangeText={setCurrentPassword}
/>

<TextInput
  style={styles.input}
  placeholder="New Password"
  secureTextEntry
  value={newPassword}
  onChangeText={setNewPassword}
/>

<TextInput
  style={styles.input}
  placeholder="Confirm Password"
  secureTextEntry
  value={confirmPassword}
  onChangeText={setConfirmPassword}
/>

<TouchableOpacity
  style={styles.button}
  onPress={handleChangePassword}
>
  <Text style={styles.buttonText}>
    🔒 Change Password
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={toggleTheme}
>
  <Text style={styles.buttonText}>
    {darkMode
      ? "☀️ Light Mode"
      : "🌙 Dark Mode"}
  </Text>
</TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginBottom: 25,
  },

  input: {
    width: "90%",
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 15,
    padding: 15,
    marginBottom: 12,
  },

  info: {
    fontSize: 16,
    marginTop: 10,
  },

  button: {
    marginTop: 25,
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 15,
    width: "90%",
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});