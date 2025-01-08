import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./LButtonStyle";
const LoginButton = ({ title }, onPress) => {
  return (
    <View style={styles.loginButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.loginText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(LoginButton);
