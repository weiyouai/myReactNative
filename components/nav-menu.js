//导航
import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native';

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
    android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class navContainer extends Component<{}>{
    render(){
        return (
            <div>{this.props.name}</div>
        );
    }
}


export default class myNav extends Component<{}> {
    render() {
        return (
            <div style={styles.bottom}>
                <ul>
                    <li>

                    </li>
                </ul>
            </div>
        );
    }
}

const styles = StyleSheet.create({
    bottom:{
        position:'fix',
        bottom:0,
        left:0,
        right:0,
        height:100,
        fontSize:18,
        textAlign:'center',
        color:'red'
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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
