import {
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React, { useState } from "react";

import { Feather } from "@expo/vector-icons";
import Fontisto from "@expo/vector-icons/Fontisto";
import SignUpButton from "../../buttons/SignUp/SButton";
import colors from "../../../constants/colors";
import styles from "./FormsStyle";
const LoginForms = () => {
  const [PwdVisibility, setPwdVisibility] = useState(false);
  const togglePwdVisibility = () => {
    setPwdVisibility(!PwdVisibility);
  };
  const [IsToggled, setIsToggle] = useState(false);
  const toggleCheckBox = () => {
    setIsToggle(!IsToggled);
  };

  return (
    <ScrollView>
      <View style={styles.email}>
        <Text style={styles.emailText}>E-mail</Text>
        <TextInput
          style={styles.emailHolder}
          placeholder="someone@example.com"
        />
      </View>
      <View style={styles.password}>
        <Text style={styles.passwordText}>Password</Text>
        <TextInput
          style={styles.passwordHolder}
          secureTextEntry={!PwdVisibility}
          placeholder="Password"
        />
        <Pressable onPress={togglePwdVisibility}>
          <Image
            style={styles.eyeIcon}
            source={
              PwdVisibility
                ? require("../../../images/eye.png")
                : require("../../../images/eye_closed.png")
            }
          />
        </Pressable>
      </View>

      <View style={styles.SignUpButton}>
        <SignUpButton title="Login" onPress={console.log(`pressed`)} />
      </View>
      <View style={styles.altText}>
        <Text style={{ color: colors.blue }}>Or Sign In With</Text>
      </View>
      <View style={styles.googleButton}>
        <TouchableOpacity onPress={alert(`clicked`)}>
          <Image
            style={styles.googleIcon}
            source={require("../../../images/Gmail.png")}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.notHavingAccount}>
        <Text>Don't Have An Account?</Text>
        <TouchableOpacity>
          <Text style={{ color: colors.blue, marginHorizontal: 10 }}>
            Sign Up
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default React.memo(LoginForms);
