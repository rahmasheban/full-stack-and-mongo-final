import { createNativeStackNavigator } from "@react-navigation/native-stack";

import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import CartScreen from "../screens/CartScreen";
import TabNavigator from "./TabNavigator";
import CheckoutScreen from "../screens/CheckoutScreen";
import AdminScreen from "../screens/AdminScreen";
import OrdersScreen from "../screens/OrdersScreen";
import AddOrderScreen from "../screens/AddOrderScreen";
import UpdateOrderScreen from "../screens/UpdateOrderScreen";
import DeleteOrderScreen from "../screens/DeleteOrderScreen";
import AssignOrderToUserScreen from "../screens/AssignOrderToUserScreen";
import AssignProductsToOrderScreen from "../screens/AssignProductsToOrderScreen";
import ViewUsersScreen from "../screens/ViewUsersScreen";

const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ title: "Create Account" }}
      />

      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false   }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{ title: "Product Details" }}
      />

      <Stack.Screen
        name="Cart"
        component={CartScreen}
        options={{ title: "Shopping Cart" }}
      />
      <Stack.Screen
  name="Checkout"
  component={CheckoutScreen}
/>
<Stack.Screen
  name="Admin"
  component={AdminScreen}
  options={{ title: "Admin Dashboard" }}
/>
<Stack.Screen
  name="Orders"
  component={OrdersScreen}
  options={{ title: "All Orders" }}
/>
<Stack.Screen
  name="AddOrder"
  component={AddOrderScreen}
  options={{ title: "Add Order" }}
/>
<Stack.Screen
  name="UpdateOrder"
  component={UpdateOrderScreen}
  options={{ title: "Update Order" }}
/>
<Stack.Screen
  name="DeleteOrder"
  component={DeleteOrderScreen}
  options={{ title: "Delete Order" }}
/>

   <Stack.Screen
  name="ViewUsers"
  component={ViewUsersScreen}
  options={{ title: "Users" }}
/>

    </Stack.Navigator>
    
  );
}