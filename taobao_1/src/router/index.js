import React, {Component} from 'react';
import {StackNavigator, TabNavigator} from 'react-navigation'
import Icon from 'react-native-vector-icons/Ionicons';
import {Dimensions, Platform} from 'react-native';

import {
    Cart,
    Home,
    Login,
    My
} from '../containers'
const {height, width} = Dimensions.get('window');
const tabBar = TabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarLabel: '主页',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-home" size={28} color={tintColor}/>),
            header: null
        }
    },
    Cart: {
        screen: Cart,
        navigationOptions: {
            tabBarLabel: '购物车',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-cart" size={28} color={tintColor}/>),
            header: null
        }
    },
    My: {
        screen: My,
        navigationOptions: {
            tabBarLabel: '我的',
            tabBarIcon: ({tintColor}) => (<Icon name="ios-person" size={28} color={tintColor}/>),
            header: null
        }
    }
}, {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    animationEnabled: false,
    lazy: true,
    backBehavior: 'initialRoute',
    tabBarOptions: {
        style: {
            height: (Platform.OS === 'ios')
                ? width / 8
                : width / 7 - 5,
            backgroundColor: '#fff',
            borderTopWidth: 0.5,
            borderColor: '#e4e4e4'
        },
        labelStyle: {
            fontSize: width / 35
        },
        iconStyle: {
            height: width / 20
        },
        indicatorStyle: {
            height: 0
        },
        scrollEnabled: false,
        activeBackgroundColor: '#fff',
        activeTintColor: '#ff6600',
        inactiveBackgroundColor: '#fff',
        inactiveTintColor: '#444444',
        showLabel: true,
        showIcon: true
    }
})
const AppNavigator = StackNavigator({
    Home: {
        screen: tabBar
    },
    Login: {
        screen: Login
    }
})

export default AppNavigator;