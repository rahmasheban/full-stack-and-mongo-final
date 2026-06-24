import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
} from "react-native";

import colors from "../theme/colors";
import { CartContext } from "../context/CartContext";

export default function CartScreen() {
  const { cartItems } = useContext(CartContext);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Shopping Cart 🛒
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
            />

            <View>
              <Text style={styles.name}>
                {item.name}
              </Text>

              <Text style={styles.price}>
                ₪{item.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    color: colors.primaryDark,
  },

  card: {
    flexDirection: "row",
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 15,
    marginBottom: 10,
    alignItems: "center",
  },

  image: {
    width: 70,
    height: 70,
    borderRadius: 10,
    marginRight: 15,
  },

  name: {
    fontWeight: "600",
    fontSize: 15,
  },

  price: {
    marginTop: 5,
    color: colors.primaryDark,
    fontWeight: "bold",
  },
});