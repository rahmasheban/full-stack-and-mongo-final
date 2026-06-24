import { View, Text, StyleSheet } from "react-native";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import colors from "../theme/colors";

export default function ProfileScreen() {
  const { user } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        My Profile 👤
      </Text>

      <Text style={styles.info}>
        Name: {user?.fullName}
      </Text>

      <Text style={styles.info}>
        Email: {user?.email}
      </Text>

      <Text style={styles.info}>
        Phone: {user?.phone}
      </Text>

      <Text style={styles.info}>
        National ID: {user?.nationalId}
      </Text>

      <Text style={styles.info}>
        Birth Date: {user?.birthDate?.split("T")[0]}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryDark,
    marginBottom: 20,
  },

  info: {
    fontSize: 16,
    marginBottom: 10,
  },
});