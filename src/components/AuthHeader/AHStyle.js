import { StyleSheet } from "react-native";
import colors from "../../constants/colors";
const styles = StyleSheet.create({
  AHeaderArrow: {
    top: 60,
    left: 30,
  },
  AHtext: {
    top: 50,
    left: 49,
    color: colors.blue,
    fontSize: 25,
    fontWeight: "500",
  },
  AHContainer: { flexDirection: "row" },
});
export default styles;
