import {
  ScrollView,
  View,
  Text,
  StyleSheet,
  Image,
  FlatList,
  TouchableOpacity,
  TextInput,
} from "react-native";

import colors from "../theme/colors";
import { products } from "../data/products";
import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { useState } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../context/ThemeContext";
import { useEffect } from "react";


export default function HomeScreen({ navigation, route }) {
const user = route?.params?.user || {};

const { language, setLanguage } =
  useContext(LanguageContext);

const [search, setSearch] = useState("");

const filteredProducts = products.filter((item) =>
  item.name[language]
    .toLowerCase()
    .includes(search.toLowerCase())
);

const t = translations[language];
const { favorites , toggleFavorite } = useContext(FavoritesContext);
const { darkMode } = useContext(ThemeContext);

const banners = [
  require("../../assets/images/gg20%.png"),
  require("../../assets/images/green.png"),
  require("../../assets/images/green2.png"),
];

const [currentBanner, setCurrentBanner] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setCurrentBanner(
      (prev) => (prev + 1) % banners.length
    );
  }, 2000);

  return () => clearInterval(interval);
}, []);

 return (
<ScrollView
  style={[
    styles.container,
    {
      backgroundColor: darkMode
        ? "#1E1E1E"
        : "#F8F8F8",
    },
  ]}
>
<View>
  <Text
    style={[
      styles.welcome,
      {
        color: darkMode
          ? "white"
          : "#6E8B74",
      },
    ]}
  >
  </Text>

  <Text style={styles.subtitle}>
    {t.subtitle}
  </Text>
</View>
<Image
  source={banners[currentBanner]}
  style={{
    width: "100%",
    height: 280,
    borderRadius: 20,
    marginBottom: 30,
  }}
/>

<View style={styles.languageContainer}>
  <TouchableOpacity
   style={[
  styles.langButton,
  {
    backgroundColor: darkMode
      ? "#2C2C2C"
      : "#fff",
  },
]}
    onPress={() => setLanguage("en")}
  >
    <Text style={styles.langText}> EN</Text>
  </TouchableOpacity>

  <TouchableOpacity
   style={[
  styles.langButton,
  {
    backgroundColor: darkMode
      ? "#2C2C2C"
      : "#fff",
  },
]}
    onPress={() => setLanguage("ar")}
  >
    <Text style={styles.langText}> AR</Text>
  </TouchableOpacity>

  <TouchableOpacity
   style={[
  styles.langButton,
  {
    backgroundColor: darkMode
      ? "#2C2C2C"
      : "#fff",
  },
]}
    onPress={() => setLanguage("he")}
  >
    <Text style={styles.langText}> HE</Text>
  </TouchableOpacity>
</View>
<TextInput
  style={[
    styles.searchInput,
    {
      backgroundColor: darkMode
        ? "#2C2C2C"
        : "#fff",
      color: darkMode
        ? "white"
        : "black",
    },
  ]}
  placeholder={t.search}
  value={search}
  onChangeText={setSearch}
/>



<FlatList
  data={filteredProducts}
  numColumns={2}
  scrollEnabled={false}
  columnWrapperStyle={{
    justifyContent: "space-between",
  }}
  keyExtractor={(item) => item.id.toString()}
 renderItem={({ item }) => (
  <TouchableOpacity
   style={[
  styles.productCard,
  {
    backgroundColor: darkMode
      ? "#2C2C2C"
      : "#fff",
  },
]}
    onPress={() =>
      navigation.navigate("ProductDetails", {
        product: item,
      })
    }
  >

    <TouchableOpacity
      onPress={() => toggleFavorite(item)}
      style={{
        position: "absolute",
        right: 10,
        top: 10,
        zIndex: 10,
      }}
    >
      <Ionicons
        name={
          favorites.find(
            (fav) => fav.id === item.id
          )
            ? "heart"
            : "heart-outline"
        }
        size={24}
        color="red"
      />
    </TouchableOpacity>

    <Image
      source={item.image}
      style={styles.productImage}
    />

   <Text
  style={[
    styles.productName,
    {
      color: darkMode
        ? "white"
        : "black",
    },
  ]}
>
      {item.name[language]}
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
    padding: 20,
  },

  header: {
    marginTop: 20,
    marginBottom: 25,
  },

  welcome: {
    fontSize: 28,
    fontWeight: "bold",
  },

  subtitle: {
    marginTop: 8,
  },

  banner: {
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
  },

  productCard: {
    borderRadius: 20,
    padding: 12,
    margin: 8,
    flex: 1,
    maxWidth: "47%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 3,
  },

  productImage: {
    width: 120,
    height: 120,
    borderRadius: 15,
    resizeMode: "contain",
  },

  productName: {
    fontSize: 15,
    fontWeight: "600",
    marginTop: 10,
    textAlign: "center",
  },

  price: {
    marginTop: 6,
    color: "#C9A227",
    fontWeight: "bold",
    fontSize: 18,
  },

  languageContainer: {
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: 20,
},

langButton: {
  backgroundColor: "#fff",
  paddingVertical: 15,
  width: "30%",
  borderRadius: 15,
  alignItems: "center",
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 5,
  elevation: 3,
},


langText: {
  fontSize: 16,
  fontWeight: "bold",
  color: "#11972c",
},

  searchInput: {
    padding: 15,
    borderRadius: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#ddd",
  },
});