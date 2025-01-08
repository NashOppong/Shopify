import react from "react";
import { StyleSheet } from "react-native";
import colors from "../../../constants/colors.js";
const styles = StyleSheet.create({
  container: { flex: 1 },
  ImageContainer: {
    marginTop: 100,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  Image: {
    resizeMode: "cover",
    height: 209,
    width: "100%",
    marginHorizontal: 2,
    marginTop: 50,
  },
  textBox: {
    marginTop: 50,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
  },
  spTitle: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.black,
  },
  spTitle1: {
    fontSize: 40,
    fontWeight: "bold",
    color: colors.orange,
  },
  signUpButton: {
    marginTop: 10,
    alignContent: "center",
    height: 60,
    width: 303,
    paddingLeft: 10,
  },
  signUpText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    color: colors.white,
  },
  loginButton: {
    marginTop: 10,
    alignContent: "center",
    justifyContent: "center",
    paddingRight: 20,
  },
  loginText: {
    textAlign: "center",
    fontSize: 20,
    color: colors.blue,
    marginRight: 30,
  },
  buttonContainer: { marginBottom: 100 },
});
export default styles;
