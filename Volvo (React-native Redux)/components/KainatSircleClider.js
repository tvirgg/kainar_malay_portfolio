import * as React from "react"
import { ImageBackground} from "react-native";
import shodowOfCircle from "../assets/shodow/Ellipse.png";
import CircleSlider from 'react-native-circle-slider/CircleSlider';

function Kainar_cirkle_clider(props) {
    return (
      <ImageBackground source={shodowOfCircle} style={{
          flex: 1,
          resizeMode: 'cover',
          justifyContent: 'center',}}>
          <CircleSlider
            dialRadius={props.dialRadius}
            value={props.value}
            meterColor={props.meterColor}
            btnRadius={props.btnRadius}
            min={props.min}
            max={props.max}
            xCenter={props.xCenter}
            onValueChange={props.onValueChange}
          />
      </ImageBackground>
    )
}

export default Kainar_cirkle_clider;

