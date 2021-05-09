import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {setCurrentConnectionImageC, setCurrentLocationC} from '../store';
import {connect} from 'react-redux';
import first_img from '../assets/1.png';
import first_blur from '../assets/1_blur.png';
import second_img from '../assets/2.png';
import second_blur from '../assets/2_blur.png';
import batary from '../assets/battery.png';
import vector from '../assets/Vector.png';
import plug from '../assets/plug.png';
import {Dimensions} from 'react-native';
const mapDispatchToProps = dispatch => {
  return {
    setCurrentLocation: location => {
      dispatch(setCurrentLocationC(location));
    },
    setCurrentConnectionImage: connectionimg => {
      dispatch(setCurrentConnectionImageC(connectionimg));
    },
  };
};
class ChooseComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {first: true, second: true};
  }
  render() {
    return (
      <TouchableOpacity
        style={{flex: 1, alignItems: 'center'}}
        onPress={() => {
          this.setState({first: true});
          this.setState({second: true});
        }}>
        <View style={{flex: 1, alignItems: 'center'}}>
          <Text style={styles.lable}>CHOOSE YOUR DEVICE</Text>
          <View style={styles.first_block}>
            <TouchableOpacity
              style={styles.first}
              onPress={() => {
                if (this.state.first) {
                  this.setState({first: false});
                } else {
                  this.setState({first: true});
                }
              }}>
              <Image source={this.state.first ? first_img : first_blur} />
            </TouchableOpacity>
            {!this.state.first && (
              <View style={styles.first_blank}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setCurrentConnectionImage(1);
                    this.props.setCurrentLocation('CONNECTION');
                  }}>
                  <Image source={batary} />
                </TouchableOpacity>
                <View>
                  <Image source={vector} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setCurrentConnectionImage(2);
                    this.props.setCurrentLocation('CONNECTION');
                  }}>
                  <Image source={plug} />
                </TouchableOpacity>
              </View>
            )}
          </View>
          <View style={styles.second_block}>
            <TouchableOpacity
              style={styles.second}
              onPress={() => {
                if (this.state.second) {
                  this.setState({second: false});
                } else {
                  this.setState({second: true});
                }
              }}>
              <Image source={this.state.second ? second_img : second_blur} />
            </TouchableOpacity>
            {!this.state.second && (
              <View style={styles.first_blank}>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setCurrentConnectionImage(1);
                    this.props.setCurrentLocation('CONNECTION');
                  }}>
                  <Image source={batary} />
                </TouchableOpacity>
                <View>
                  <Image source={vector} />
                </View>
                <TouchableOpacity
                  onPress={() => {
                    this.props.setCurrentConnectionImage(2);
                    this.props.setCurrentLocation('CONNECTION');
                  }}>
                  <Image source={plug} />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  lable: {
    textAlign: 'center',
    color: 'white',
    fontFamily: 'spacerangeracadital',
    fontStyle: 'normal',
    marginTop: (Dimensions.get('window').height / 100) * 3,
    fontSize: Dimensions.get('window').height / 19,
    lineHeight: (Dimensions.get('window').height / 100) * 5,
    width: Dimensions.get('window').height / 2,
  },
  first: {
    width: (Dimensions.get('window').height / 100) * 35.5,
    height: (Dimensions.get('window').height / 100) * 35.5,
    borderRadius: 300,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
  first_blank: {
    position: 'absolute',
    width: (Dimensions.get('window').height / 100) * 35.5,
    height: (Dimensions.get('window').height / 100) * 35.5,
    borderRadius: 300,
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderWidth: 2,
    borderColor: 'white',
    shadowOffset: {width: 10, height: 10},
    shadowColor: 'white',
    shadowOpacity: 1.0,
    alignItems: 'center', // Centered horizontally
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: (Dimensions.get('window').width / 100) * 13,
  },
  first_block: {
    marginTop: (Dimensions.get('window').height / 100) * 3.5,
  },
  second_block: {
    marginTop: (Dimensions.get('window').height / 100) * 3.5,
  },
  second: {
    width: (Dimensions.get('window').height / 100) * 35.5,
    height: (Dimensions.get('window').height / 100) * 35.5,
    borderRadius: 300,
    borderWidth: 2,
    borderColor: 'white',
    justifyContent: 'center', //Centered vertically
    alignItems: 'center', // Centered horizontally
  },
});
export default connect(null, mapDispatchToProps)(ChooseComponent);
