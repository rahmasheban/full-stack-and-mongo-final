import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
  StyleSheet,
} from "react-native";
import axios from "axios";

export default function DeleteOrderScreen() {
  const [orderId, setOrderId] = useState("");

  const handleDelete = async () => {
    try {
      await axios.delete(
        `http://10.69.0.135:5000/api/orders/${orderId}`
      );

      Alert.alert(
        "Success",
        "Order Deleted"
      );

      setOrderId("");
    } catch (error) {
      Alert.alert(
        "Error",
        "Delete Failed"
      );
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Delete Order
      </Text>

      <TextInput
        placeholder="Order ID"
        value={orderId}
        onChangeText={setOrderId}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleDelete}
      >
        <Text style={styles.buttonText}>
          Delete Order
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    justifyContent:"center"
  },
  title:{
    fontSize:28,
    fontWeight:"bold",
    textAlign:"center",
    marginBottom:30
  },
  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    padding:15,
    marginBottom:15
  },
  button:{
    backgroundColor:"#6E8B74",
    padding:15,
    borderRadius:10
  },
  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
  }
});