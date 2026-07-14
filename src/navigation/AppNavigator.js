import { NavigationContainer } from "@react-navigation/native";
import AuthStack from "./AuthStack";
import { ThemeProvider } from "../context/ThemeContext";

export default function AppNavigator() {
  return (
    <ThemeProvider>
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    </ThemeProvider>
  );
}