import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { useContext } from "react";

import colors from "../theme/colors";
import { CartContext } from "../context/CartContext";
import { LanguageContext } from "../context/LanguageContext";

export default function ProductDetailsScreen({ route, navigation }) {
  const { product } = route.params;
  const { addToCart } = useContext(CartContext);
  const { language } = useContext(LanguageContext);
  

  return (
    <View style={styles.container}>
      <Image
        source={product.image}
        style={styles.image}
      />

      <Text style={styles.name}>
        {product.name[language]}
      </Text>

      <Text style={styles.price}>
        ₪{product.price}
      </Text>

      <Text style={styles.description}>
        {product.description[language]}
      </Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          addToCart(product);
          navigation.navigate("Cart");
        }}
      >
        <Text style={styles.buttonText}>
          Add To Cart 🛒
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  image: {
    width: "100%",
    height: 250,
    borderRadius: 20,
    resizeMode: "contain",
  },

  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    color: colors.text,
  },

  price: {
    fontSize: 22,
    color: colors.primaryDark,
    fontWeight: "bold",
    marginTop: 10,
  },

  description: {
    marginTop: 20,
    color: "#666",
    lineHeight: 24,
  },

  button: {
    marginTop: 30,
    backgroundColor: colors.primary,
    padding: 18,
    borderRadius: 15,
  },

  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});