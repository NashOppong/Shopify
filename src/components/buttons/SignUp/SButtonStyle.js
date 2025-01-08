import { StyleSheet } from "react-native";
import colors from "../../../constants/colors";
const styles = StyleSheet.create({
  signUpButton: {
    top: 30,
    alignContent: "center",
    height: 60,
    width: 303,
    backgroundColor: colors.blue,
    justifyContent: "center",
    marginLeft: 40,
    borderRadius: 10,
  },
  signUpText: {
    fontSize: 20,
    textAlign: "center",
    justifyContent: "center",
    color: colors.white,
  },
});

export default styles;
