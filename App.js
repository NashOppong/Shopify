import { StatusBar } from "expo-status-bar";
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/auth/splash/splash";
import AHeader from "./src/components/AuthHeader/AHeader";
import SignUpPage from "./src/screens/auth/signup/SignUpPage";
import LoginPage from "./src/screens/auth/login/LoginPage";
export default function App() {
  return (
    <SafeAreaView>
      <ScrollView>
        <Splash />
      </ScrollView>
    </SafeAreaView>
  );
}
