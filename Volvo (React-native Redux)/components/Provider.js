import React, {Component} from 'react';
import {connect} from 'react-redux';
import Hypage from './HYpage';
import CircleSliderContainer from './Stick_main';
import ChooseComponent from './ChooseComponent';
import ConectionComponent from './Conection';
import SettingsContainer from './Settings';

const mapStateToProps = state => {
  return {
    roler: state.roler,
  };
};

class Splash extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    switch (this.props.roler) {
      case 'HOME':
        return <Hypage />;
      case 'PALITRA':
        return <CircleSliderContainer />;
      case 'SETTINGS':
        return <SettingsContainer />;
      case 'CHOOSE':
        return <ChooseComponent />;
      case 'CONNECTION':
        return <ConectionComponent />;
      default:
        return <Hypage />;
    }
  }
}

export default connect(mapStateToProps)(Splash);
