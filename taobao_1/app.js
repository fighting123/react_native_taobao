import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import AppNavigator from './src/router';

// 引入http 并注册到全局
import http from './src/utils/http'
global.http = http

export default class App extends Component {
    render() {
        return (
            <AppNavigator></AppNavigator>
        );
    }
}