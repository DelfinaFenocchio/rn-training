import React, { Component } from 'react';
import { View } from 'react-native';
import styles from './Styles.js'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={[styles.box, styles.box1]} />
				<View style={[styles.box, styles.box2]} />
				<View style={[styles.box, styles.box3]} />
			</View>
		);
	}
};