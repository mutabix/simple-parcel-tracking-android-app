import React, {Component} from 'react';
import {AppRegistry, View} from 'react-native';

import TextField from './app/components/TextField/TextField';

export default class TrackingApp extends Component {
    render() {
      return (
        <View>z
            <TextField/>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('TrackingApp', () => TrackingApp)