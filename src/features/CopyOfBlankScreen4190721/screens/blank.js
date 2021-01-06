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
      <View style={styles.View_481_16}>
        <Text style={styles.Text_481_16}>Hello, Amy</Text>
      </View>
      <View style={styles.View_481_17}>
        <View style={styles.View_481_18}>
          <Text style={styles.Text_481_18}>Emotional Intelligence</Text>
        </View>
      </View>
      <View style={styles.View_481_19}>
        <View style={styles.View_481_20}>
          <Text style={styles.Text_481_20}>Mental Health</Text>
        </View>
      </View>
      <View style={styles.View_492_791}>
        <View style={styles.View_492_792}>
          <Text style={styles.Text_492_792}>Physical Health</Text>
        </View>
      </View>
      <View style={styles.View_481_21}>
        <Text style={styles.Text_481_21}>
          We’ve hand-picked content just for you
        </Text>
      </View>
      <View style={styles.View_481_22}>
        <View style={styles.View_481_23}>
          <View style={styles.View_481_24} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4fb7/823b/d3f1c9a061e77110787194a64bab9d40"
          }}
          style={styles.ImageBackground_481_26}
        />
        <View style={styles.View_481_27}>
          <Text style={styles.Text_481_27}>W.A.I.T Why Am I Talking</Text>
        </View>
        <View style={styles.View_481_28}>
          <View style={styles.View_481_29} />
          <View style={styles.View_481_30}>
            <Text style={styles.Text_481_30}>2 min read</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_481_31}>
        <View style={styles.View_481_33}>
          <View style={styles.View_481_32} />
          <View style={styles.View_481_34}>
            <Text style={styles.Text_481_34}>
              Why “Get over it” is bad advice for your teen
            </Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d47a/5912/35a5648b56b2f7dda42d18dcc395bac4"
            }}
            style={styles.ImageBackground_481_35}
          />
        </View>
        <View style={styles.View_481_47}>
          <View style={styles.View_481_48} />
          <View style={styles.View_481_49}>
            <Text style={styles.Text_481_49}>4 min read</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_481_36}>
        <View style={styles.View_481_37} />
        <View style={styles.View_481_38}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/fa19/94e5/d474b5b528109fc5f991ba0833e0cdbd"
            }}
            style={styles.ImageBackground_481_39}
          />
          <View style={styles.View_481_40}>
            <Text style={styles.Text_481_40}>
              How To Listen To Your Teen’s Vents
            </Text>
          </View>
        </View>
        <View style={styles.View_481_44}>
          <View style={styles.View_481_45} />
          <View style={styles.View_481_46}>
            <Text style={styles.Text_481_46}>2 min read</Text>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cd1/e7a0/0449b90f4470f5aff45ca8083b34f2f6"
        }}
        style={styles.ImageBackground_481_50}
      />
      <View style={styles.View_481_55}>
        <View style={styles.View_481_56}>
          <View style={styles.View_481_57} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfc0/4888/def50af13e7efa10995db2d102c55b41"
          }}
          style={styles.ImageBackground_481_58}
        />
        <View style={styles.View_481_59}>
          <Text style={styles.Text_481_59}>Isolation-induced depression </Text>
        </View>
      </View>
      <View style={styles.View_481_61}>
        <View style={styles.View_481_62}>
          <View style={styles.View_481_63} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e5df/7f18/f3ae078f0a600b069b7761f36194d5bd"
          }}
          style={styles.ImageBackground_481_64}
        />
        <View style={styles.View_481_65}>
          <Text style={styles.Text_481_65}>
            Talking To Your Teen About Stress
          </Text>
        </View>
      </View>
      <View style={styles.View_492_785}>
        <View style={styles.View_492_786}>
          <View style={styles.View_492_787} />
        </View>
        <View style={styles.View_492_789}>
          <Text style={styles.Text_492_789}>
            Is Your Teen Getting Enough Exercise During Quarentine?
          </Text>
        </View>
      </View>
      <View style={styles.View_481_67}>
        <View style={styles.View_481_68}>
          <View style={styles.View_481_69} />
        </View>
        <View style={styles.View_481_71}>
          <Text style={styles.Text_481_71}>View Cherish Coaches</Text>
        </View>
      </View>
      <View style={styles.View_481_95}>
        <View style={styles.View_481_96} />
        <View style={styles.View_481_97}>
          <Text style={styles.Text_481_97}>3 min read</Text>
        </View>
      </View>
      <View style={styles.View_481_98}>
        <View style={styles.View_481_99} />
        <View style={styles.View_481_100}>
          <Text style={styles.Text_481_100}>5 min read</Text>
        </View>
      </View>
      <View style={styles.View_492_884}>
        <View style={styles.View_492_885} />
        <View style={styles.View_492_886}>
          <Text style={styles.Text_492_886}>5 min read</Text>
        </View>
      </View>
      <View style={styles.View_492_783}>
        <View style={styles.View_492_784}>
          <View style={styles.View_492_782} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e6a5/f281/a7c236c554149296a49f2d76fc71b5f5"
          }}
          style={styles.ImageBackground_492_780}
        />
      </View>
      <View style={styles.View_481_74}>
        <View style={styles.View_481_75} />
        <View style={styles.View_481_76}>
          <View style={styles.View_481_77}>
            <Text style={styles.Text_481_77}>9:41</Text>
          </View>
        </View>
        <View style={styles.View_481_78}>
          <View style={styles.View_481_79}>
            <View style={styles.View_481_80}>
              <View style={styles.View_481_81} />
              <View style={styles.View_481_84} />
            </View>
            <View style={styles.View_481_85} />
          </View>
          <View style={styles.View_481_86}>
            <View style={styles.View_481_87} />
            <View style={styles.View_481_88} />
            <View style={styles.View_481_89} />
            <View style={styles.View_481_90} />
          </View>
          <View style={styles.View_481_91} />
        </View>
      </View>
      <View style={styles.View_515_0}>
        <View style={styles.View_515_1}>
          <View style={styles.View_515_2} />
        </View>
        <View style={styles.View_515_3} />
        <View style={styles.View_515_4} />
        <View style={styles.View_515_5}>
          <View style={styles.View_515_6}>
            <View style={styles.View_515_7} />
          </View>
        </View>
        <View style={styles.View_515_10} />
        <View style={styles.View_515_12} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_481_16: {
    width: 229,
    minWidth: 229,
    height: 76,
    minHeight: 76,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 76
  },
  Text_481_16: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 50,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_17: {
    width: 254,
    minWidth: 254,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 202
  },
  View_481_18: {
    width: 254,
    minWidth: 254,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_481_18: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_19: {
    width: 153,
    minWidth: 153,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 670
  },
  View_481_20: {
    width: 153,
    minWidth: 153,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_481_20: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_492_791: {
    width: 168,
    minWidth: 168,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 998
  },
  View_492_792: {
    width: 168,
    minWidth: 168,
    height: 29,
    minHeight: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_492_792: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 24,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_21: {
    width: 304,
    minWidth: 304,
    height: 19,
    minHeight: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 160
  },
  Text_481_21: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_22: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 510
  },
  View_481_23: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_481_24: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
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
  ImageBackground_481_26: {
    width: 91,
    minWidth: 91,
    height: 79.0625,
    minHeight: 79.0625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 224,
    top: 16.171875,
    resizeMode: "cover"
  },
  View_481_27: {
    width: 189,
    minWidth: 189,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 17
  },
  Text_481_27: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_28: {
    width: 69.0000228881836,
    minWidth: 69.0000228881836,
    height: 22.289325714111328,
    minHeight: 22.289325714111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 66
  },
  View_481_29: {
    width: 69,
    minWidth: 69,
    height: 22.289325714111328,
    minHeight: 22.289325714111328,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 216, 205, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_481_30: {
    width: 52,
    minWidth: 52,
    height: 11.6796875,
    minHeight: 11.6796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 4.4921875
  },
  Text_481_30: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_31: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 377
  },
  View_481_33: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_481_32: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
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
  View_481_34: {
    width: 165,
    minWidth: 165,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 17
  },
  Text_481_34: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_481_35: {
    width: 92,
    minWidth: 92,
    height: 78,
    minHeight: 78,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 223,
    top: 16,
    resizeMode: "cover"
  },
  View_481_47: {
    width: 69.0000228881836,
    minWidth: 69.0000228881836,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 66
  },
  View_481_48: {
    width: 69,
    minWidth: 69,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 216, 205, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_481_49: {
    width: 52,
    minWidth: 52,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 5
  },
  Text_481_49: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_36: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 244
  },
  View_481_37: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
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
  View_481_38: {
    width: 301,
    minWidth: 301,
    height: 91,
    minHeight: 91,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 13
  },
  ImageBackground_481_39: {
    width: 90,
    minWidth: 90,
    height: 91,
    minHeight: 91,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 0,
    resizeMode: "cover"
  },
  View_481_40: {
    width: 148,
    minWidth: 148,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 4
  },
  Text_481_40: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_44: {
    width: 69.0000228881836,
    minWidth: 69.0000228881836,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 66
  },
  View_481_45: {
    width: 69,
    minWidth: 69,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 216, 205, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_481_46: {
    width: 52,
    minWidth: 52,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 5
  },
  Text_481_46: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_481_50: {
    width: 90,
    minWidth: 90,
    height: 96,
    minHeight: 96,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 278,
    top: 67,
    resizeMode: "cover"
  },
  View_481_55: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 712
  },
  View_481_56: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_481_57: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
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
  ImageBackground_481_58: {
    width: 98,
    minWidth: 98,
    height: 97,
    minHeight: 97,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 217,
    top: 8,
    resizeMode: "cover"
  },
  View_481_59: {
    width: 164,
    minWidth: 164,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 17
  },
  Text_481_59: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_61: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 24,
    top: 844
  },
  View_481_62: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_481_63: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
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
  ImageBackground_481_64: {
    width: 98,
    minWidth: 98,
    height: 88,
    minHeight: 88,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 219,
    top: 14,
    resizeMode: "cover"
  },
  View_481_65: {
    width: 170,
    minWidth: 170,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 17
  },
  Text_481_65: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_492_785: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 1044
  },
  View_492_786: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_492_787: {
    width: 326,
    minWidth: 326,
    height: 115,
    minHeight: 115,
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
  View_492_789: {
    width: 193,
    minWidth: 193,
    height: 32,
    minHeight: 32,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14,
    top: 17
  },
  Text_492_789: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 15,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_67: {
    width: 325,
    minWidth: 325,
    height: 116.2130126953125,
    minHeight: 116.2130126953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 1728.7869873046875
  },
  View_481_68: {
    width: 325,
    minWidth: 325,
    height: 51,
    minHeight: 51,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 65.2130126953125,
    backgroundColor: "rgba(255, 190, 95, 1)"
  },
  View_481_69: {
    width: 325,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_481_71: {
    width: 324,
    height: 20.0799560546875,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  Text_481_71: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_95: {
    width: 69,
    minWidth: 69,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 778
  },
  View_481_96: {
    width: 69,
    minWidth: 69,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 216, 205, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_481_97: {
    width: 52,
    minWidth: 52,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 6
  },
  Text_481_97: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_98: {
    width: 69.0000228881836,
    minWidth: 69.0000228881836,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 910
  },
  View_481_99: {
    width: 69,
    minWidth: 69,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 216, 205, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_481_100: {
    width: 52,
    minWidth: 52,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 5
  },
  Text_481_100: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_492_884: {
    width: 69.0000228881836,
    minWidth: 69.0000228881836,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 38,
    top: 1110
  },
  View_492_885: {
    width: 69,
    minWidth: 69,
    height: 24.808988571166992,
    minHeight: 24.808988571166992,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(244, 216, 205, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_492_886: {
    width: 52,
    minWidth: 52,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    top: 5
  },
  Text_492_886: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_492_783: {
    width: 95.3559341430664,
    minWidth: 95.3559341430664,
    height: 97,
    minHeight: 97,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 246,
    top: 1053
  },
  View_492_784: {
    width: 80.17241668701172,
    minWidth: 80.17241668701172,
    height: 80.17241668701172,
    minHeight: 80.17241668701172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.41357421875,
    top: 10.42242431640625
  },
  View_492_782: {
    width: 80.17241668701172,
    minWidth: 80.17241668701172,
    height: 80.17241668701172,
    minHeight: 80.17241668701172,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(196, 196, 196, 1)"
  },
  ImageBackground_492_780: {
    width: 95.3559341430664,
    minWidth: 95.3559341430664,
    height: 97,
    minHeight: 97,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    resizeMode: "cover"
  },
  View_481_74: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_481_75: {
    width: 375,
    minWidth: 375,
    height: 44,
    minHeight: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_481_76: {
    width: 54,
    height: 20,
    top: 14,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 19.89404296875
  },
  View_481_77: {
    width: 54,
    minWidth: 54,
    height: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  Text_481_77: {
    color: "rgba(21, 21, 34, 1)",
    fontSize: 15,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_481_78: {
    width: 67,
    minWidth: 67,
    height: 11.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.5,
    top: 17.1600341796875
  },
  View_481_79: {
    width: 24.5,
    minWidth: 24.5,
    height: 11.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.5,
    top: 0
  },
  View_481_80: {
    width: 24.5,
    height: 11.5,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_481_81: {
    width: 22,
    minWidth: 22,
    height: 11.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_481_84: {
    width: 1.5,
    minWidth: 1.5,
    height: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 3.6900634765625
  },
  View_481_85: {
    width: 18,
    minWidth: 18,
    height: 7.666666507720947,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 1.9166259765625,
    backgroundColor: "rgba(21, 21, 34, 1)"
  },
  View_481_86: {
    width: 17.099990844726562,
    height: 10.700004577636719,
    top: 0.4400634765625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_481_87: {
    width: 3,
    minWidth: 3,
    height: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 6.699951171875,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_481_88: {
    width: 3,
    minWidth: 3,
    height: 6,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.7998046875,
    top: 4.699951171875,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_481_89: {
    width: 3,
    minWidth: 3,
    height: 8.300003051757812,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.39990234375,
    top: 2.4000244140625,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_481_90: {
    width: 3,
    minWidth: 3,
    height: 10.699999809265137,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.10009765625,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_481_91: {
    width: 15.399999618530273,
    minWidth: 15.399999618530273,
    height: 11.057209968566895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 22.10009765625,
    top: 0.239990234375
  },
  View_515_0: {
    width: 375,
    minWidth: 375,
    height: 58,
    minHeight: 58,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5,
    top: 757
  },
  View_515_1: {
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
  View_515_2: {
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
  View_515_3: {
    width: 15.569999694824219,
    height: 17.516250610351562,
    minHeight: 17.516250610351562,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 311,
    top: 18
  },
  View_515_4: {
    width: 28,
    minWidth: 28,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    top: 55
  },
  View_515_5: {
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
  View_515_6: {
    width: 29,
    height: 18.561655044555664,
    top: 5.21917724609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_515_7: {
    width: 29,
    height: 18.561655044555664,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_515_10: {
    width: 28,
    height: 28,
    top: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 129
  },
  View_515_12: {
    width: 18.760000228881836,
    height: 20.002243041992188,
    minHeight: 20.002243041992188,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47,
    top: 15
  },
  View_2: { height: 1244 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)