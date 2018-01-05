import { StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { View } from 'react-native';
import Splash from '@containers/Splash';
import Welcome from '@containers/Welcome';
import { Colors, Fonts, Metrics } from '@theme/';

const MainNavigator = StackNavigator(
	{
		splash: { screen: Splash },
		welcome: { screen: Welcome }
	},
	{
		initialRouteName: 'splash',
		navigationOptions: {
			header: null,
			gesturesEnabled: false,
			cardStack: { gesturesEnabled: false }
		},
		headerMode: 'screen',
		lazyLoad: true
	}
);

export default MainNavigator;
