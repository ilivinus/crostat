
import React from 'react';
import { toggleTheme } from '../../redux/actions/actionables';
import { connect } from 'react-redux';
import SettingScreen from './presenter';

export default connect(
    (state) => ({
      darkTheme: state.setting.darkTheme,
      theme: state.setting.theme,
    }),
    { toggleTheme },
  )(SettingScreen);