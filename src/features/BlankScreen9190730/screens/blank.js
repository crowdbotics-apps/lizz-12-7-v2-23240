import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet, ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = {}
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_10730_204}>
        <ImageBackground style={styles.ImageBackground_10730_205} />
        <View style={styles.View_10730_206}>
          <Text style={styles.Text_10730_206}>Activity Name</Text>
        </View>
        <View style={styles.View_10730_207}>
          <View style={styles.View_10730_208}>
            <Text style={styles.Text_10730_208}>$</Text>
          </View>
          <View style={styles.View_10730_209}>
            <Text style={styles.Text_10730_209}>Price </Text>
          </View>
        </View>
        <View style={styles.View_10730_210} />
        <View style={styles.View_10730_211}>
          <Text style={styles.Text_10730_211}>2 hrs</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/522e/efa8/e3b5c35492ac72cdad2ca5ee404ca99b"
          }}
          style={styles.ImageBackground_10730_212}
        />
      </View>
      <View style={styles.View_10730_213}>
        <View style={styles.View_10730_214}>
          <Text style={styles.Text_10730_214}>TOP ADVENTURES</Text>
        </View>
        <View style={styles.View_10730_215}>
          <Text style={styles.Text_10730_215}>
            The most popular excursions.
          </Text>
        </View>
        <View style={styles.View_10730_216}>
          <Text style={styles.Text_10730_216}>Pick your adventure.</Text>
        </View>
        <View style={styles.View_10730_217} />
        <View style={styles.View_10730_218}>
          <Text style={styles.Text_10730_218}>BALI</Text>
        </View>
        <View style={styles.View_10730_219}>
          <Text style={styles.Text_10730_219}>INDONESIA</Text>
        </View>
      </View>
      <View style={styles.View_10730_220}>
        <View style={styles.View_10730_221} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_10730_204: {
    width: 375,
    minWidth: 375,
    height: 229,
    minHeight: 229,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 283,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_10730_205: {
    width: 331,
    minWidth: 331,
    height: 217,
    minHeight: 217,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: -2
  },
  View_10730_206: {
    width: 294,
    minWidth: 294,
    height: 81,
    minHeight: 81,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 89
  },
  Text_10730_206: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10730_207: {
    width: 50,
    minWidth: 50,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 172
  },
  View_10730_208: {
    width: 10,
    minWidth: 10,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_10730_208: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09
  },
  View_10730_209: {
    width: 38,
    minWidth: 38,
    height: 23,
    minHeight: 23,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 0
  },
  Text_10730_209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09
  },
  View_10730_210: {
    width: 80,
    minWidth: 80,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 259,
    top: 14,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1"
  },
  View_10730_211: {
    width: 59,
    minWidth: 59,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 280,
    top: 22
  },
  Text_10730_211: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.08
  },
  ImageBackground_10730_212: {
    width: 14,
    minWidth: 14,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 25
  },
  View_10730_213: {
    width: 375,
    minWidth: 375,
    height: 281,
    minHeight: 281,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10730_214: {
    width: 317,
    minWidth: 317,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 187
  },
  Text_10730_214: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 32,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10730_215: {
    width: 317,
    minWidth: 317,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 246
  },
  Text_10730_215: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09
  },
  View_10730_216: {
    width: 317,
    minWidth: 317,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 141
  },
  Text_10730_216: {
    color: "rgba(75, 75, 75, 1)",
    fontSize: 18,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.09
  },
  View_10730_217: {
    width: 375,
    minWidth: 375,
    height: 134,
    minHeight: 134,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 235, 0, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1"
  },
  View_10730_218: {
    width: 131,
    minWidth: 131,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22,
    top: 89
  },
  Text_10730_218: {
    color: "rgba(21, 21, 21, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10730_219: {
    width: 187,
    minWidth: 187,
    height: 60,
    minHeight: 60,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 89
  },
  Text_10730_219: {
    color: "rgba(173, 160, 7, 1)",
    fontSize: 40,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_10730_220: {
    width: 375,
    minWidth: 375,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_10730_221: {
    width: 56,
    height: 48,
    top: 30,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 13
  },
  View_2: { height: 812 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)