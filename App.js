import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";

import AHeader from "./src/components/AuthHeader/AHeader";
import SignUpPage from "./src/screens/auth/signup/SignUpPage";
import LoginPage from "./src/screens/auth/login/LoginPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "./src/screens/auth/splash/Splash";
import colors from "./src/constants/colors";
export default function App() {
  const Stack = createNativeStackNavigator();
  const theme = {
    colors: { background: colors.white },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator theme={theme} options>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="signup" component={SignUpPage} />
        <Stack.Screen name="LoginIn" component={LoginPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
