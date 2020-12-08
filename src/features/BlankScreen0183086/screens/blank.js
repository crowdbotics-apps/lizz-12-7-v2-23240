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
  StyleSheet,
  ScrollView
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"

export default class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return {
      headerLeft: <SlideMenuIcon navigationProps={navigation} />
    }
  }

  state = {}

  render = () => (
    <View>
      <Text style={styles.Text_3}>This is page 0</Text>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("BlankScreen1183087")}
      >
        <Text style={styles.Text_5}>Press this text to go to page 1</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  Text_3: {
    fontSize: 26,
    color: "#1ce718",
    fontFamily: "CrimsonText-BoldItalic",
    lineHeight: 26
  },
  Text_5: { alignSelf: "center" }
})
