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
const SignUpForms = () => {
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
      <View style={styles.name}>
        <Text style={styles.nameText}>Name</Text>
        <TextInput style={styles.nameHolder} placeholder="John Smith" />
      </View>
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

      <View style={styles.conditions}>
        <TouchableOpacity onPress={toggleCheckBox} style={styles.checkBox}>
          {IsToggled ? (
            <Fontisto
              name="checkbox-active"
              size={18}
              style={styles.checkBox}
            />
          ) : (
            <Fontisto
              name="checkbox-passive"
              size={20}
              style={styles.checkBox}
            />
          )}
        </TouchableOpacity>
      </View>
      <View style={styles.TermsView}>
        <Text style={styles.checkboxText}>Terms and Conditions</Text>
      </View>
      <View style={styles.SignUpButton}>
        <SignUpButton title="Sign Up" />
      </View>
      <View style={styles.altText}>
        <Text style={{ color: colors.blue }}>Or Sign Up With</Text>
      </View>
      <View style={styles.googleButton}>
        <TouchableOpacity>
          <Image
            style={styles.googleIcon}
            source={require("../../../images/Gmail.png")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};
export default React.memo(SignUpForms);
