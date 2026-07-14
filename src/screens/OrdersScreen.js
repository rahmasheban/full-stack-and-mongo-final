import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
} from "react-native";
import axios from "axios";

const API_URL = "http://10.69.0.135:5000/api/orders";

export default function OrdersScreen() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    loadOrders();
  }, []);

const loadOrders = async () => {
  try {
    const response = await axios.get(API_URL);

    console.log("ORDERS DATA:");
    console.log(response.data);

    setOrders(response.data);
  } catch (error) {
    console.log("ERROR:");
    console.log(error.response?.data || error.message);
  }
};

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        All Orders 📦
      </Text>

      <FlatList
        data={orders}
        keyExtractor={(item) => item._id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>
              User: {item.user?.fullName}
            </Text>

            <Text>
              Email: {item.user?.email}
            </Text>
             
             <Text style={{ fontWeight: "bold", marginTop: 5 }}>
  Products:
</Text>

{item.products?.map((product, index) => (
  <Text key={index}>
    • {product.name} x {product.quantity}
  </Text>
))}

            <Text>
              Total: ${item.totalPrice}
            </Text>

            <Text>
             {item.products?.map((product, index) => (
  <Text key={index}>
    {product.name} x {product.quantity}
  </Text>
))}
            </Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F7F6F2",
    padding: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },

  card: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    elevation: 2,
  },

  name: {
    fontWeight: "bold",
    fontSize: 18,
    marginBottom: 5,
  },
});