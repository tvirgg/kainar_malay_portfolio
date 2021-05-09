import React, {useState} from 'react';
import {
  Dimensions,
  Image, ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import CircleSlider from 'react-native-circle-slider/CircleSlider';
import ColorPicker from 'react-native-wheel-color-picker';
import {connect} from 'react-redux';
import { setCurentOptionC, setCurrentLocationC } from "../store";
import power from '../assets/power.png';
import settings from '../assets/settings.png';
import SvgComponent from "./Splash";
import first_img_act from "../assets/minibutons/1_active.png";
import first_img_nonact from "../assets/minibutons/1.png";
import sec_img_act from "../assets/minibutons/2_active.png";
import sec_img_nonact from "../assets/minibutons/2.png";
import first_blur from "../assets/1_blur.png";
import image from "../assets/nebula_stock_2_by_cosmicspark_d9z60dd-fullview.jpg";
import shodowOfCircle from "../assets/shodow/Ellipse.png";
import shodowOfCircle_min from "../assets/shodow/Ellipse_min.png";
const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocation: location => {
      dispatch(setCurrentLocationC(location));
    },
    setCurentOption: location => {
      dispatch(setCurentOptionC(location));
    },

  };
};
export const mapStateToProps = state => {
  return {
    CurentOptionname: state.CurentOption.Name,
    CurentOptionPath: state.CurentOption.Path,
  };
};

