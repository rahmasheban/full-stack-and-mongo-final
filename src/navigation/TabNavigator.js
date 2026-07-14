import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import ProfileScreen from "../screens/ProfileScreen";
import { LanguageContext } from "../context/LanguageContext";
import { translations } from "../data/translations";
import FavoritesScreen from "../screens/FavoritesScreen";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  const { language } = useContext(LanguageContext);

  const t = translations[language];
  const { cartItems } = useContext(CartContext);

  return (
    <Tab.Navigator>
      <Tab.Screen
        name={t.home}
        component={HomeScreen}
      />
<Tab.Screen
  name={`${t.cart} (${cartItems.length})`}
  component={CartScreen}
/>

      <Tab.Screen
        name={t.favorites}
        component={FavoritesScreen}
      />

      <Tab.Screen
        name={t.profile}
        component={ProfileScreen}
      />
    </Tab.Navigator>
  );
}