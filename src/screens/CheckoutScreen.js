import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { useState } from "react";
import axios from "axios";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";

export default function CheckoutScreen() {
  const [cardName, setCardName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const { cartItems, clearCart } = useContext(CartContext);
const { user } = useContext(AuthContext);

const handlePayment = async () => {
  try {
    if (!user) {
      alert("Please login first");
      return;
    }

    const totalPrice = cartItems.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );

    const orderData = {
      user: user._id,

      products: cartItems.map((item) => ({
        name: item.name.en,
        price: item.price,
        quantity: item.quantity,
      })),

      totalPrice,
    };

    await axios.post(
      "http://10.69.0.135:5000/api/orders",
      orderData
    );

    clearCart();

    alert("Order Created Successfully");
  } catch (error) {
    console.log(error);
    alert("Payment Failed");
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Payment Page 💳
      </Text>

      <TextInput
        style={styles.input}
        placeholder="Card Holder Name"
        value={cardName}
        onChangeText={setCardName}
      />

      <TextInput
        style={styles.input}
        placeholder="Card Number"
        value={cardNumber}
        onChangeText={setCardNumber}
      />

      <TextInput
        style={styles.input}
        placeholder="MM/YY"
        value={expiry}
        onChangeText={setExpiry}
      />

      <TextInput
        style={styles.input}
        placeholder="CVV"
        value={cvv}
        onChangeText={setCvv}
      />

      <TouchableOpacity
  style={styles.button}
  onPress={handlePayment}
>
  <Text style={styles.buttonText}>
    Pay Now
  </Text>
</TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    width: "90%",
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 10,
    padding: 15,

  marginBottom: 15,
},

button: {
  backgroundColor: "#A7C4A0",
  padding: 15,
  borderRadius: 10,
  width: "90%",
},

buttonText: {
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
}});