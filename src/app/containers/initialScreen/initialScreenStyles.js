import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.white
  },
  logo: { padding: 50 },
  buttonBox: {
    width: 280,
    paddingBottom: 20
  },
  defaultButton: {
    borderColor: Colors.black,
    textAlign: "center",
    fontSize: 20
  },
  brandStyle: {
    fontSize: 12,
    color: Colors.brandColor,
    marginTop: 80
  }
});
