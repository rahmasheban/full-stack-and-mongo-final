import {
  View,
  Text,
  FlatList,
  Image,
} from "react-native";
import { useContext } from "react";

import { FavoritesContext } from "../context/FavoritesContext";
import { ThemeContext } from "../context/ThemeContext";

export default function FavoritesScreen() {
  const { favorites } =
    useContext(FavoritesContext);
    const { darkMode } = useContext(ThemeContext);

  return (
   <View
  style={{
    flex: 1,
    padding: 20,
    backgroundColor: darkMode
      ? "#1E1E1E"
      : "#F8F8F8",
  }}
>
      <Text
  style={{
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: darkMode ? "white" : "black",
  }}
>
  ❤️ Favorites
</Text>

      <FlatList
        data={favorites}
        keyExtractor={(item) =>
          item.id.toString()
        }
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: "row",
              marginBottom: 15,
            }}
          >
            <Image
              source={item.image}
              style={{
                width: 70,
                height: 70,
                borderRadius: 10,
              }}
            />

            <View
              style={{
                marginLeft: 10,
              }}
            >
              <Text>
                {item.name.en}
              </Text>

              <Text>
                ₪{item.price}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}