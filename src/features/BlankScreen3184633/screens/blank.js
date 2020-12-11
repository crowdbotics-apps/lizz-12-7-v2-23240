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
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_83_3} />
      <View style={styles.View_83_213}>
        <View style={styles.View_83_12} />
        <View style={styles.View_83_13} />
        <View style={styles.View_83_14} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f670/0567/58e315badf32c0883199bde7428c2560"
          }}
          style={styles.ImageBackground_83_15}
        />
      </View>
      <View style={styles.View_88_41}>
        <View style={styles.View_83_685}>
          <View style={styles.View_83_686} />
          <View style={styles.View_83_687} />
        </View>
        <View style={styles.View_83_646}>
          <Text style={styles.Text_83_646}>Chats</Text>
        </View>
      </View>
      <View style={styles.View_88_40}>
        <View style={styles.View_83_40} />
        <View style={styles.View_83_642} />
        <View style={styles.View_83_637}>
          <Text style={styles.Text_83_637}>Search in all chats</Text>
        </View>
      </View>
      <View style={styles.View_90_29}>
        <ImageBackground style={styles.ImageBackground_90_30} />
        <View style={styles.View_90_31}>
          <View style={styles.View_90_32}>
            <Text style={styles.Text_90_32}>Milli Tate</Text>
          </View>
          <View style={styles.View_90_33}>
            <Text style={styles.Text_90_33}>Type of user</Text>
          </View>
        </View>
        <View style={styles.View_90_62}>
          <View style={styles.View_90_63} />
          <View style={styles.View_90_64}>
            <Text style={styles.Text_90_64}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_90_34}>
        <View style={styles.View_90_35} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db3/a91f/5b057644fd6c58af2afbe0066c282f80"
          }}
          style={styles.ImageBackground_90_61}
        />
        <View style={styles.View_90_36}>
          <View style={styles.View_90_37}>
            <Text style={styles.Text_90_37}>Michael Anderson</Text>
          </View>
          <View style={styles.View_90_38}>
            <Text style={styles.Text_90_38}>Type of user</Text>
          </View>
        </View>
        <View style={styles.View_90_68}>
          <View style={styles.View_90_69} />
          <View style={styles.View_90_70}>
            <Text style={styles.Text_90_70}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_90_39}>
        <View style={styles.View_90_40} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5a50/11b5/37f6681d058fb749db49818cfa629a3a"
          }}
          style={styles.ImageBackground_90_41}
        />
        <View style={styles.View_90_42}>
          <View style={styles.View_90_43}>
            <Text style={styles.Text_90_43}>Jackie Michaels</Text>
          </View>
          <View style={styles.View_90_44}>
            <Text style={styles.Text_90_44}>Type of user</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_90_45}>
        <ImageBackground style={styles.ImageBackground_90_46} />
        <View style={styles.View_90_47}>
          <View style={styles.View_90_48}>
            <Text style={styles.Text_90_48}>Donnie Anderson</Text>
          </View>
          <View style={styles.View_90_49}>
            <Text style={styles.Text_90_49}>Type of user</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_90_50}>
        <ImageBackground style={styles.ImageBackground_90_51} />
        <View style={styles.View_90_52}>
          <View style={styles.View_90_53}>
            <Text style={styles.Text_90_53}>Michael Jobs</Text>
          </View>
          <View style={styles.View_90_54}>
            <Text style={styles.Text_90_54}>Type of user</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_90_55}>
        <View style={styles.View_90_56} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5db3/a91f/5b057644fd6c58af2afbe0066c282f80"
          }}
          style={styles.ImageBackground_90_57}
        />
        <View style={styles.View_90_58}>
          <View style={styles.View_90_59}>
            <Text style={styles.Text_90_59}>Callan Brandt</Text>
          </View>
          <View style={styles.View_90_60}>
            <Text style={styles.Text_90_60}>Type of user</Text>
          </View>
        </View>
        <View style={styles.View_90_65}>
          <View style={styles.View_90_66} />
          <View style={styles.View_90_67}>
            <Text style={styles.Text_90_67}>2</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_83_3: {
    width: 414,
    minWidth: 414,
    height: 896,
    minHeight: 896,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(97, 97, 118, 1)"
  },
  View_83_213: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 806
  },
  View_83_12: {
    width: 414,
    minWidth: 414,
    height: 90,
    minHeight: 90,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(85, 85, 108, 1)"
  },
  View_83_13: {
    width: 28,
    height: 28,
    top: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336
  },
  View_83_14: {
    width: 29,
    height: 28,
    top: 31,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 50
  },
  ImageBackground_83_15: {
    width: 51,
    minWidth: 51,
    height: 28,
    minHeight: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 182,
    top: 31
  },
  View_88_41: {
    width: 120,
    minWidth: 120,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 20
  },
  View_83_685: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_83_686: {
    width: 50,
    minWidth: 50,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(238, 77, 131, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_83_687: {
    width: 16,
    height: 24,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16
  },
  View_83_646: {
    width: 49,
    minWidth: 49,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 71,
    top: 7
  },
  Text_83_646: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 20,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_88_40: {
    width: 374,
    minWidth: 374,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 100
  },
  View_83_40: {
    width: 374,
    minWidth: 374,
    height: 50,
    minHeight: 50,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_83_642: {
    width: 18,
    height: 18.000961303710938,
    top: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337
  },
  View_83_637: {
    width: 319,
    minWidth: 319,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 15
  },
  Text_83_637: {
    color: "rgba(97, 97, 118, 1)",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_29: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 190
  },
  ImageBackground_90_30: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_90_31: {
    width: 251,
    minWidth: 251,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 13
  },
  View_90_32: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_90_32: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_33: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 26
  },
  Text_90_33: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_62: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352,
    top: 25
  },
  View_90_63: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_90_64: {
    width: 8,
    minWidth: 8,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 3
  },
  Text_90_64: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_34: {
    width: 373,
    minWidth: 373,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 390
  },
  View_90_35: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_90_61: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_90_36: {
    width: 251,
    minWidth: 251,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 13
  },
  View_90_37: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_90_37: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_38: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 26
  },
  Text_90_38: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_68: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 351,
    top: 25
  },
  View_90_69: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_90_70: {
    width: 8,
    minWidth: 8,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 3
  },
  Text_90_70: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_39: {
    width: 351,
    minWidth: 351,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 490
  },
  View_90_40: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_90_41: {
    width: 62,
    minWidth: 62,
    height: 62,
    minHeight: 62,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 4,
    resizeMode: "cover"
  },
  View_90_42: {
    width: 251,
    minWidth: 251,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 13
  },
  View_90_43: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_90_43: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_44: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 26
  },
  Text_90_44: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_45: {
    width: 351,
    minWidth: 351,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 590
  },
  ImageBackground_90_46: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_90_47: {
    width: 251,
    minWidth: 251,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 13
  },
  View_90_48: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_90_48: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_49: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 26
  },
  Text_90_49: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_50: {
    width: 351,
    minWidth: 351,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 690
  },
  ImageBackground_90_51: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_90_52: {
    width: 251,
    minWidth: 251,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 13
  },
  View_90_53: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_90_53: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_54: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 26
  },
  Text_90_54: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_55: {
    width: 374,
    minWidth: 374,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 290
  },
  View_90_56: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  ImageBackground_90_57: {
    width: 70,
    minWidth: 70,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_90_58: {
    width: 251,
    minWidth: 251,
    height: 46,
    minHeight: 46,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 100,
    top: 13
  },
  View_90_59: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_90_59: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_60: {
    width: 251,
    minWidth: 251,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 26
  },
  Text_90_60: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 18,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_90_65: {
    width: 22,
    minWidth: 22,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 352,
    top: 25
  },
  View_90_66: {
    width: 22,
    height: 22,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_90_67: {
    width: 8,
    minWidth: 8,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7,
    top: 3
  },
  Text_90_67: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_2: { height: 896 }
})
