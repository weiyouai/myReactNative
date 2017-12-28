import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  Image,
  View,Button,Alert,CheckBox,Switch,TextInput
} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});
const onButtonPress = () => {
  Alert.alert('Button has been pressed!');
};
const pageInfo = {
  title:'登录',
  checkInfo:'自动登录'
};
let autoLogin = false;
const autoLoginChange = (value)=>{
  Alert.alert('复选框改变：'+value);
  autoLogin = value;
};
export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.centerView}>
          <Image
              style={styles.icon}
              source={require('./images/big_logo.png')}
          />
        </View>
        <View style={styles.inputView}>
          <TextInput multiline = {true} placeholder ="用户名" />
          <TextInput multiline = {true} placeholder ="密码" />
          <View style={{flexDirection: 'row',marginBottom:20}}>
            <CheckBox value={autoLogin} onValueChange={autoLoginChange} />
            <Text style={{textAlignVertical:'center'}}>自动登录</Text>
          </View>

          <Button
              onPress={onButtonPress}
              title="登录"
              style={styles.loginBtn}
              accessibilityLabel="login"
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerView:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputView:{
    margin:10
  },
  loginBtn:{
    marginTop:20,
    marginBottom:20
  },
  textInput:{
    width:100
  },
  icon:{
    //width:200
  },
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  }
});
