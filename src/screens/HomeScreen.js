import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
} from "react-native";

import colors from "../theme/colors";
import { products } from "../data/products";

export default function HomeScreen({ navigation, route }) {
  const user = route?.params?.user || {};

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.welcome}>
          Welcome {user.fullName || "Rahma"} 🌿
        </Text>

        <Text style={styles.subtitle}>
          Healthy skin starts with good care
        </Text>
      </View>

      <View style={styles.banner}>
        <Text style={styles.bannerTitle}>
          Natural Beauty Collection
        </Text>

        <Text style={styles.bannerText}>
          Premium skincare products for every skin type
        </Text>
      </View>

      <Text style={styles.sectionTitle}>
        Popular Products
      </Text>

      <FlatList
        data={products}
        numColumns={2}
        scrollEnabled={false}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.productCard}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                product: item,
              })
            }
          >
            <Image
              source={item.image}
              style={styles.productImage}
            />

            <Text style={styles.productName}>
              {item.name}
            </Text>

            <Text style={styles.price}>
              ₪{item.price}
            </Text>
          </TouchableOpacity>
        )}
      />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 25,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "bold",
    color: colors.primaryDark,
  },

  subtitle: {
    marginTop: 8,
    color: colors.text,
  },

  banner: {
    backgroundColor: colors.primary,
    padding: 25,
    borderRadius: 20,
    marginBottom: 25,
  },

  bannerTitle: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },

  bannerText: {
    color: "#fff",
    marginTop: 10,
  },

  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
    color: colors.text,
  },

  productCard: {
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 10,
    margin: 5,
    width: 170,
    borderWidth: 1,
    borderColor: colors.border,
  },

  productImage: {
    width: "100%",
    height: 120,
    borderRadius: 12,
    resizeMode: "cover",
  },

  productName: {
    fontSize: 14,
    fontWeight: "600",
    marginTop: 10,
  },

  price: {
    marginTop: 8,
    color: colors.primaryDark,
    fontWeight: "bold",
    fontSize: 18,
  },
});