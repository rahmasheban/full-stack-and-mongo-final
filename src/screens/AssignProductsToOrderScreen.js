import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function AssignProductsToOrderScreen() {
  const [orderId, setOrderId] = useState("");
  const [productName, setProductName] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Assign Product To Order
      </Text>

      <TextInput
        placeholder="Order ID"
        value={orderId}
        onChangeText={setOrderId}
        style={styles.input}
      />

      <TextInput
        placeholder="Product Name"
        value={productName}
        onChangeText={setProductName}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Add Product
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