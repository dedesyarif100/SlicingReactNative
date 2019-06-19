import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TextInput} from 'react-native';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
     this.state ={
            isFocused: false,    
        };
  }
  
 handleFocus = () => this.setState({isFocused: true})
 handleBlur = () => this.setState({isFocused: false})

  render() {
    return (
        <TextInput
        onFocus={this.handleFocus}
        onBlur={this.handleBlur}
        style={[this.props.style, {
             borderColor: this.state.isFocused ? 'lightgreen' : 'gray'
         }]}
        underlineColorAndroid = {"transparent"}
        placeholder = {this.props.placeholder}
        autoCapitalize = "none"
        returnKeyType="next"
        secureTextEntry={this.props.secureTextEntry}
        type={this.props.type}
        onChangeText={this.props.onChangeText}
        />
    );
  }
}

