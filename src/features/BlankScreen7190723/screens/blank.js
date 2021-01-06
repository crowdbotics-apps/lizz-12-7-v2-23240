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
      <View style={styles.View_40_85}>
        <Text style={styles.Text_40_85}>My Character</Text>
      </View>
      <View style={styles.View_40_86}>
        <Text style={styles.Text_40_86}>My Jam</Text>
      </View>
      <View style={styles.View_97_4696}>
        <Text style={styles.Text_97_4696}>Notifications</Text>
      </View>
      <View style={styles.View_97_4697}>
        <View style={styles.View_97_4698}>
          <View style={styles.View_97_4699} />
          <View style={styles.View_97_4700} />
        </View>
        <View style={styles.View_97_4701}>
          <Text style={styles.Text_97_4701}>View all</Text>
        </View>
      </View>
      <View style={styles.View_110_0}>
        <View style={styles.View_110_1}>
          <View style={styles.View_110_2} />
          <View style={styles.View_110_3} />
        </View>
        <View style={styles.View_110_4}>
          <Text style={styles.Text_110_4}>View all</Text>
        </View>
      </View>
      <View style={styles.View_97_4702}>
        <View style={styles.View_97_4703} />
        <View style={styles.View_97_4704}>
          <Text style={styles.Text_97_4704}>
            This is amazing and I love the effort{" "}
          </Text>
        </View>
        <View style={styles.View_97_4705}>
          <View style={styles.View_97_4706}>
            <View style={styles.View_97_4707}>
              <View style={styles.View_97_4708} />
              <View style={styles.View_97_4709} />
              <View style={styles.View_97_4710} />
            </View>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f4d/aa26/78202fa27dc08654849431a3c07ed9bd"
          }}
          style={styles.ImageBackground_97_4775}
        />
        <View style={styles.View_97_4711}>
          <Text style={styles.Text_97_4711}>2h ago</Text>
        </View>
        <View style={styles.View_97_4712}>
          <Text style={styles.Text_97_4712}>Mentor Tom</Text>
        </View>
        <ImageBackground style={styles.ImageBackground_97_4713} />
        <View style={styles.View_97_4714}>
          <View style={styles.View_97_4715} />
          <View style={styles.View_97_4716}>
            <Text style={styles.Text_97_4716}>Thank you!</Text>
          </View>
        </View>
        <View style={styles.View_97_4717}>
          <View style={styles.View_97_4718} />
          <View style={styles.View_97_4719}>
            <Text style={styles.Text_97_4719}>I will keep it up</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_98_2146}>
        <Text style={styles.Text_98_2146}>Send a Thank you!</Text>
      </View>
      <View style={styles.View_97_4720}>
        <View style={styles.View_97_4721} />
        <View style={styles.View_97_4722}>
          <Text style={styles.Text_97_4722}>Send a Welcome or Hello!</Text>
        </View>
        <View style={styles.View_97_4729}>
          <Text style={styles.Text_97_4729}>2h ago</Text>
        </View>
        <View style={styles.View_97_4730}>
          <Text style={styles.Text_97_4730}>Silvia Just Joined</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ce2a/d62e/c408808f6c417e9c483ffe1ac0a9171a"
          }}
          style={styles.ImageBackground_97_4731}
        />
        <View style={styles.View_97_4732}>
          <View style={styles.View_97_4733} />
          <View style={styles.View_97_4734}>
            <Text style={styles.Text_97_4734}>Hi!</Text>
          </View>
        </View>
        <View style={styles.View_97_4735}>
          <View style={styles.View_97_4736} />
          <View style={styles.View_97_4737}>
            <Text style={styles.Text_97_4737}>Nice to see you here</Text>
          </View>
        </View>
        <View style={styles.View_98_2143}>
          <View style={styles.View_98_2144} />
          <View style={styles.View_98_2145}>
            <Text style={styles.Text_98_2145}>Welcome!</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_39_218} />
      <View style={styles.View_39_214}>
        <Text style={styles.Text_39_214}>Hi, Alejandro!</Text>
      </View>
      <View style={styles.View_40_38}>
        <Text style={styles.Text_40_38}>Suggested SPARCs</Text>
      </View>
      <View style={styles.View_40_37}>
        <Text style={styles.Text_40_37}>My Animal</Text>
      </View>
      <View style={styles.View_40_76}>
        <Text style={styles.Text_40_76}>My Verse</Text>
      </View>
      <View style={styles.View_41_243}>
        <View style={styles.View_39_504}>
          <View style={styles.View_39_505} />
          <View style={styles.View_39_508} />
        </View>
        <View style={styles.View_39_511} />
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6142/5c3f/27dc4f0136e6ddf901d92f7139d88ef2"
          }}
          style={styles.ImageBackground_39_512}
        />
        <View style={styles.View_39_514}>
          <View style={styles.View_39_515}>
            <View style={styles.View_39_516} />
            <View style={styles.View_39_517} />
            <View style={styles.View_39_518} />
            <View style={styles.View_39_519} />
            <View style={styles.View_39_522} />
          </View>
        </View>
        <View style={styles.View_39_525}>
          <Text style={styles.Text_39_525}>302</Text>
        </View>
        <View style={styles.View_39_526} />
        <View style={styles.View_39_527} />
      </View>
      <View style={styles.View_40_106} />
      <View style={styles.View_41_246}>
        <View style={styles.View_40_25}>
          <View style={styles.View_40_26} />
          <View style={styles.View_40_27} />
        </View>
        <View style={styles.View_40_36}>
          <Text style={styles.Text_40_36}>Know Yourself</Text>
        </View>
        <View style={styles.View_40_32}>
          <View style={styles.View_40_33}>
            <View style={styles.View_40_34} />
            <View style={styles.View_40_35}>
              <Text style={styles.Text_40_35}>3 pts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_41_257}>
        <View style={styles.View_I41_257_40_25}>
          <View style={styles.View_I41_257_40_26} />
          <View style={styles.View_I41_257_40_27} />
        </View>
        <View style={styles.View_I41_257_40_36}>
          <Text style={styles.Text_I41_257_40_36}>Know Yourself</Text>
        </View>
        <View style={styles.View_I41_257_40_32}>
          <View style={styles.View_I41_257_40_33}>
            <View style={styles.View_I41_257_40_34} />
            <View style={styles.View_I41_257_40_35}>
              <Text style={styles.Text_I41_257_40_35}>25 pts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_41_248}>
        <View style={styles.View_I41_248_40_25}>
          <View style={styles.View_I41_248_40_26} />
          <View style={styles.View_I41_248_40_27} />
        </View>
        <View style={styles.View_I41_248_40_36}>
          <Text style={styles.Text_I41_248_40_36}>Know Yourself</Text>
        </View>
        <View style={styles.View_I41_248_40_32}>
          <View style={styles.View_I41_248_40_33}>
            <View style={styles.View_I41_248_40_34} />
            <View style={styles.View_I41_248_40_35}>
              <Text style={styles.Text_I41_248_40_35}>5 pts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_41_258}>
        <View style={styles.View_I41_258_40_25}>
          <View style={styles.View_I41_258_40_26} />
          <View style={styles.View_I41_258_40_27} />
        </View>
        <View style={styles.View_I41_258_40_36}>
          <Text style={styles.Text_I41_258_40_36}>Know Yourself</Text>
        </View>
        <View style={styles.View_I41_258_40_32}>
          <View style={styles.View_I41_258_40_33}>
            <View style={styles.View_I41_258_40_34} />
            <View style={styles.View_I41_258_40_35}>
              <Text style={styles.Text_I41_258_40_35}>30 pts</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_41_247} />
      <View style={styles.View_41_245} />
      <View style={styles.View_40_163} />
      <View style={styles.View_40_125}>
        <View style={styles.View_40_126} />
        <View style={styles.View_40_127} />
        <View style={styles.View_40_128} />
        <View style={styles.View_40_129} />
        <View style={styles.View_40_130} />
        <View style={styles.View_40_133} />
        <View style={styles.View_40_134} />
        <View style={styles.View_40_137} />
        <View style={styles.View_40_138} />
        <View style={styles.View_40_139} />
        <View style={styles.View_40_140} />
        <View style={styles.View_40_141} />
        <View style={styles.View_40_142} />
        <View style={styles.View_40_143} />
        <View style={styles.View_40_144} />
        <View style={styles.View_40_145} />
        <View style={styles.View_40_146} />
        <View style={styles.View_40_147} />
        <View style={styles.View_40_148} />
        <View style={styles.View_40_149} />
        <View style={styles.View_40_150} />
        <View style={styles.View_40_151} />
        <View style={styles.View_40_152} />
        <View style={styles.View_40_153} />
        <View style={styles.View_40_157} />
        <View style={styles.View_40_158} />
        <View style={styles.View_40_159} />
      </View>
      <View style={styles.View_41_228}>
        <View style={styles.View_39_567}>
          <View style={styles.View_39_568} />
          <View style={styles.View_39_570} />
          <View style={styles.View_72_589} />
          <View style={styles.View_72_632} />
          <View style={styles.View_72_689} />
          <View style={styles.View_39_569}>
            <View style={styles.View_39_615} />
            <View style={styles.View_39_627}>
              <Text style={styles.Text_39_627}>Leader Board</Text>
            </View>
            <View style={styles.View_39_632}>
              <View style={styles.View_39_633}>
                <View style={styles.View_39_634} />
                <View style={styles.View_39_635} />
                <View style={styles.View_39_636} />
                <View style={styles.View_39_637} />
                <View style={styles.View_39_640} />
              </View>
            </View>
          </View>
          <View style={styles.View_39_674}>
            <View style={styles.View_39_675} />
            <View style={styles.View_39_676}>
              <Text style={styles.Text_39_676}>Messages</Text>
            </View>
            <View style={styles.View_40_39}>
              <View style={styles.View_40_40} />
              <View style={styles.View_40_41} />
              <View style={styles.View_40_44} />
            </View>
          </View>
          <View style={styles.View_39_688}>
            <View style={styles.View_39_689} />
            <View style={styles.View_39_690}>
              <Text style={styles.Text_39_690}>SPARCs</Text>
            </View>
            <View style={styles.View_40_47}>
              <View style={styles.View_40_48}>
                <View style={styles.View_40_49} />
                <View style={styles.View_40_50}>
                  <View style={styles.View_40_51} />
                  <View style={styles.View_40_54} />
                  <View style={styles.View_40_57} />
                  <View style={styles.View_40_60} />
                  <View style={styles.View_40_63} />
                  <View style={styles.View_40_64} />
                  <View style={styles.View_40_65} />
                  <View style={styles.View_40_66} />
                  <View style={styles.View_40_67} />
                  <View style={styles.View_40_68} />
                  <View style={styles.View_40_69} />
                  <View style={styles.View_40_70} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_39_702}>
            <View style={styles.View_39_703} />
            <View style={styles.View_39_704}>
              <Text style={styles.Text_39_704}>Home</Text>
            </View>
          </View>
          <View style={styles.View_39_628}>
            <View style={styles.View_39_629}>
              <View style={styles.View_39_630} />
              <View style={styles.View_39_631} />
            </View>
          </View>
          <View style={styles.View_41_227}>
            <View style={styles.View_I41_227_39_751}>
              <View style={styles.View_I41_227_39_752}>
                <View style={styles.View_I41_227_39_753} />
                <View style={styles.View_I41_227_39_754}>
                  <View style={styles.View_I41_227_39_755} />
                  <View style={styles.View_I41_227_39_756} />
                  <View style={styles.View_I41_227_39_757} />
                  <View style={styles.View_I41_227_39_758} />
                  <View style={styles.View_I41_227_39_761} />
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7047/b8fa/5adb3d0c5b223572c985e954ca7de09b"
        }}
        style={styles.ImageBackground_98_2142}
      />
      <View style={styles.View_242_5006}>
        <View style={styles.View_39_219} />
        <View style={styles.View_39_529} />
        <View style={styles.View_39_539} />
        <View style={styles.View_39_540}>
          <Text style={styles.Text_39_540}>22</Text>
        </View>
        <View style={styles.View_39_541}>
          <Text style={styles.Text_39_541}>22/60</Text>
        </View>
        <View style={styles.View_39_213}>
          <Text style={styles.Text_39_213}> $5 Chick-fil-A gift Card</Text>
        </View>
        <View style={styles.View_39_548} />
        <View style={styles.View_97_4738} />
        <View style={styles.View_242_5208} />
        <View style={styles.View_242_5209}>
          <Text style={styles.Text_242_5209}>
            Points for a College Visit Trip
          </Text>
        </View>
        <View style={styles.View_242_4994}>
          <View style={styles.View_242_4995}>
            <View style={styles.View_242_4996} />
            <View style={styles.View_242_4997} />
            <View style={styles.View_242_4998} />
          </View>
          <View style={styles.View_242_5003} />
        </View>
        <View style={styles.View_242_5004}>
          <Text style={styles.Text_242_5004}>302</Text>
        </View>
        <View style={styles.View_97_4755}>
          <Text style={styles.Text_97_4755}>302/350</Text>
        </View>
        <View style={styles.View_97_4756} />
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_40_85: {
    width: 99,
    minWidth: 99,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 929
  },
  Text_40_85: {
    color: "rgba(15, 37, 61, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_86: {
    width: 57,
    minWidth: 57,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 929
  },
  Text_40_86: {
    color: "rgba(15, 37, 61, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4696: {
    width: 195,
    height: 20,
    top: 1015,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43
  },
  Text_97_4696: {
    color: "rgba(15, 37, 61, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4697: {
    width: 87,
    height: 40,
    top: 1005,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282
  },
  View_97_4698: {
    width: 87,
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_97_4699: {
    width: 87,
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(36, 69, 105, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_97_4700: {
    width: 85.6717529296875,
    height: 3.200000047683716,
    top: 36.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.66412353515625
  },
  View_97_4701: {
    width: 56,
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14
  },
  Text_97_4701: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_110_0: {
    width: 87,
    height: 40,
    top: 516,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 282
  },
  View_110_1: {
    width: 87,
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_110_2: {
    width: 87,
    height: 40,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(36, 69, 105, 1)",
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_110_3: {
    width: 85.6717529296875,
    height: 3.200000047683716,
    top: 36.79998779296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.66412353515625
  },
  View_110_4: {
    width: 56,
    height: 18,
    top: 11,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14
  },
  Text_110_4: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4702: {
    width: 331,
    minWidth: 331,
    height: 158,
    minHeight: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 1057
  },
  View_97_4703: {
    width: 331,
    height: 158,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_97_4704: {
    flexGrow: 1,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 50
  },
  Text_97_4704: {
    color: "rgba(102, 103, 115, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4705: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 72,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_97_4706: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_97_4707: {
    width: 17,
    minWidth: 17,
    height: 17,
    minHeight: 17,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_97_4708: {
    width: 17,
    height: 17,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_97_4709: {
    width: 14.166666030883789,
    height: 12.454716682434082,
    top: 2.125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.41668701171875
  },
  View_97_4710: {
    width: 14.166666030883789,
    height: 12.454716682434082,
    top: 2.125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1.41668701171875
  },
  ImageBackground_97_4775: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 101,
    top: 72,
    resizeMode: "cover"
  },
  View_97_4711: {
    width: 191,
    minWidth: 191,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 22
  },
  Text_97_4711: {
    color: "rgba(204, 204, 208, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4712: {
    width: 191,
    minWidth: 191,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 22
  },
  Text_97_4712: {
    color: "rgba(32, 32, 39, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_97_4713: {
    flexGrow: 1,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 21
  },
  View_97_4714: {
    width: 78,
    minWidth: 78,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85,
    top: 116,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_97_4715: {
    width: 78,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(254, 194, 75, 1)",
    borderColor: "rgba(98, 96, 96, 1)",
    borderWidth: "1"
  },
  View_97_4716: {
    width: 78,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.90911865234375
  },
  Text_97_4716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4717: {
    width: 78,
    minWidth: 78,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 167,
    top: 116,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_97_4718: {
    width: 100,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)",
    borderColor: "rgba(98, 96, 96, 1)",
    borderWidth: "1"
  },
  View_97_4719: {
    width: 97,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 3
  },
  Text_97_4719: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_98_2146: {
    flexGrow: 1,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 127,
    top: 1153
  },
  Text_98_2146: {
    color: "rgba(102, 103, 115, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4720: {
    width: 331,
    minWidth: 331,
    height: 158,
    minHeight: 158,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42,
    top: 1225
  },
  View_97_4721: {
    width: 331,
    height: 158,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_97_4722: {
    flexGrow: 1,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 55
  },
  Text_97_4722: {
    color: "rgba(102, 103, 115, 1)",
    fontSize: 10,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4729: {
    width: 191,
    minWidth: 191,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 96,
    top: 22
  },
  Text_97_4729: {
    color: "rgba(204, 204, 208, 1)",
    fontSize: 12,
    fontWeight: "400",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4730: {
    width: 191,
    minWidth: 191,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 22
  },
  Text_97_4730: {
    color: "rgba(32, 32, 39, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  ImageBackground_97_4731: {
    flexGrow: 1,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 21,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_97_4732: {
    width: 50,
    minWidth: 50,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 79,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_97_4733: {
    width: 50,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(254, 194, 75, 1)",
    borderColor: "rgba(98, 96, 96, 1)",
    borderWidth: "1"
  },
  View_97_4734: {
    width: 50,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.90911865234375
  },
  Text_97_4734: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4735: {
    width: 148,
    minWidth: 148,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 144,
    top: 79,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_97_4736: {
    width: 148,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)",
    borderColor: "rgba(98, 96, 96, 1)",
    borderWidth: "1"
  },
  View_97_4737: {
    width: 148,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.90911865234375
  },
  Text_97_4737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_98_2143: {
    width: 108,
    minWidth: 108,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 82,
    top: 107,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_98_2144: {
    width: 108,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)",
    borderColor: "rgba(98, 96, 96, 1)",
    borderWidth: "1"
  },
  View_98_2145: {
    width: 108,
    height: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 2.90911865234375
  },
  Text_98_2145: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_39_218: {
    width: 414,
    minWidth: 414,
    height: 303,
    minHeight: 303,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_39_214: {
    width: 332,
    height: 24,
    top: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40
  },
  Text_39_214: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 24,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_38: {
    width: 195,
    height: 20,
    top: 526,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40
  },
  Text_40_38: {
    color: "rgba(15, 37, 61, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_37: {
    width: 77,
    minWidth: 77,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 735
  },
  Text_40_37: {
    color: "rgba(15, 37, 61, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_76: {
    width: 64,
    minWidth: 64,
    height: 18,
    minHeight: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 213,
    top: 735
  },
  Text_40_76: {
    color: "rgba(15, 37, 61, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_41_243: {
    width: 347,
    minWidth: 347,
    height: 44.4000244140625,
    minHeight: 44.4000244140625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 21,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_504: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_39_505: {
    width: 45.64580154418945,
    height: 44.4000244140625,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_39_508: {
    width: 4.484848976135254,
    height: 4.484848976135254,
    top: 27.7562255859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.842437744140625
  },
  View_39_511: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 61,
    top: 7
  },
  ImageBackground_39_512: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 291,
    top: 4,
    resizeMode: "cover",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_39_514: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 263,
    top: 23.20660400390625
  },
  View_39_515: {
    width: 16.126983642578125,
    height: 16.79338836669922,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_39_516: {
    width: 4.398268222808838,
    height: 6.9972453117370605,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_39_517: {
    width: 4.398268222808838,
    height: 6.9972453117370605,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.72869873046875
  },
  View_39_518: {
    width: 1.4660893678665161,
    height: 4.198347091674805,
    top: 9.796142578125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 7.3304443359375
  },
  View_39_519: {
    width: 10.262626647949219,
    height: 11.195592880249023,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.93218994140625
  },
  View_39_522: {
    width: 7.330447196960449,
    height: 4.198347091674805,
    top: 12.59503173828125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.39825439453125
  },
  View_39_525: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 262,
    top: 7
  },
  Text_39_525: {
    color: "rgba(242, 244, 255, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_39_526: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 324,
    top: 1
  },
  View_39_527: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 337,
    top: 23
  },
  View_40_106: {
    width: 4,
    minWidth: 4,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 266,
    top: 622
  },
  View_41_246: {
    width: 159.23077392578125,
    minWidth: 159.23077392578125,
    height: 150,
    minHeight: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 575,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_25: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_40_26: {
    width: 159.23077392578125,
    height: 150,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(246, 246, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_40_27: {
    width: 159,
    height: 8,
    top: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(234, 237, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_40_36: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 120
  },
  Text_40_36: {
    color: "rgba(87, 196, 193, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_32: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_40_33: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_34: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)"
  },
  View_40_35: {
    flexGrow: 1,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 2
  },
  Text_40_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_41_257: {
    width: 159.23077392578125,
    minWidth: 159.23077392578125,
    height: 150,
    minHeight: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 767,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_257_40_25: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I41_257_40_26: {
    width: 159.23077392578125,
    height: 150,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(246, 246, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I41_257_40_27: {
    width: 159,
    height: 8,
    top: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(234, 237, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I41_257_40_36: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 120
  },
  Text_I41_257_40_36: {
    color: "rgba(87, 196, 193, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I41_257_40_32: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_257_40_33: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I41_257_40_34: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)"
  },
  View_I41_257_40_35: {
    flexGrow: 1,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 2
  },
  Text_I41_257_40_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_41_248: {
    width: 159.23077392578125,
    minWidth: 159.23077392578125,
    height: 150,
    minHeight: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 575,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_248_40_25: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I41_248_40_26: {
    width: 159.23077392578125,
    height: 150,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(246, 246, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I41_248_40_27: {
    width: 159,
    height: 8,
    top: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(234, 237, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I41_248_40_36: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 120
  },
  Text_I41_248_40_36: {
    color: "rgba(87, 196, 193, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I41_248_40_32: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_248_40_33: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I41_248_40_34: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)"
  },
  View_I41_248_40_35: {
    flexGrow: 1,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 2
  },
  Text_I41_248_40_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_41_258: {
    width: 159.23077392578125,
    minWidth: 159.23077392578125,
    height: 150,
    minHeight: 150,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    top: 767,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_258_40_25: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I41_258_40_26: {
    width: 159.23077392578125,
    height: 150,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(246, 246, 250, 1)",
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I41_258_40_27: {
    width: 159,
    height: 8,
    top: 142,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(234, 237, 245, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10
  },
  View_I41_258_40_36: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11,
    top: 120
  },
  Text_I41_258_40_36: {
    color: "rgba(87, 196, 193, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I41_258_40_32: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 97,
    top: 12,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_258_40_33: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_I41_258_40_34: {
    width: 49,
    height: 16,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(87, 196, 193, 1)"
  },
  View_I41_258_40_35: {
    flexGrow: 1,
    height: 13,
    minHeight: 13,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8,
    top: 2
  },
  Text_I41_258_40_35: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_41_247: {
    width: 94.00001525878906,
    minWidth: 94.00001525878906,
    height: 70.44200134277344,
    minHeight: 70.44200134277344,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 245,
    top: 605
  },
  View_41_245: {
    width: 63.17766571044922,
    minWidth: 63.17766571044922,
    height: 54.5,
    minHeight: 54.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 85,
    top: 609
  },
  View_40_163: {
    width: 56,
    minWidth: 56,
    height: 64,
    minHeight: 64,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 92,
    top: 799
  },
  View_40_125: {
    width: 67,
    minWidth: 67,
    height: 54.4375,
    minHeight: 54.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 259,
    top: 804,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_40_126: {
    width: 67,
    minWidth: 67,
    height: 46.0625,
    minHeight: 46.0625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8.375
  },
  View_40_127: {
    width: 67,
    minWidth: 67,
    height: 13.609375,
    minHeight: 13.609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 8.375
  },
  View_40_128: {
    width: 12.5625,
    minWidth: 12.5625,
    height: 32.453125,
    minHeight: 32.453125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.21875,
    top: 21.984375
  },
  View_40_129: {
    width: 6.28125,
    minWidth: 6.28125,
    height: 6.28125,
    minHeight: 6.28125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 46.0625,
    top: 12.5625
  },
  View_40_130: {
    width: 8.375,
    minWidth: 8.375,
    height: 8.375,
    minHeight: 8.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 45.015625,
    top: 11.515625
  },
  View_40_133: {
    width: 6.28125,
    minWidth: 6.28125,
    height: 6.28125,
    minHeight: 6.28125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55.484375,
    top: 12.5625
  },
  View_40_134: {
    width: 8.375,
    minWidth: 8.375,
    height: 8.375,
    minHeight: 8.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 54.4375,
    top: 11.515625
  },
  View_40_137: {
    width: 2.09375,
    minWidth: 2.09375,
    height: 8.375,
    minHeight: 8.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 16.75,
    top: 0
  },
  View_40_138: {
    width: 2.09375,
    minWidth: 2.09375,
    height: 8.375,
    minHeight: 8.375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 48.15625,
    top: 0
  },
  View_40_139: {
    width: 29.3125,
    minWidth: 29.3125,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 18.84375,
    top: 0
  },
  View_40_140: {
    width: 4.1875,
    minWidth: 4.1875,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.40625,
    top: 30.359375
  },
  View_40_141: {
    width: 4.1875,
    minWidth: 4.1875,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 31.40625,
    top: 38.734375
  },
  View_40_142: {
    width: 45.9787483215332,
    minWidth: 45.9787483215332,
    height: 13.609375,
    minHeight: 13.609375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.0838623046875,
    top: 8.375
  },
  View_40_143: {
    width: 16.75,
    minWidth: 16.75,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.125,
    top: 13.609375
  },
  View_40_144: {
    width: 15.703125,
    minWidth: 15.703125,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25.125,
    top: 13.609375
  },
  View_40_145: {
    width: 32.3693733215332,
    minWidth: 32.3693733215332,
    height: 31.25235939025879,
    minHeight: 31.25235939025879,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 21.984375
  },
  View_40_146: {
    width: 2.09375,
    minWidth: 2.09375,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.28125,
    top: 13.609375
  },
  View_40_147: {
    width: 2.09375,
    minWidth: 2.09375,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.46875,
    top: 13.609375
  },
  View_40_148: {
    width: 2.09375,
    minWidth: 2.09375,
    height: 4.1875,
    minHeight: 4.1875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.65625,
    top: 13.609375
  },
  View_40_149: {
    width: 18.42500114440918,
    minWidth: 18.42500114440918,
    height: 18.42500114440918,
    minHeight: 18.42500114440918,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4.39666748046875,
    top: 27.428131103515625
  },
  View_40_150: {
    width: 21.439998626708984,
    minWidth: 21.439998626708984,
    height: 21.439998626708984,
    minHeight: 21.439998626708984,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.875,
    top: 25.125
  },
  View_40_151: {
    width: 18.42500114440918,
    minWidth: 18.42500114440918,
    height: 18.42500114440918,
    minHeight: 18.42500114440918,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 44.177978515625,
    top: 27.428131103515625
  },
  View_40_152: {
    width: 6.909374713897705,
    minWidth: 6.909374713897705,
    height: 6.909374713897705,
    minHeight: 6.909374713897705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 49.935791015625,
    top: 33.185943603515625
  },
  View_40_153: {
    width: 23.03125,
    minWidth: 23.03125,
    height: 23.03125,
    minHeight: 23.03125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 41.875,
    top: 25.124771118164062
  },
  View_40_157: {
    width: 5.150625228881836,
    minWidth: 5.150625228881836,
    height: 5.150625228881836,
    minHeight: 5.150625228881836,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.2186279296875,
    top: 21.984375
  },
  View_40_158: {
    width: 6.909374713897705,
    minWidth: 6.909374713897705,
    height: 6.909374713897705,
    minHeight: 6.909374713897705,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 10.15447998046875,
    top: 33.185943603515625
  },
  View_40_159: {
    width: 23.03125,
    minWidth: 23.03125,
    height: 23.03125,
    minHeight: 23.03125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2.09375,
    top: 25.124771118164062
  },
  View_41_228: {
    width: 413,
    minWidth: 413,
    height: 93,
    minHeight: 93,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1,
    top: 1359,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_567: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_39_568: {
    width: 413,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_39_570: {
    width: 412.55419921875,
    height: 89,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4457855224609375
  },
  View_72_589: {
    width: 93,
    height: 80,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 109,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_72_632: {
    width: 93,
    height: 80,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 211,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_72_689: {
    width: 93,
    height: 80,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 310,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_39_569: {
    width: 103.41358947753906,
    height: 89,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 309.58642578125
  },
  View_39_615: {
    width: 103.41358947753906,
    height: 89,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1"
  },
  View_39_627: {
    width: 103.41358947753906,
    height: 13,
    top: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_39_627: {
    color: "rgba(36, 69, 105, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_39_632: {
    width: 20.690532684326172,
    height: 20.99999237060547,
    top: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42.31231689453125
  },
  View_39_633: {
    width: 20.690521240234375,
    height: 20.99997329711914,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_39_634: {
    width: 5.642868995666504,
    height: 8.74998950958252,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_39_635: {
    width: 5.642868995666504,
    height: 8.74998950958252,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15.0477294921875
  },
  View_39_636: {
    width: 1.8809564113616943,
    height: 5.249993324279785,
    top: 12.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9.40478515625
  },
  View_39_637: {
    width: 13.166695594787598,
    height: 13.999982833862305,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.76190185546875
  },
  View_39_640: {
    width: 9.404781341552734,
    height: 5.249993324279785,
    top: 15.75,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 5.642822265625
  },
  View_39_674: {
    width: 103.41358947753906,
    height: 89,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 207
  },
  View_39_675: {
    width: 103.41358947753906,
    height: 89,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1"
  },
  View_39_676: {
    width: 103.41358947753906,
    height: 13,
    top: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_39_676: {
    color: "rgba(36, 69, 105, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_39: {
    width: 24,
    height: 24,
    top: 18,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40
  },
  View_40_40: {
    width: 24,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_41: {
    width: 19.9853515625,
    height: 17.13003921508789,
    top: 3.42767333984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_40_44: {
    width: 19.9853515625,
    height: 17.13003921508789,
    top: 3.42767333984375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2
  },
  View_39_688: {
    width: 104.41358947753906,
    height: 89,
    top: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 103
  },
  View_39_689: {
    width: 103.41358947753906,
    height: 89,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1"
  },
  View_39_690: {
    width: 103.41358947753906,
    height: 13,
    top: 49,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  Text_39_690: {
    color: "rgba(36, 69, 105, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_40_47: {
    width: 21,
    height: 21,
    top: 19,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 42
  },
  View_40_48: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_40_49: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_50: {
    width: 21,
    height: 21,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_40_51: {
    width: 9.62508773803711,
    height: 9.62508773803711,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_40_54: {
    width: 9.62508773803711,
    height: 9.62508773803711,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.374908447265625
  },
  View_40_57: {
    width: 9.62508773803711,
    height: 9.624824523925781,
    top: 11.37518310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_40_60: {
    width: 9.62508773803711,
    height: 9.624824523925781,
    top: 11.37518310546875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 11.374908447265625
  },
  View_40_63: {
    width: 1.7498250007629395,
    height: 1.3125,
    top: 3.06256103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.062591552734375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_64: {
    width: 3.4999125003814697,
    height: 1.3125,
    top: 5.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.062591552734375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_65: {
    width: 3.4999125003814697,
    height: 1.3125,
    top: 3.06256103515625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.4375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_66: {
    width: 1.7500873804092407,
    height: 1.3125,
    top: 5.25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.4375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_67: {
    width: 3.4999125003814697,
    height: 1.3125,
    top: 14.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.062591552734375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_68: {
    width: 1.7498250007629395,
    height: 1.3125,
    top: 16.62493896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 3.062591552734375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_69: {
    width: 1.7500873804092407,
    height: 1.3125,
    top: 14.4375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.4375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_40_70: {
    width: 3.4999125003814697,
    height: 1.3125,
    top: 16.62493896484375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 14.4375,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_39_702: {
    width: 103.41358947753906,
    height: 80,
    top: 9,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 1
  },
  View_39_703: {
    width: 93,
    height: 80,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 9,
    backgroundColor: "rgba(248, 248, 249, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8
  },
  View_39_704: {
    width: 103.41358947753906,
    height: 13,
    top: 44,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_39_704: {
    color: "rgba(87, 196, 193, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_39_628: {
    width: 402.1084289550781,
    height: 36.45783233642578,
    top: 56.54217529296875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0.4457855224609375,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_39_629: {
    width: 402.1084289550781,
    height: 36.45783233642578,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_39_630: {
    width: 402.1084289550781,
    height: 36.45783233642578,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(125, 134, 153, 1)",
    borderWidth: "1"
  },
  View_39_631: {
    width: 135,
    height: 5,
    minHeight: 5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 133.00001525878906,
    top: 23,
    backgroundColor: "rgba(39, 39, 85, 1)"
  },
  View_41_227: {
    width: 20,
    height: 20,
    top: 25,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 43,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I41_227_39_751: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I41_227_39_752: {
    width: 20,
    minWidth: 20,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_I41_227_39_753: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I41_227_39_754: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_I41_227_39_755: {
    width: 4.166500091552734,
    height: 1.6665005683898926,
    top: 4.166748046875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.666748046875,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I41_227_39_756: {
    width: 4.166500091552734,
    height: 1.6667509078979492,
    top: 7.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.666748046875,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I41_227_39_757: {
    width: 6.666500091552734,
    height: 1.6667499542236328,
    top: 10.833251953125,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 6.666748046875,
    backgroundColor: "rgba(0, 0, 0, 1)"
  },
  View_I41_227_39_758: {
    width: 6.666751861572266,
    height: 8.333250045776367,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12.5
  },
  View_I41_227_39_761: {
    width: 20,
    height: 20,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  ImageBackground_98_2142: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 161,
    top: 1129,
    resizeMode: "cover"
  },
  View_242_5006: {
    width: 342,
    minWidth: 342,
    height: 298,
    minHeight: 298,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 35,
    top: 154
  },
  View_39_219: {
    width: 342,
    height: 86,
    top: 212,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_39_529: {
    width: 223,
    minWidth: 223,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 232,
    borderColor: "rgba(36, 69, 105, 1)",
    borderWidth: "1"
  },
  View_39_539: {
    width: 91,
    minWidth: 91,
    height: 20,
    minHeight: 20,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 234,
    backgroundColor: "rgba(36, 69, 105, 1)"
  },
  View_39_540: {
    width: 16,
    minWidth: 16,
    height: 16,
    minHeight: 16,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 90,
    top: 236
  },
  Text_39_540: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.875
  },
  View_39_541: {
    width: 63,
    height: 26,
    top: 232,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 261
  },
  Text_39_541: {
    color: "rgba(36, 69, 105, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_39_213: {
    width: 233,
    height: 20,
    top: 264,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 84
  },
  Text_39_213: {
    color: "rgba(36, 69, 105, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_39_548: {
    width: 12,
    height: 18,
    top: 267,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 66
  },
  View_97_4738: {
    width: 342,
    minWidth: 342,
    height: 168,
    minHeight: 168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 30,
    backgroundColor: "rgba(87, 196, 193, 1)",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20
  },
  View_242_5208: {
    width: 261,
    minWidth: 261,
    height: 37,
    minHeight: 37,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 40,
    top: 152,
    backgroundColor: "rgba(0, 0, 0, 1)",
    opacity: 0.07999999821186066,
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6
  },
  View_242_5209: {
    width: 233,
    height: 18,
    top: 162,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55
  },
  Text_242_5209: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_242_4994: {
    width: 104.99998474121094,
    minWidth: 104.99998474121094,
    height: 105.00000762939453,
    minHeight: 105.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 119.5,
    top: 0
  },
  View_242_4995: {
    width: 104.99998474121094,
    minWidth: 104.99998474121094,
    height: 105.00000762939453,
    minHeight: 105.00000762939453,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_242_4996: {
    width: 104.99998474121094,
    height: 105.00000762939453,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_242_4997: {
    width: 104.99998474121094,
    height: 105.00000762939453,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_242_4998: {
    width: 105.47124481201172,
    height: 127.91356658935547,
    top: -11.839202880859375,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: -17.645050048828125
  },
  View_242_5003: {
    width: 86.56157684326172,
    height: 86.56157684326172,
    top: 8.954803466796875,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 8.95465087890625
  },
  View_242_5004: {
    width: 53.490562438964844,
    height: 35.66037368774414,
    top: 43,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 143.82928466796875
  },
  Text_242_5004: {
    color: "rgba(122, 106, 161, 1)",
    fontSize: 27.7358455657959,
    fontWeight: "700",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4755: {
    width: 233,
    height: 41,
    top: 111,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 55
  },
  Text_97_4755: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 30,
    fontWeight: "300",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_97_4756: {
    width: 11.333333015441895,
    height: 17.000024795532227,
    top: 21,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 166
  },
  View_2: { height: 1452 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)