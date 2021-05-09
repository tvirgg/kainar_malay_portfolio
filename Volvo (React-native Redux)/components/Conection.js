import React, {Component} from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';
import first_img from '../assets/1.png';
import second_img from '../assets/2.png';
import {connect} from 'react-redux';
import {setCurrentLocationC} from '../store';
import image from '../assets/conection_loading.png';
const mapStateToProps = state => {
  return {
    ConnectionImage: state.ConnectionImage,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocation: location => {
      dispatch(setCurrentLocationC(location));
    },
  };
};

class ConectionComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ImageBackground source={image} style={styles.image}>
        <TouchableOpacity
          style={styles.first}
          onPress={() => {
            this.props.setCurrentLocation('PALITRA');
          }}>
          <Image
            source={this.props.ConnectionImage === 1 ? first_img : second_img}
          />
        </TouchableOpacity>
        <Text style={styles.lable}>CONNECTION... </Text>
      </ImageBackground>
    );
  }
}
const styles = StyleSheet.create({
  lable: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'spacerangeracadital',
    fontSize: 40,
    lineHeight: 38,
    position: 'absolute',
    top: Dimensions.get('window').height - 100,
  },
  image: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(ConectionComponent);
