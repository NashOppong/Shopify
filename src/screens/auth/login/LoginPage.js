import { View, Text, ScrollView } from "react-native";
import React from "react";
import AHeader from "../../../components/AuthHeader/AHeader";
import LoginForms from "../../../components/Forms/login/LoginForms";

const LoginPage = () => {
  return (
    <ScrollView>
      <AHeader title="Login" onPress={console.log(`taped`)} />
      <LoginForms />
    </ScrollView>
  );
};
export default React.memo(LoginPage);
