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
import { Picker } from "@react-native-picker/picker";

export default function UpdateOrderScreen() {
  const [orderId, setOrderId] = useState("");
  const [status, setStatus] = useState("");

  const handleUpdate = async () => {
    // التحقق من أن الخانات ليست فارغة
    if (!orderId.trim() || !status.trim()) {
      Alert.alert("Error", "Please fill in all fields");
      return;
    }

    try {
      // إرسال الطلب مع تنظيف المسافات تلقائياً عبر .trim()
      await axios.put(
        `http://10.69.0.135:5000/api/orders/${orderId.trim()}`,
        { status: status.trim() }
      );

      Alert.alert("Success", "Order Updated");
    } catch (error) {
      console.error(error);
      Alert.alert("Error", "Update Failed");
    }
  };

  return (
   <View style={styles.card}>
  <Text style={styles.title}>
    Update Order Status
  </Text>

  <TextInput
    placeholder="Order ID"
    value={orderId}
    onChangeText={setOrderId}
    style={styles.input}
  />

  <View style={styles.pickerContainer}>
    <Picker
      selectedValue={status}
      onValueChange={(itemValue) =>
        setStatus(itemValue)
      }
    >
      <Picker.Item label="Select Status" value="" />
      <Picker.Item label="Pending ⏳" value="Pending" />
      <Picker.Item label="Preparing 📦" value="Preparing" />
      <Picker.Item label="Delivered ✅" value="Delivered" />
    </Picker>
  </View>

  <TouchableOpacity
    style={styles.button}
    onPress={handleUpdate}
  >
    <Text style={styles.buttonText}>
      Update Status
    </Text>
  </TouchableOpacity>
</View>)
};

const styles = StyleSheet.create({
 container: {
  flex: 1,
  backgroundColor: "#F8F8F8",
  justifyContent: "center",
  paddingHorizontal: 20,
  marginTop: 100,
},

card: {
  backgroundColor: "#fff",
  padding: 25,
  borderRadius: 20,
  elevation: 5,
},

title: {
  fontSize: 26,
  fontWeight: "bold",
  textAlign: "center",
  marginBottom: 25,
  color: "#6E8B74",
},

input: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 12,
  padding: 15,
  marginBottom: 15,
},

pickerContainer: {
  borderWidth: 1,
  borderColor: "#ddd",
  borderRadius: 12,
  marginBottom: 20,
  overflow: "hidden",
},

button: {
  backgroundColor: "#6E8B74",
  padding: 16,
  borderRadius: 12,
},

buttonText: {
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 16,
},
});