import { ScrollView, View, Text } from "react-native";
import React from "react";
import AHeader from "../../../components/AuthHeader/AHeader";
import Forms from "../../../components/Forms/signup/SignUpForms.js";

const SignUpPage = () => {
  return (
    <ScrollView>
      <AHeader title="Sign Up" />
      <Forms />
    </ScrollView>
  );
};
export default React.memo(SignUpPage);