class CircleSliderContainer extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <CircleSliderF setCurrentLocation={this.props.setCurrentLocation} setCurentOptionf={this.props.setCurentOption} CurentOptionPath={this.props.CurentOptionPath}  CurentOptionName={this.props.CurentOptionname}/>;
  }
}
function CircleSliderF(props) {
  const RGB_MAX = 255;
  const HUE_MAX = 360;
  const SV_MAX = 100;

  const normalize = degrees => ((degrees % 360) + 360) % 360;

  const rgb2Hsv = (r, g, b) => {
    if (typeof r === 'object') {
      const args = r;
      r = args.r;
      g = args.g;
      b = args.b;
    }

    // It converts [0,255] format, to [0,1]
    r = r === RGB_MAX ? 1 : (r % RGB_MAX) / parseFloat(RGB_MAX);
    g = g === RGB_MAX ? 1 : (g % RGB_MAX) / parseFloat(RGB_MAX);
    b = b === RGB_MAX ? 1 : (b % RGB_MAX) / parseFloat(RGB_MAX);

    let max = Math.max(r, g, b);
    let min = Math.min(r, g, b);
    let h,
      s,
      v = max;

    let d = max - min;

    s = max === 0 ? 0 : d / max;

    if (max === min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }

    return {
      h: Math.round(h * HUE_MAX),
      s: Math.round(s * SV_MAX),
      v: Math.round(v * SV_MAX),
    };
  };

  const hsv2Rgb = (h, s, v) => {
    if (typeof h === 'object') {
      const args = h;
      h = args.h;
      s = args.s;
      v = args.v;
    }

    h = normalize(h);
    h = h === HUE_MAX ? 1 : ((h % HUE_MAX) / parseFloat(HUE_MAX)) * 6;
    s = s === SV_MAX ? 1 : (s % SV_MAX) / parseFloat(SV_MAX);
    v = v === SV_MAX ? 1 : (v % SV_MAX) / parseFloat(SV_MAX);

    let i = Math.floor(h);
    let f = h - i;
    let p = v * (1 - s);
    let q = v * (1 - f * s);
    let t = v * (1 - (1 - f) * s);
    let mod = i % 6;
    let r = [v, q, p, p, t, v][mod];
    let g = [t, v, v, q, p, p][mod];
    let b = [p, p, t, v, v, q][mod];

    return {
      r: Math.floor(r * RGB_MAX),
      g: Math.floor(g * RGB_MAX),
      b: Math.floor(b * RGB_MAX),
    };
  };
  const rgb2Hex = (r, g, b) => {
    if (typeof r === 'object') {
      const args = r;
      r = args.r;
      g = args.g;
      b = args.b;
    }
    r = Math.round(r).toString(16);
    g = Math.round(g).toString(16);
    b = Math.round(b).toString(16);

    r = r.length === 1 ? '0' + r : r;
    g = g.length === 1 ? '0' + g : g;
    b = b.length === 1 ? '0' + b : b;

    return '#' + r + g + b;
  };
  const hex2Hsv = hex => {
    let rgb = hex2Rgb(hex);
    return rgb2Hsv(rgb.r, rgb.g, rgb.b);
  };
  const hex2Rgb = hex => {
    let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  };
  const hsv2Hex = (h, s, v) => {
    let rgb = hsv2Rgb(h, s, v);
    return rgb2Hex(rgb.r, rgb.g, rgb.b);
  };
  const [status, setStatus] = useState(0);//sory for all of it :)
  const [sc, setSc] = useState('#FFFFFF');
  const [comc, setComc] = useState('#FFFFFF');
  const [first_mb, setFirst_mb] = useState(true);
  const [second_mb, setSecond_mb] = useState(false);
  const [firstgrad, setFirstgrad] = useState('#ffffff');
  const [secgrad, setSecgrad] = useState('#ffffff');
  const [fset, setFset] = useState(true);//выбран ли первый
  const [selectTop, setselectTop] = useState(-5);
  const [selectWidth, setselectWidth] = useState(60);
  const [selectHeight, setselectHeight] = useState(110);
  const [selectTops, setselectTops] = useState(0);
  const [selectWidths, setselectWidths] = useState(50);
  const [selectHeights, setselectHeights] = useState(100);
  const [fsvgcol, setfsvgcol] = useState('#ffffff');
  const [ssvgcol, setssvgcol] = useState('#ffffff');
  async function changeselect_styleParent(arg) {
    setFset(arg);
    if(arg!==fset){
      changeselect_style();
    }
  }
  function changeselect_style() {
    if (!fset){
      setselectTop(-5);
      setselectWidth(60);
      setselectHeight(110);
      setselectTops(0);
      setselectWidths(50);
      setselectHeights(100);
    }else if (fset){
      setselectTops(-5);
      setselectWidths(60);
      setselectHeights(110);
      setselectTop(0);
      setselectWidth(50);
      setselectHeight(100);
    }
  }
  function changeElementColor(x) {
    if(first_mb && !second_mb){
        setSc(x);
        setfsvgcol(x);
        setssvgcol(x);
    }
    else if (!first_mb && second_mb){
      if(fset){
        setFirstgrad(x);
        setSc(x);
        setfsvgcol(x);
      }
      else if(!fset){
        setSecgrad(x);
        setSc(x);
        setssvgcol(x);
      }
    }
  }
  function jewelStyle_f(firstgrad, selectTop, selectWidth, selectHeight) {
      return {
        borderWidth: 2,
        borderTopLeftRadius: 50,
        borderBottomLeftRadius: 50,
        background: 'mistyrose',
        position: "relative",
        backgroundColor: firstgrad,
        top: selectTop,
        width: selectWidth,
        height: selectHeight
      }
    }
  function jewelStyle_s(secgrad, selectTop, selectWidth, selectHeight) {
    return {
      borderWidth: 2,
      borderBottomRightRadius: 50,
      borderTopRightRadius: 50,
      background: 'mistyrose',
      backgroundColor: secgrad,
      top: selectTop,
      width: selectWidth,
      height: selectHeight,
    }
  }
  function isSelectF(fset) {
    if(!fset){
      setselectTop(0);
      setselectWidth(50);
      setselectHeight(110);
    }else{
      setselectTop(-5);
      setselectWidth(60);
      setselectHeight(100);
    }
  }
  function isSelectS(fset) {
    if(fset){
      setselectTops(0);
      setselectWidths(50);
      setselectHeights(110);
    }else{
      setselectTops(-5);
      setselectWidths(60);
      setselectHeights(100);
    }
  }
  function LightenDarkenColor(col, amt) {
    col = col.substr(1);
    let hsv = hex2Hsv(col);
    setComc(hsv2Hex(hsv.h, hsv.s, amt));
    changeElementColor_onFirstOption(hsv2Hex(hsv.h, hsv.s, amt));
    function changeElementColor_onFirstOption(x) {
      if(first_mb && !second_mb){
        setSc(x);
        setfsvgcol(x);
        setssvgcol(x);
      }
    }
  }
  function svgColorGenerator() {
    let c = {
      fcolor: '#ffffff',
      scolor: '#ffffff'
    }
    if(first_mb && !second_mb){
      c.fcolor = comc;
      c.scolor = comc;
    }
    if(!first_mb && second_mb){
      c.fcolor = firstgrad;
      c.scolor = secgrad;
    }
    return {
      c
    }
  }
  function LightenDarkenColorCallback(amt) {
    amt = 100 - (amt / 360) * 100;
    return LightenDarkenColor(sc, amt);
  }
  var icons = [ null, require('../assets/options/1.png'), require('../assets/options/2.png'), require('../assets/options/3.png'), require('../assets/options/4.png'), require('../assets/options/5.png'), require('../assets/options/6.png'), require('../assets/options/7.png')];
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        fontFamily: 'spacerangeracadital',
      }}>
      <View style={styles.btn_block}>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => {
            props.setCurrentLocation('HOME');
          }}
          underlayColor="transparent">
          <Image source={power} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginScreenButton}
          onPress={() => {
            props.setCurrentLocation('SETTINGS');
          }}>
          <Image source={settings} />
        </TouchableOpacity>
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 30,
          position: 'absolute',
          left: '42%',
        }}>
        <SvgComponent style={styles.planet_f} filling_colorf={fsvgcol} filling_colors={ssvgcol}></SvgComponent>
        <SvgComponent style={styles.planet_s} filling_colorf={fsvgcol} filling_colors={ssvgcol}></SvgComponent>
        <ImageBackground source={shodowOfCircle} style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',}}>
          <CircleSlider
            dialRadius={220}
            value={185}
            meterColor={'white'}
            btnRadius={13}
            min={185}
            max={359}
            xCenter={Dimensions.get('window').width}
            onValueChange={x => setStatus(x)}
          />
        </ImageBackground>
        <ColorPicker
          style={[
            styles.box,
            {
              transform: [{rotate: `${status}deg`}],
              transformOrigin: 'center',
            },
          ]}
          onColorChange={x => changeElementColor(x)}
          thumbSize={30}
          noSnap={false}
          row={false}
        />
      </View>
      <View
        style={{
          alignItems: 'center',
          paddingTop: 50,
          position: 'absolute',
          top: Dimensions.get('window').height / 2 - 20,
          left: (Dimensions.get('window').width / 100) * 4,
        }}>
        <ImageBackground source={shodowOfCircle_min} style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',}}>
          <CircleSlider
            dialRadius={80}
            value={1}
            meterColor={'white'}
            btnRadius={13}
            min={1}
            max={359}
            yCenter={Dimensions.get('window').height / 2}
            xCenter={(Dimensions.get('window').width / 100) * 19}
            onValueChange={x => LightenDarkenColorCallback(x)}
          />
        </ImageBackground>
        {
          first_mb &&
        <View style={[styles.mini_c, {backgroundColor: `${comc}`}]}>
          <Text style={{color: 'white'}}>{comc}</Text>
        </View>}
        {
          second_mb &&
          <View style={styles.twoparts_block}>
            <TouchableOpacity onPress={()=>{changeselect_styleParent(true)}} style={ jewelStyle_f(firstgrad, selectTop, selectWidth, selectHeight)}></TouchableOpacity>
            <TouchableOpacity onPress={()=>{changeselect_styleParent(false)}} style={jewelStyle_s(secgrad, selectTops, selectWidths, selectHeights)}></TouchableOpacity>
          </View>}
      </View>
      <View style={styles.lable_block}>
        <Text style={styles.lable}>lAMPLY</Text>
      </View>
      <View
        style={{
        alignItems: 'center',
        paddingTop: 50,
        position: 'absolute',
        top: Dimensions.get('window').height / 2 + 70,
        left: Dimensions.get('window').width - 215,
      }}>
        <ImageBackground source={shodowOfCircle_min} style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
          <CircleSlider
            style={{
              zIndex: 5
            }}
            dialRadius={80}
            value={1}
            meterColor={'white'}
            btnRadius={13}
            min={1}
            max={359}
            yCenter={Dimensions.get('window').height / 2 + 70}
            xCenter={Dimensions.get('window').width - 200}
            onValueChange={x => {first_mb? props.setCurentOptionf(x): props.setCurentOptionf(362)}}
          />
        </ImageBackground>
        {
          first_mb && <Image  source={icons[props.CurentOptionName]}
                              style={{
                                position: 'absolute',
                                width: 80,
                                height: 80,
                                top: 100
                              }}
          />
        }
        {
          second_mb && <Image  source={icons[7]}
                              style={{
                                position: 'absolute',
                                width: 80,
                                height: 80,
                                top: 100
                              }}
          />
        }
        <View
          style={{
            position: 'absolute',
            top: 190,
            left: 90
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setFirst_mb(true);
              setSecond_mb(false);
            }}
            style={{
              position: 'absolute',
              left: 60,
              top: 10
            }}>
            <Image source={first_mb ? first_img_act : first_img_nonact}></Image>
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 0,
              top: 50
            }}
            onPress={() => {
              setFirst_mb(false);
              setSecond_mb(true);
            }}>
            <Image source={second_mb ? sec_img_act :sec_img_nonact}></Image>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  twoparts_block:{
    width: 100,
    height: 100,
    position: 'absolute',
    top: 95,
    borderRadius: 90,
    flexDirection: "row"
  },
  mini_c__first_g: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 95,
    borderRadius: 90,
  },
  mini_c__sec_g: {
    width: 100,
    height: 100,
    position: 'absolute',
    top: 95,
    borderRadius: 90,
  },
  optionimg:{
    width: 70,
    height: 70,
    position: 'absolute',
    top: 110,
  },
  fake_taxi:{
    zIndex: -99,
    width: '100%',
    height: '100%',
    borderRadius: 400,
    position: 'absolute',
    top: 20,
    shadowColor: "#ffffff",
    shadowOffset: {
      width:0,
      height: 12,
    },
    shadowOpacity: 0.98,
    shadowRadius: 7.00,

    elevation: 14,

  },
  planet_f:{
    position: 'absolute',
    top: Dimensions.get('window').height - 550,
    left: -175,
    zIndex: -99,
  },
  planet_s:{
    position: 'absolute',
    zIndex: -99,
    transform: [{ rotate: "180.95deg" },
      { scaleY: -1 }],
    left: -60,
    top: -160,

  },
  lable_block: {
    position: 'absolute',
    top: Dimensions.get('window').height - 75,
    left: (Dimensions.get('window').height / 100) * 4,
  },
  lable: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    fontSize: 40,
    width: 200,
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
export default connect(mapStateToProps, mapDispatchToProps)(CircleSliderContainer);
