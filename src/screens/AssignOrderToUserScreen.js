import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function AssignOrderToUserScreen() {
  const [orderId, setOrderId] = useState("");
  const [userId, setUserId] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Assign Order To User
      </Text>

      <TextInput
        placeholder="Order ID"
        value={orderId}
        onChangeText={setOrderId}
        style={styles.input}
      />

      <TextInput
        placeholder="User ID"
        value={userId}
        onChangeText={setUserId}
        style={styles.input}
      />

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          Assign User
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