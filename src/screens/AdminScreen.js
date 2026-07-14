import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function AdminScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Admin Dashboard 👨‍💼
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Orders")}
      >
        <Text style={styles.buttonText}>
          View All Orders
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("AddOrder")}
>
  <Text style={styles.buttonText}>
    Add Order
  </Text>
</TouchableOpacity>

<TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("UpdateOrder")}
>
  <Text style={styles.buttonText}>
    Update Order Status
  </Text>
</TouchableOpacity>
     
      <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("DeleteOrder")}
>
  <Text style={styles.buttonText}>
    Delete Order
  </Text>
</TouchableOpacity>

     
   <TouchableOpacity
  style={styles.button}
  onPress={() => navigation.navigate("ViewUsers")}
>
  <Text style={styles.buttonText}>
    View Users
  </Text>
</TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: "center",
    backgroundColor: "#F8F8F8",
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 40,
  },

  button: {
    backgroundColor: "#6E8B74",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
});