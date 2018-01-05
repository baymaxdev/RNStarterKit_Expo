import React, { Component } from 'react';
import { View, TouchableOpacity, FlatList, Image, Text } from 'react-native';
import { connect } from 'react-redux';
import I18n from 'react-native-i18n';
import { Styles, Colors, Metrics, Fonts } from '@theme/';
import Types from '@actions/actionTypes';

class Splash extends Component {
	constructor(props) {
		super(props);
		this.state = {
			
		};
	}

	componentDidMount() {
		
	}

	render() {
		return (
			<View style={[ Styles.fullScreen, { flex: 1, backgroundColor: Colors.brandSecondary } ]}>
				<View style={{ flex: 1, backgroundColor: 'blue' }} />
			</View>
		);
	}
}

function mapDispatchToProps(dispatch) {
	return {
		dispatch
	};
}

function mapStateToProps(state) {
	const globals = state.get('globals');
	return { globals };
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
