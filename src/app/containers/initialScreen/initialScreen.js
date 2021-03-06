import React, { Component } from "react";
import { Image, Button } from "react-native-elements";
import { View, Text } from "react-native";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

import styles from "./initialScreenStyles";

class initialScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../../utilities/images/GoOutLogo.jpg")}
            style={{ width: 200, height: 250 }}
          />
        </View>
        <View style={styles.buttonBox}>
          <Button title="Procurar partidas" style={styles.defaultButton} />
        </View>
        <View style={styles.buttonBox}>
          <Button title="Criar partida" style={styles.defaultButton} />
        </View>
        <View>
          <Text style={styles.brandStyle}> @BlueDot Technologies Co.</Text>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect()(initialScreen);
export default initialScreen;
// mapStateToProps,
// mapDispatchToProps
