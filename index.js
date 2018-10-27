import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Statuses from './app/components/Statuses/Statuses';
import TextField from './app/components/TextField/TextField';

export default class TrackingApp extends Component {
    render() {
      return (
        <View>
            <TextField/>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('TrackingApp', () => TrackingApp)