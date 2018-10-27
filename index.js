import React, {Component} from 'react';
import {AppRegistry, Text, View} from 'react-native';

import Statuses from './app/components/Statuses/Statuses';

export default class TrackingApp extends Component {
    render() {
      return (
        <View>
          <Statuses number='5441'/>
        </View>
      );
    }
  }

  AppRegistry.registerComponent('TrackingApp', () => TrackingApp)