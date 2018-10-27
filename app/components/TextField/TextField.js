import React, {Component} from 'react';
import {AppRegistry, Text, View, TextInput, StyleSheet} from 'react-native';

import Statuses from './../Statuses/Statuses';
export default class TextField extends Component {
    constructor(){
        super();

        this.state ={
            textValue: ""
        }
    }

    onChangeText(value){
        this.setState({
            textValue:value
        });

    }

    render() {
        return (
          <View>
            <TextInput
            placeholder='Wprowadź numer paczki'
            value={this.state.textValue}
            onChangeText={(value) => this.onChangeText(value)}
            />
            <Statuses number={this.state.textValue}/>
          </View>
        );
      }
};


  AppRegistry.registerComponent('TextField', () => TextField)