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
            style={styles.textField}
            keyboardType='numeric'
            />
            <Statuses number={this.state.textValue}/>
          </View>
        );
      }
}
const styles = StyleSheet.create({
    textField: {
        margin: 10,
        padding: 10,
        fontSize: 20,
        borderColor: 'gray',
        borderWidth: 3
    }
});

  AppRegistry.registerComponent('TextField', () => TextField)