import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,Picker} from 'react-native';

type Props = {};
export default class App extends Component<Props> {
  render() {
       const elements = this.props.data;
    return (
        <Picker
        selectedValue={this.props.selectedValue}
        style={this.props.style}
        onValueChange={this.props.onValueChange}>
        {elements.map((value, index) => {
            return <Picker.Item key={index} label={value.name} value={value.value} />
        })}
        </Picker>
    );
  }
}
