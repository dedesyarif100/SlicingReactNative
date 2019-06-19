import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, TextInput, TouchableOpacity,Picker,StatusBar} from 'react-native';
import Textinput from "./component/input";

const blue =  "#428AF8";
const lightgray = "#D3D3D3";
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component<Props> {
    constructor(props, context) {
        super(props, context);
        
        this.state ={
            username:"",
            password:"",
                
        };
    }

    handleinput = (key, text)=>{
    this.setState({[key]:text});
}



    
  render() {
    return (  
        <View style={styles.container}>
        <StatusBar backgroundColor="lightgreen" barStyle="light-content"/>
        <Text style={styles.welcomename}>Halo, Selamat Datang!</Text>
        <Text style={styles.welcome}>Sudah ke kebun hari ini?</Text>
        <Text style={styles.welcome}>Ayo ke kebun dan mulai aktivitasmu di hari yang cerah ini!</Text>
        <View style={styles.form}>
        <Text style={styles.label}>Username</Text>
        <Textinput
        style={styles.input}
        placeholder = "masukkan username" 
        onChangeText={text => this.handleinput("username",text)}
        />
      <View style={styles.input2}>
      <Text style={styles.label}>Password</Text>
        <Textinput
        secureTextEntry={true}
        style={styles.input}
        placeholder = "masukkan Password" 
        type="password"
        onChangeText={text => this.handleinput("password",text)}
        />
      </View>
        

       <TouchableOpacity
       disabled={!this.state.password}
         style={[styles.button, { backgroundColor: this.state.password ? 'lightgreen' : 'lightgray' }]} 
         onPress={this.onPress}
       ><Text style={styles.buttontext}> Login </Text>
       </TouchableOpacity>
       <Text style={styles.label2}>Lupa kata sandi?</Text>
         </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:10,
    marginTop:80,
  },
  welcome: {
    fontSize: 15,
    marginLeft:10
  },
  welcomename: {
    fontWeight:"bold",
    fontSize: 25,
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  
  input: { 
    borderColor:"gray",
     borderWidth:1,
     borderRadius:5,
      height: 50,
      marginBottom:10
   },
    input2: { 
      marginVertical:20
   },
   form: {
     
     marginTop:40,
      margin:10,
      borderRadius:10
   },
   button: {
    alignItems: 'center',
    backgroundColor: "lightgreen",
    padding: 18,
    borderRadius:5,
  }, buttontext: {
    fontWeight:"bold",
    color:"white"
  },label:{
    marginBottom:40,
    fontWeight:"bold",
    marginBottom:5
  },label2:{
    marginTop:20,
    fontWeight:"bold",
    color:"lightgreen",
    textAlign: 'center'
  }
});
