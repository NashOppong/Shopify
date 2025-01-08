import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.white,
    padding: 20,
  },

  email: {
    flexDirection: "column",
    marginTop: 90,
    marginHorizontal: 34,
  },
  emailHolder: {
    width: 303,
    borderWidth: 1,
    color: colors.fadedBlue,
    borderRadius: 14,
    height: 60,
    paddingLeft: 20,
  },
  emailText: {
    color: colors.blue,
    marginBottom: 10,
  },
  password: {
    flexDirection: "column",
    marginTop: 30,
    marginHorizontal: 34,
  },
  passwordHolder: {
    width: 303,
    borderWidth: 1,
    color: colors.fadedBlue,
    borderRadius: 14,
    height: 60,
    paddingLeft: 20,
  },
  passwordText: {
    color: colors.blue,
    marginBottom: 10,
  },
  CPassword: {
    flexDirection: "column",
    marginTop: 10,
    marginHorizontal: 34,
  },
  ConfirmPasswordHolder: {
    width: 303,
    borderWidth: 1,
    color: colors.fadedBlue,
    borderRadius: 14,
    height: 60,
    paddingLeft: 20,
  },
  ConfirmPasswordText: {
    color: colors.blue,
    marginBottom: 10,
  },
  eyeIcon: {
    flexDirection: "row",
    bottom: 40,
    width: 24,
    height: 24,
    marginLeft: 260,
  },
  secondEye: {
    flexDirection: "row",
    bottom: 40,
    width: 24,
    height: 24,
    marginLeft: 260,
  },

  SignUpButton: {},
  altText: {
    marginTop: 40,
    height: 20,
    width: 100,
    color: colors.blue,
    fontSize: 20,
    marginHorizontal: 140,
  },
  googleButton: {
    marginTop: 20,
    marginHorizontal: 120,
    marginBottom: 50,
  },
  checkboxText: {
    color: colors.blue,
    marginLeft: 20,
    fontSize: 16,
    bottom: 20,
    marginHorizontal: 30,
  },
  checkBox: { Top: 20 },
  conditions: { marginHorizontal: 40 },
  TermsView: { marginHorizontal: 50 },
  notHavingAccount: {
    flexDirection: "row",
    marginHorizontal: 90,
  },
});

export default styles;
