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
  StyleSheet
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
      <View style={styles.View_80_1147} />
      <View style={styles.View_63_336} />
      <View style={styles.View_63_401}>
        <Text style={styles.Text_63_401}>Amy Johnson</Text>
      </View>
      <View style={styles.View_63_402}>
        <Text style={styles.Text_63_402}>AmyJohnson43@gmail.com</Text>
      </View>
      <View style={styles.View_63_403}>
        <View style={styles.View_63_404} />
        <View style={styles.View_63_405}>
          <View style={styles.View_63_406}>
            <Text style={styles.Text_63_406}>Log Out</Text>
          </View>
        </View>
        <View style={styles.View_63_407} />
        <View style={styles.View_63_408} />
      </View>
      <View style={styles.View_63_410}>
        <View style={styles.View_63_411} />
        <View style={styles.View_63_412}>
          <View style={styles.View_63_413}>
            <Text style={styles.Text_63_413}>Help</Text>
          </View>
        </View>
        <View style={styles.View_63_414} />
        <View style={styles.View_63_415} />
      </View>
      <View style={styles.View_63_431}>
        <View style={styles.View_63_432} />
        <View style={styles.View_63_433}>
          <View style={styles.View_63_434}>
            <Text style={styles.Text_63_434}>Privacy Policy </Text>
          </View>
        </View>
        <View style={styles.View_63_435} />
        <View style={styles.View_63_436} />
      </View>
      <View style={styles.View_63_438}>
        <View style={styles.View_63_439} />
        <View style={styles.View_63_440}>
          <View style={styles.View_63_441}>
            <Text style={styles.Text_63_441}>Account Info</Text>
          </View>
        </View>
        <View style={styles.View_63_442} />
        <View style={styles.View_63_443}>
          <View style={styles.View_63_564} />
        </View>
      </View>
      <View style={styles.View_63_454}>
        <View style={styles.View_63_455} />
        <View style={styles.View_63_456}>
          <View style={styles.View_63_457}>
            <Text style={styles.Text_63_457}>Manage Subscription</Text>
          </View>
        </View>
        <View style={styles.View_63_458} />
      </View>
      <View style={styles.View_63_556} />
      <View style={styles.View_63_577}>
        <View style={styles.View_63_570} />
        <View style={styles.View_63_571} />
        <View style={styles.View_63_572} />
        <View style={styles.View_63_573} />
        <View style={styles.View_63_574} />
        <View style={styles.View_63_575} />
        <View style={styles.View_63_576} />
      </View>
      <View style={styles.View_120_2656}>
        <View style={styles.View_120_2654} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2712/d796/6ecc5e05f8d0464f7dd703073017b3d9"
          }}
          style={styles.ImageBackground_120_2655}
        />
      </View>
      <View style={styles.View_384_69}>
        <View style={styles.View_384_70}>
          <View style={styles.View_384_71} />
        </View>
        <View style={styles.View_384_72} />
        <View style={styles.View_384_73} />
        <View style={styles.View_384_74}>
          <View style={styles.View_384_75}>
            <View style={styles.View_384_76} />
          </View>
        </View>
        <View style={styles.View_384_79} />
        <View style={styles.View_384_81} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_80_1147: {
    width: 585,
    minWidth: 585,
    height: 494,
    minHeight: 494,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -91,
    top: -233
  },
  View_63_336: {
    width: 375,
    minWidth: 375,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_63_401: {
    width: 199,
    minWidth: 199,
    height: 25,
    minHeight: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 88,
    top: 59
  },
  Text_63_401: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 36,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_402: {
    width: 181,
    minWidth: 181,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 97.419189453125
  },
  Text_63_402: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_403: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 49.02248764038086,
    minHeight: 49.02248764038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 545.18603515625
  },
  View_63_404: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 0.000028438380468287505,
    minHeight: 0.000028438380468287505,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49.0224609375
  },
  View_63_405: {
    width: 57,
    minWidth: 57,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.47119140625,
    top: 7.5
  },
  View_63_406: {
    width: 57,
    minWidth: 57,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_63_406: {
    color: "rgba(231, 49, 73, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_407: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.39697265625,
    top: 0
  },
  View_63_408: {
    width: 22,
    height: 22,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.89697265625
  },
  View_63_410: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 49.02248764038086,
    minHeight: 49.02248764038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 479.0224609375
  },
  View_63_411: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 0.000028438380468287505,
    minHeight: 0.000028438380468287505,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49.0224609375
  },
  View_63_412: {
    width: 33,
    minWidth: 33,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.47119140625,
    top: 7.5
  },
  View_63_413: {
    width: 33,
    minWidth: 33,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_63_413: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_414: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.39697265625,
    top: 0
  },
  View_63_415: {
    width: 22,
    height: 22,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.89697265625
  },
  View_63_431: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 49.02248764038086,
    minHeight: 49.02248764038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 410
  },
  View_63_432: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 0.000028438380468287505,
    minHeight: 0.000028438380468287505,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49.0224609375
  },
  View_63_433: {
    width: 99,
    minWidth: 99,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.47119140625,
    top: 7.5
  },
  View_63_434: {
    width: 99,
    minWidth: 99,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_63_434: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_435: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.39697265625,
    top: 0
  },
  View_63_436: {
    width: 22,
    height: 22,
    top: 6.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.1826171875
  },
  View_63_438: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 49.02248764038086,
    minHeight: 49.02248764038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24.8515625,
    top: 282.60040283203125
  },
  View_63_439: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 0.000028438380468287505,
    minHeight: 0.000028438380468287505,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49.0224609375
  },
  View_63_440: {
    width: 90,
    minWidth: 90,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.47119140625,
    top: 7.5
  },
  View_63_441: {
    width: 90,
    minWidth: 90,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_63_441: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_442: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.39697265625,
    top: 0
  },
  View_63_443: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.89697265625,
    top: 6.5,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_63_564: {
    width: 28,
    height: 28,
    top: -2.89947509765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -3.14990234375
  },
  View_63_454: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 49.02248764038086,
    minHeight: 49.02248764038086,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 26,
    top: 347
  },
  View_63_455: {
    width: 325.297119140625,
    minWidth: 325.297119140625,
    height: 0.000028438380468287505,
    minHeight: 0.000028438380468287505,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 49.0224609375
  },
  View_63_456: {
    width: 150,
    minWidth: 150,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 52.47119140625,
    top: 7.5
  },
  View_63_457: {
    width: 150,
    minWidth: 150,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_63_457: {
    color: "rgba(79, 79, 79, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_63_458: {
    width: 35,
    minWidth: 35,
    height: 35,
    minHeight: 35,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.39697265625,
    top: 0
  },
  View_63_556: {
    width: 377,
    minWidth: 377,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 760
  },
  View_63_577: {
    width: 18,
    minWidth: 18,
    height: 11.8421049118042,
    minHeight: 11.8421049118042,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 36,
    top: 359
  },
  View_63_570: {
    width: 17.307693481445312,
    minWidth: 17.307693481445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.46142578125
  },
  View_63_571: {
    width: 0,
    minWidth: 0,
    height: 9,
    minHeight: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.052734375,
    top: 2.84210205078125
  },
  View_63_572: {
    width: 0,
    minWidth: 0,
    height: 8.307693481445312,
    minHeight: 8.307693481445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 3.46142578125
  },
  View_63_573: {
    width: 17.307693481445312,
    minWidth: 17.307693481445312,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 11.76910400390625
  },
  View_63_574: {
    width: 0.6923076510429382,
    minWidth: 0.6923076510429382,
    height: 2.769230604171753,
    minHeight: 2.769230604171753,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_63_575: {
    width: 18,
    minWidth: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_63_576: {
    width: 0,
    minWidth: 0,
    height: 3.461538553237915,
    minHeight: 3.461538553237915,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 17.052734375,
    top: 0
  },
  View_120_2656: {
    width: 113,
    minWidth: 113,
    height: 113,
    minHeight: 113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 131
  },
  View_120_2654: {
    width: 113,
    minWidth: 113,
    height: 113,
    minHeight: 113,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_120_2655: {
    width: 116.0658950805664,
    minWidth: 116.0658950805664,
    height: 111.24806213378906,
    minHeight: 111.24806213378906,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -3.06591796875,
    top: 1.751953125,
    resizeMode: "cover"
  },
  View_384_69: {
    width: 375,
    minWidth: 375,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 754
  },
  View_384_70: {
    width: 375,
    minWidth: 375,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_384_71: {
    width: 377,
    minWidth: 377,
    height: 49,
    minHeight: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3,
    top: 0
  },
  View_384_72: {
    width: 15.569999694824219,
    height: 17.516250610351562,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311
  },
  View_384_73: {
    width: 28,
    minWidth: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 305,
    top: 55
  },
  View_384_74: {
    width: 29,
    minWidth: 29,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 220,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_384_75: {
    width: 29,
    height: 18.561655044555664,
    top: 5.2191162109375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_384_76: {
    width: 29,
    height: 18.561655044555664,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_384_79: {
    width: 28,
    height: 28,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129
  },
  View_384_81: {
    width: 18.760000228881836,
    height: 20.002243041992188,
    top: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47
  },
  View_2: { height: 812 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)