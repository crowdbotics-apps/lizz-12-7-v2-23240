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
      <View style={styles.View_3}>
        <View style={styles.View_5}>
          <Text style={styles.Text_11}>This is page 1</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("BlankScreen0183086")}
          >
            <Image
              source={{
                uri:
                  "https://d3tklmlrp1a8c2.cloudfront.net/media/project_component_resources/plant_7uXgnOV.jpg"
              }}
            />
          </TouchableOpacity>
          <Text>Press image above to go to page 0</Text>
          <Text>Press button below to show an alert</Text>
          <Button title="Press me!" onPress={() => alert("Pressed!")} />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  View_1: {},
  View_3: {
    width: "100%",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 20,
    paddingBottom: 20,
    backgroundColor: "#8bcdee"
  },
  View_5: { width: "0100%" },
  Text_11: { alignSelf: "center" },
  Image_9: {},
  Text_13: {},
  Text_14: {},
  Button_17: {}
})
