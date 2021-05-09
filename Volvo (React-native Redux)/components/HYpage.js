import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {setCurrentLocationC} from '../store';
import {connect} from 'react-redux';
import image from '../assets/home_circles.png';
const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocation: location => {
      dispatch(setCurrentLocationC(location));
    },
  };
};
class Hypage extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <View>
        <ImageBackground source={image} style={styles.image}>
          <TouchableOpacity
            style={styles.loginScreenButton}
            onPress={() => {
              this.props.setCurrentLocation('CHOOSE');
            }}
            underlayColor="transparent">
            <Text style={styles.loginText}>lamply</Text>
          </TouchableOpacity>
        </ImageBackground>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  loginScreenButton: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  loginText: {
    fontFamily: 'spacerangeracadital',
    color: '#fff',
    textAlign: 'center',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 50,
    lineHeight: 80,
  },
  image: {
    resizeMode: 'cover',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
});
export default connect(null, mapDispatchToProps)(Hypage);
