import React, {Component} from 'react';
import CircleSlider from 'react-native-circle-slider/CircleSlider';
import {View, Text} from 'react-native';

export default class CircleSliderContainer extends Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <CircleSlider
          value={181}
          meterColor={'white'}
          btnRadius={10}
          min={181}
          max={359}
        />
        <Text>lola</Text>
      </View>
    );
  }
}
