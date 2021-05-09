import React from 'react';
import {
  Dimensions,
  Image, ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CircleSlider from 'react-native-circle-slider/CircleSlider';
import shodowOfCircle from "../assets/shodow/Ellipse.png";
import rocket from '../assets/raketa.png';
import settings from '../assets/settings.png';
import { connect } from "react-redux";
import { setCurrentLocationC } from "../store";
import SvgComponent from "./Splash";
import shodowOfCircle_min from "../assets/shodow/Ellipse_min.png";
const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocation: location => {
      dispatch(setCurrentLocationC(location));
    },
  };
};
class SettingsContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          fontFamily: 'spacerangeracadital',
        }}>
        <SvgComponent style={styles.planet_f}></SvgComponent>
        <SvgComponent style={styles.planet_s}></SvgComponent>
        <View style={styles.top_text__block}>
          <Text style={styles.top_text__text}>
            you can ask as anything on our website or message us email
          </Text>
          <TouchableOpacity onPress={() => {}}>
            <Text style={styles.post_name}>lamply@ya.ru</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.top_lable__block}>
          <Text style={styles.top_lable__text}>settings </Text>
          <Image source={settings} />
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 30,
            position: 'absolute',
            left: '67%',
            zIndex: -9,
          }}>
          <ImageBackground source={shodowOfCircle} style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',
            alignContent: 'center',
          }}>
            <CircleSlider
              dialRadius={220}
              value={245}
              meterColor={'white'}
              btnRadius={13}
              min={185}
              max={359}
              xCenter={Dimensions.get('window').width}
            />
          </ImageBackground>
        </View>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 50,
            position: 'absolute',
            top: Dimensions.get('window').height / 2 - 20,
            left: (Dimensions.get('window').width / 100) * 4,
          }}>
          <View style={styles.mini_c} />
        </View>
        <View style={styles.lable_block}>
          <ImageBackground source={shodowOfCircle_min} style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',}}>
            <CircleSlider
              dialRadius={80}
              value={90}
              meterColor={'white'}
              btnRadius={13}
              min={1}
              max={359}
              yCenter={Dimensions.get('window').height / 2}
              xCenter={(Dimensions.get('window').width / 100) * 19}
            />
          </ImageBackground>
        </View>
        <View style={styles.empty_slider}>
          <ImageBackground source={shodowOfCircle_min} style={{
            flex: 1,
            resizeMode: 'cover',
            justifyContent: 'center',}}>
            <CircleSlider
              dialRadius={80}
              value={270}
              meterColor={'white'}
              btnRadius={13}
              min={1}
              max={359}
              yCenter={Dimensions.get('window').height / 2}
              xCenter={(Dimensions.get('window').width / 100) * 19}
            />
          </ImageBackground>
        </View>
        <View style={styles.bottom_vontainer}>
          <Text style={styles.bottom_vontainer__text}>
            feel free to contact us
          </Text>
          <TouchableOpacity
            onPress={() => {
              this.props.setCurrentLocation('PALITRA');
            }}>
            <Image source={rocket} />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
export default connect(null, mapDispatchToProps)(SettingsContainer);
const styles = StyleSheet.create({
  planet_f:{
    position: 'absolute',
    top: Dimensions.get('window').height - 550,
    left: -15,
    zIndex: -99,
  },
  planet_s:{
    position: 'absolute',
    zIndex: -99,
    transform: [{ rotate: "180.95deg" },
      { scaleY: -1 }],
    left: Dimensions.get('window').width-300,
    top: -160,

  },
  top_text__block: {
    position: 'absolute',
    top: 110,
    left: (Dimensions.get('window').height / 100) * 4,
    width: 350,
  },
  post_name: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    fontSize: 30,
    marginTop: 45
  },
  top_text__text: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    fontSize: 30,
  },
  bottom_vontainer: {
    flexDirection: 'row',
    position: 'absolute',
    left: (Dimensions.get('window').width / 100) * 13,
    alignItems: 'center',
    top: (Dimensions.get('window').height / 100) * 88,
  },
  bottom_vontainer__text: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    fontSize: 30,
    maxWidth: 265,
    textAlign: 'center',
  },
  top_lable__text: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  },
  top_lable__block: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
  },
  empty_slider: {
    position: 'absolute',
    top: Dimensions.get('window').height - 300,
    left: Dimensions.get('window').width - 200,
  },
  lable_block: {
    position: 'absolute',
    top: Dimensions.get('window').height / 2 - 50,
    left: (Dimensions.get('window').height / 100) * 4,
  },
  lable: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    fontSize: 40,
    width: 200,
    marginBottom: 20,
  },
  box: {
    position: 'absolute',
    top: 65,
  },
  mini_c: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 95,
    borderRadius: 90,
  },
  btn_block: {
    marginTop: (Dimensions.get('window').height / 100) * 5,
    marginLeft: (Dimensions.get('window').height / 100) * 2,
  },
  loginText: {
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 60,
    lineHeight: 80,
    fontFamily: 'spacerangeracadital',
  },
});
