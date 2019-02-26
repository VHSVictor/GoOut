import React, { Component } from "react";
import Slider from "react-native-slider";
import { View, Text, Picker } from "react-native";
import DatePicker from "react-native-datepicker";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { translate } from "../../../locales";

import styles from "./createPlayScreenStyles";

class createPlayScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 2,
      minDate: new Date(),
      minDistance: 0,
      maxDistance: 20,
      sports: ""
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.container2}>
          <View style={styles.mediumPaddingBottom}>
            <Text style={styles.title}> {translate("configuration")}</Text>
          </View>
          <View style={styles.maxDist}>
            <Text>{translate("maximumDistance")}</Text>
            <Text style={styles.kmMeasurer}>
              {this.state.value} {translate("km")}
            </Text>
            <Slider
              step={1}
              minimumValue={this.state.minDistance}
              maximumValue={this.state.maxDistance}
              value={this.state.value}
              onValueChange={value => this.setState({ value })}
              style={styles.flexOne}
            />
          </View>
          <View style={styles.sportContainer}>
            <Text> {translate("sport")}</Text>
            <Picker
              selectedValue={this.state.sports}
              style={styles.flexOne}
              onValueChange={(itemValue, itemIndex) =>
                this.setState({ sports: itemValue })
              }
            >
              <Picker.Item label="Futebol" value="futebol" />
              <Picker.Item label="Vôlei" value="volei" />
              <Picker.Item label="Basquete" value="Basquete" />
            </Picker>
          </View>
          <View>
            <View>
              <Text> {translate("when")} </Text>
              <DatePicker
                date={this.state.minDate}
                locale={"PT-BR"}
                mode="date"
                placeholder="selecione o dia"
                format="YYYY-MM-DD"
                minDate={this.state.minDate}
                confirmBtnText="Confirm"
                cancelBtnText="Cancel"
                customStyles={{
                  dateIcon: {
                    position: "absolute",
                    left: 0,
                    top: 4,
                    marginLeft: 0
                  },
                  dateInput: {
                    marginLeft: 36
                  }
                  // ... You can check the source to find the other keys.
                }}
                onDateChange={date => {
                  this.setState({ date: date });
                }}
              />
            </View>
          </View>
        </View>
      </View>
    );
  }
}

// const mapStateToProps = state => ({});

// const mapDispatchToProps = dispatch =>
//   bindActionCreators(Actions, dispatch);

// export default connect()(createPlayScreen);
export default createPlayScreen;
// mapStateToProps,
// mapDispatchToProps
