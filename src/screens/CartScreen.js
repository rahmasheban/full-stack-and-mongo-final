import { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

import colors from "../theme/colors";
import { CartContext } from "../context/CartContext";
import { LanguageContext } from "../context/LanguageContext";
import { ThemeContext } from "../context/ThemeContext";
export default function CartScreen({navigation,}) {
  const {
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useContext(CartContext);

  const { language } =
    useContext(LanguageContext);

  const totalPrice = cartItems.reduce(
    (sum, item) =>
      sum + item.price * item.quantity,
    0
  );
  const { darkMode } = useContext(ThemeContext);

  return (
    <View
  style={[
    styles.container,
    {
      backgroundColor: darkMode
        ? "#1E1E1E"
        : "#F8F8F8",
    },
  ]}
>
      <Text style={styles.title}>
        Shopping Cart 🛒
      </Text>

      <FlatList
        data={cartItems}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image
              source={item.image}
              style={styles.image}
            />

            <View style={{ flex: 1 }}>
              <Text style={styles.name}>
                {item.name[language]}
              </Text>

              <Text style={styles.price}>
                ₪{item.price}
              </Text>

              <View style={styles.quantityRow}>
                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() =>
                    decreaseQuantity(item.id)
                  }
                >
                  <Text>-</Text>
                </TouchableOpacity>

                <Text style={styles.qtyText}>
                  {item.quantity}
                </Text>

                <TouchableOpacity
                  style={styles.qtyBtn}
                  onPress={() =>
                    increaseQuantity(item.id)
                  }
                >
                  <Text>+</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={styles.deleteBtn}
                  onPress={() =>
                    removeFromCart(item.id)
                  }
                >
                  <Text>🗑️</Text>
                </TouchableOpacity>

              </View>
            </View>
          </View>

        )}
      />

      <Text style={styles.total}>
        Total: ₪{totalPrice}
      </Text>
      <TouchableOpacity
  style={styles.checkoutButton}
  onPress={() =>
    navigation.navigate("Checkout")
  }
>
  <Text style={styles.checkoutText}>
    Proceed To Checkout 💳
  </Text>
</TouchableOpacity>


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
    padding: 12,
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

  quantityRow: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },

  qtyBtn: {
    backgroundColor: "#eee",
    width: 30,
    height: 30,
    borderRadius: 15,
    justifyContent: "center",
    alignItems: "center",
  },

  qtyText: {
    marginHorizontal: 15,
    fontSize: 16,
    fontWeight: "bold",
  },

  deleteBtn: {
    marginLeft: 20,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    color: colors.primaryDark,
  },
  checkoutButton: {
  backgroundColor: "#A7C4A0",
  padding: 16,
  borderRadius: 15,
  marginTop: 20,
},

checkoutText: {
  color: "#fff",
  textAlign: "center",
  fontWeight: "bold",
  fontSize: 16,
},
});