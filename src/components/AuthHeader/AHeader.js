import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import React from "react";
import styles from "./AHStyle";
const AHeader = ({ title }, onPress) => {
  return (
    <View style={styles.AHContainer}>
      <TouchableOpacity onPress={onPress}>
        <Image
          style={styles.AHeaderArrow}
          source={require("../../images/AuthHeaderArrow.png")}
        />
      </TouchableOpacity>
      <Text style={styles.AHtext}>{title}</Text>
    </View>
  );
};
export default React.memo(AHeader);
