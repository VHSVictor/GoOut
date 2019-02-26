import { StyleSheet } from "react-native";
import Colors from "../../styles/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    flex: 1,
    width: wp("100%"),
    flexDirection: "column",
    alignItems: "center",
    backgroundColor: Colors.white,
    borderWidth: 2,
    borderColor: "black"
  },
  maxDist: {
    width: wp("80%"),
    height: hp("15%")
  },
  container2: {
    width: wp("80%"),
    height: hp("70%"),
    borderWidth: 2,
    borderColor: "green"
  },
  flexOne: {
    flex: 1
  },
  sportContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 0
  },
  title: {
    fontSize: 30,
    color: Colors.brandColor
  },
  mediumPaddingBottom: {
    marginBottom: 60
  },
  smallPaddingBottom: {
    marginBottom: 30
  },
  kmMeasurer: {
    textAlign: "right"
  },
  brandStyle: {
    fontSize: 12,
    color: Colors.brandColor,
    marginTop: 80
  }
});
/*
flexdirection ; column, row
alignItems : flex-start, flex-end, center, sentido contrario do flexdirection
alignContent: igual o de cima porem alinha mais de uma linha de conteudo. flex-start, flex-end, center, space-between, space-around, 
justifyContent: space-between, space-around, 
alignSelf: isola sobreescreve um so elemento da estilizacao do alignitems
flexWrap: wrap..



*/
