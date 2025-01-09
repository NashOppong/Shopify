import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import styles from "./SplashStyle";
import SignUpButton from "../../../components/buttons/SignUp/SButton";
import LoginButton from "../../../components/buttons/login/LButton";

const Splash = () => {
  return (
    <ScrollView>
      <View style={styles.ImageContainer}>
        <Image
          style={styles.Image}
          source={require("../../../images/sp1.png")}
        />
      </View>
      <View style={styles.textBox}>
        <Text style={styles.spTitle}>You'll Find </Text>
        <Text style={styles.spTitle1}>All You Need</Text>
        <Text style={styles.spTitle}>Here</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.signUpButton}>
          <SignUpButton title="Sign Up" />
        </View>
        <View style={styles.loginButton}>
          <LoginButton title="Sign In" onPress={console.log(`clicked`)} />
        </View>
      </View>
    </ScrollView>
  );
};
export default React.memo(Splash);
