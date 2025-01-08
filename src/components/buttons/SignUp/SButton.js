import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import styles from "./SButtonStyle";
const SignUpButton = ({ title }, onPress) => {
  return (
    <View style={styles.signUpButton}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.signUpText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
export default React.memo(SignUpButton);
