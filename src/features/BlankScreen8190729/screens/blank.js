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
      <View style={styles.View_970_37405} />
      <View style={styles.View_970_37406}>
        <View style={styles.View_970_37407}>
          <View style={styles.View_970_37408}>
            <View style={styles.View_970_37411} />
            <View style={styles.View_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f03/87e4/cebf0b1a716cad020446a3ffeb2c27ca"
                }}
                style={styles.ImageBackground_970_37413}
              />
            </View>
            <View style={styles.View_970_37414}>
              <Text style={styles.Text_970_37414}>Magna Wine Boutique</Text>
            </View>
            <View style={styles.View_970_37415}>
              <Text style={styles.Text_970_37415}>0.1 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37424}>
            <View style={styles.View_I970_37424_970_37411} />
            <View style={styles.View_I970_37424_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee11/9e29/24db2970ed4fee7ce70ac8684bddbda5"
                }}
                style={styles.ImageBackground_I970_37424_970_37413}
              />
            </View>
            <View style={styles.View_I970_37424_970_37414}>
              <Text style={styles.Text_I970_37424_970_37414}>Wine Direct</Text>
            </View>
            <View style={styles.View_I970_37424_970_37415}>
              <Text style={styles.Text_I970_37424_970_37415}>1.7 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37425}>
            <View style={styles.View_I970_37425_970_37411} />
            <View style={styles.View_I970_37425_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b09/689f/103acd55ebf74499d2cf573108527b49"
                }}
                style={styles.ImageBackground_I970_37425_970_37413}
              />
            </View>
            <View style={styles.View_I970_37425_970_37414}>
              <Text style={styles.Text_I970_37425_970_37414}>
                Riviera Beverage
              </Text>
            </View>
            <View style={styles.View_I970_37425_970_37415}>
              <Text style={styles.Text_I970_37425_970_37415}>3.4 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37426}>
            <View style={styles.View_I970_37426_970_37411} />
            <View style={styles.View_I970_37426_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2f5d/bf1d/98e7bed0c2212dfbe19f2158937993a3"
                }}
                style={styles.ImageBackground_I970_37426_970_37413}
              />
            </View>
            <View style={styles.View_I970_37426_970_37414}>
              <Text style={styles.Text_I970_37426_970_37414}>
                Heinen’s Grocery Store
              </Text>
            </View>
            <View style={styles.View_I970_37426_970_37415}>
              <Text style={styles.Text_I970_37426_970_37415}>7.8 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37427}>
            <View style={styles.View_I970_37427_970_37411} />
            <View style={styles.View_I970_37427_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b4f6/65e5/319309603ee9d2a32659a2e91d0e1f7e"
                }}
                style={styles.ImageBackground_I970_37427_970_37413}
              />
            </View>
            <View style={styles.View_I970_37427_970_37414}>
              <Text style={styles.Text_I970_37427_970_37414}>
                Swine City Brewing Co.
              </Text>
            </View>
            <View style={styles.View_I970_37427_970_37415}>
              <Text style={styles.Text_I970_37427_970_37415}>9 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37428}>
            <View style={styles.View_I970_37428_970_37411} />
            <View style={styles.View_I970_37428_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6c2b/e0ca/b39fc722e5a35e0428f315ae4353ad9c"
                }}
                style={styles.ImageBackground_I970_37428_970_37413}
              />
            </View>
            <View style={styles.View_I970_37428_970_37414}>
              <Text style={styles.Text_I970_37428_970_37414}>
                City Brew Tours
              </Text>
            </View>
            <View style={styles.View_I970_37428_970_37415}>
              <Text style={styles.Text_I970_37428_970_37415}>10.2 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37429}>
            <View style={styles.View_I970_37429_970_37411} />
            <View style={styles.View_I970_37429_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a63b/1cae/e357ca375ca71336eaca0f987983752d"
                }}
                style={styles.ImageBackground_I970_37429_970_37413}
              />
            </View>
            <View style={styles.View_I970_37429_970_37414}>
              <Text style={styles.Text_I970_37429_970_37414}>
                Ohio Liquor (OHLQ)
              </Text>
            </View>
            <View style={styles.View_I970_37429_970_37415}>
              <Text style={styles.Text_I970_37429_970_37415}>15.3 mi</Text>
            </View>
          </View>
          <View style={styles.View_970_37430}>
            <View style={styles.View_I970_37430_970_37411} />
            <View style={styles.View_I970_37430_970_37412}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5ab3/ee13/3e43d14daf5651e3b5b4a2a866f1aeef"
                }}
                style={styles.ImageBackground_I970_37430_970_37413}
              />
            </View>
            <View style={styles.View_I970_37430_970_37414}>
              <Text style={styles.Text_I970_37430_970_37414}>
                Falls City Beer Store
              </Text>
            </View>
            <View style={styles.View_I970_37430_970_37415}>
              <Text style={styles.Text_I970_37430_970_37415}>16.7 mi</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_970_37431} />
      <View style={styles.View_970_37432}>
        <Text style={styles.Text_970_37432}>Set Store</Text>
      </View>
      <View style={styles.View_970_37433}>
        <Text style={styles.Text_970_37433}>Stores Near You</Text>
      </View>
      <View style={styles.View_970_37434}>
        <Text style={styles.Text_970_37434}>All Stores</Text>
      </View>
      <View style={styles.View_970_37435}>
        <View style={styles.View_970_37436}>
          <Text style={styles.Text_970_37436}>
            We’ve detected the following location:
          </Text>
        </View>
        <View style={styles.View_970_37437}>
          <Text style={styles.Text_970_37437}>
            I would like to buy the products through:
          </Text>
        </View>
        <View style={styles.View_970_37438}>
          <Text style={styles.Text_970_37438}>Cleveland, Ohio</Text>
        </View>
        <View style={styles.View_970_37439}>
          <Text style={styles.Text_970_37439}>
            22 Columbus Rd, Bedford Heights, OH 441...
          </Text>
        </View>
        <View style={styles.View_970_37440}>
          <View style={styles.View_970_37441} />
          <View style={styles.View_970_37442} />
          <View style={styles.View_970_37443}>
            <Text style={styles.Text_970_37443}>Change</Text>
          </View>
        </View>
        <View style={styles.View_970_37444} />
        <View style={styles.View_970_37447}>
          <Text style={styles.Text_970_37447}>Home Delivery</Text>
        </View>
        <View style={styles.View_970_37448}>
          <Text style={styles.Text_970_37448}>Pick-Up</Text>
        </View>
        <View style={styles.View_970_37449}>
          <Text style={styles.Text_970_37449}>Shop In-store</Text>
        </View>
        <View style={styles.View_970_37450} />
        <View style={styles.View_970_37451} />
        <View style={styles.View_970_37452} />
        <View style={styles.View_970_37453} />
      </View>
      <View style={styles.View_970_37454}>
        <View style={styles.View_970_37455}>
          <Text style={styles.Text_970_37455}>Home</Text>
        </View>
        <View style={styles.View_970_37456} />
      </View>
      <View style={styles.View_970_37458} />
      <View style={styles.View_970_37459} />
      <View style={styles.View_970_37460} />
      <View style={styles.View_970_37461}>
        <View style={styles.View_970_37462}>
          <View style={styles.View_970_37463} />
          <View style={styles.View_970_37464}>
            <View style={styles.View_970_37465} />
            <View style={styles.View_970_37466} />
            <View style={styles.View_970_37467} />
          </View>
          <View style={styles.View_970_37468} />
          <View style={styles.View_970_37472} />
          <View style={styles.View_970_37477} />
        </View>
      </View>
      <View style={styles.View_970_37485}>
        <View style={styles.View_970_37486} />
        <View style={styles.View_970_37487} />
        <View style={styles.View_970_37488}>
          <Text style={styles.Text_970_37488}>Shop here</Text>
        </View>
      </View>
      <View style={styles.View_2} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_970_37405: {
    width: 375,
    height: 811,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_970_37406: {
    width: 325,
    minWidth: 325,
    height: 463,
    minHeight: 463,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 356,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_970_37407: {
    width: 325,
    minWidth: 325,
    height: 560,
    minHeight: 560,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0
  },
  View_970_37408: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37424: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 70,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37424_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37424_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37424_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37424_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37424_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37424_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37424_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37425: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 140,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37425_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37425_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37425_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37425_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37425_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37425_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37425_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37426: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 210,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37426_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37426_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37426_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37426_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37426_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37426_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37426_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37427: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 280,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37427_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37427_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37427_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37427_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37427_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37427_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37427_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37428: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 350,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37428_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37428_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37428_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37428_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37428_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37428_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37428_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37429: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 420,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37429_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37429_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37429_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    resizeMode: "cover",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37429_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37429_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37429_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37429_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37430: {
    width: 325,
    minWidth: 325,
    height: 70,
    minHeight: 70,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 490,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I970_37430_970_37411: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10,
    backgroundColor: "rgba(246, 246, 246, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37430_970_37412: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 10
  },
  ImageBackground_I970_37430_970_37413: {
    width: 50,
    height: 50,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_I970_37430_970_37414: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 15
  },
  Text_I970_37430_970_37414: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 16,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_I970_37430_970_37415: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 80,
    top: 36
  },
  Text_I970_37430_970_37415: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37431: {
    width: 375,
    height: 346,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_970_37432: {
    width: 71,
    height: 22,
    top: 53,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 152
  },
  Text_970_37432: {
    color: "rgba(209, 63, 51, 1)",
    fontSize: 17,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37433: {
    width: 116,
    height: 21,
    top: 315,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 47
  },
  Text_970_37433: {
    color: "rgba(209, 63, 51, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37434: {
    width: 67,
    height: 20,
    top: 315,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 238
  },
  Text_970_37434: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37435: {
    width: 325,
    minWidth: 325,
    height: 186,
    minHeight: 186,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 113
  },
  View_970_37436: {
    width: 245,
    height: 18,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_970_37436: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37437: {
    width: 254,
    height: 18,
    top: 86,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_970_37437: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37438: {
    width: 140,
    height: 25,
    top: 29,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 21
  },
  Text_970_37438: {
    color: "rgba(29, 29, 29, 1)",
    fontSize: 20,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37439: {
    width: 221,
    height: 15,
    top: 54,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  Text_970_37439: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 12,
    fontWeight: "300",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37440: {
    width: 89,
    minWidth: 89,
    height: 36,
    minHeight: 36,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 236,
    top: 30
  },
  View_970_37441: {
    width: 89,
    height: 36,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(209, 63, 51, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_970_37442: {
    width: 12.000279426574707,
    height: 12,
    top: 12,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 15
  },
  View_970_37443: {
    width: 42,
    height: 16,
    top: 10,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 32
  },
  Text_970_37443: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37444: {
    width: 11.650485038757324,
    height: 15,
    top: 33,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_970_37447: {
    width: 92,
    height: 18,
    top: 114,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25
  },
  Text_970_37447: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37448: {
    width: 49,
    height: 18,
    top: 141,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25
  },
  Text_970_37448: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37449: {
    width: 83,
    height: 18,
    top: 168,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25
  },
  Text_970_37449: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 14,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_970_37450: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 116,
    borderColor: "rgba(209, 63, 51, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37451: {
    width: 7,
    minWidth: 7,
    height: 7,
    minHeight: 7,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 4,
    top: 120,
    backgroundColor: "rgba(209, 63, 51, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37452: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 143,
    borderColor: "rgba(215, 220, 229, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37453: {
    width: 15,
    minWidth: 15,
    height: 15,
    minHeight: 15,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 170,
    borderColor: "rgba(215, 220, 229, 1)",
    borderWidth: "1",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37454: {
    width: 63,
    minWidth: 63,
    height: 24,
    minHeight: 24,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 12,
    top: 54
  },
  View_970_37455: {
    width: 43,
    minWidth: 43,
    height: 22,
    minHeight: 22,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 1
  },
  Text_970_37455: {
    color: "rgba(148, 154, 178, 1)",
    fontSize: 16,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.4099999964237213
  },
  View_970_37456: {
    width: 16,
    height: 24,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_970_37458: {
    width: 162.5,
    minWidth: 162.5,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 25,
    top: 346
  },
  View_970_37459: {
    width: 376,
    height: 104,
    top: 708,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0
  },
  View_970_37460: {
    width: 4,
    minWidth: 4,
    height: 40,
    minHeight: 40,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 360,
    top: 372,
    backgroundColor: "rgba(209, 63, 51, 1)",
    borderTopLeftRadius: 96,
    borderTopRightRadius: 96,
    borderBottomLeftRadius: 96,
    borderBottomRightRadius: 96
  },
  View_970_37461: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_970_37462: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_970_37463: {
    width: 375,
    height: 44,
    top: 0,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: "1"
  },
  View_970_37464: {
    width: 24.32803726196289,
    minWidth: 24.32803726196289,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 336,
    top: 17.333328247070312
  },
  View_970_37465: {
    width: 22,
    minWidth: 22,
    height: 11.333333015441895,
    minHeight: 11.333333015441895,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    borderColor: "rgba(255, 255, 255, 1)",
    borderWidth: "1"
  },
  View_970_37466: {
    width: 1.328037977218628,
    minWidth: 1.328037977218628,
    height: 4,
    minHeight: 4,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 23,
    top: 3.6666717529296875
  },
  View_970_37467: {
    width: 18,
    minWidth: 18,
    height: 7.333333492279053,
    minHeight: 7.333333492279053,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 2,
    top: 2,
    backgroundColor: "rgba(148, 154, 178, 1)"
  },
  View_970_37468: {
    width: 15.27237606048584,
    height: 10.965571403503418,
    top: 17.330673217773438,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 315.69384765625
  },
  View_970_37472: {
    width: 17,
    height: 10.666666984558105,
    top: 17.666671752929688,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 293.666748046875
  },
  View_970_37477: {
    width: 29.517480850219727,
    height: 11.11083984375,
    top: 18.16015625,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 27.92626953125
  },
  View_970_37485: {
    width: 113,
    minWidth: 113,
    height: 48,
    minHeight: 48,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 131,
    top: 744,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_970_37486: {
    flexGrow: 1,
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
  View_970_37487: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 0,
    top: 0,
    backgroundColor: "rgba(209, 63, 51, 1)",
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5
  },
  View_970_37488: {
    flexGrow: 1,
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: 20,
    top: 14
  },
  Text_970_37488: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 16,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0
  },
  View_2: { height: 812 }
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)