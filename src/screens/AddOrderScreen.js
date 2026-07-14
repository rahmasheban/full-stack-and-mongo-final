import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import axios from "axios";
import { Alert } from "react-native";

export default function AddOrderScreen() {
  const [userId, setUserId] = useState("");
  const [totalPrice, setTotalPrice] = useState("");

  const handleAddOrder = async () => {
  try {
    const response = await axios.post(
      "http://10.69.0.135:5000/api/orders",
      {
        user: userId,
        products: [],
        totalPrice: Number(totalPrice),
        status: "Pending",
      }
    );

    console.log(response.data);

    Alert.alert(
      "Success",
      "Order Added Successfully"
    );

    setUserId("");
    setTotalPrice("");
  } catch (error) {
    console.log(error.response?.data || error.message);

    Alert.alert(
      "Error",
      "Failed To Add Order"
    );
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Order</Text>

      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        style={styles.input}
      />

      <TextInput
        placeholder="Total Price"
        value={totalPrice}
        onChangeText={setTotalPrice}
        style={styles.input}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={handleAddOrder}
      >
        <Text style={styles.buttonText}>
          Add Order
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
    marginBottom:30,
    textAlign:"center"
  },
  input:{
    borderWidth:1,
    borderColor:"#ccc",
    borderRadius:10,
    padding:15,
    marginBottom:15
  },
  button:{
    backgroundColor:"#8BA08A",
    padding:15,
    borderRadius:10
  },
  buttonText:{
    color:"#fff",
    textAlign:"center",
    fontWeight:"bold"
  }
});