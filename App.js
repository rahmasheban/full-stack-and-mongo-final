import AppNavigator from "./src/navigation/AppNavigator";
import CartProvider from "./src/context/CartContext";
import AuthProvider from "./src/context/AuthContext";
import LanguageProvider from "./src/context/LanguageContext";
import FavoritesProvider from "./src/context/FavoritesContext";
import { ThemeProvider } from "./src/context/ThemeContext";
export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <FavoritesProvider>
          <AuthProvider>
      <CartProvider>
        <AppNavigator />
      </CartProvider>
    </AuthProvider>
  </FavoritesProvider>
</LanguageProvider>
    </ThemeProvider>
  );
}