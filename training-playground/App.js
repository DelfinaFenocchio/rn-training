import React, { Component } from 'react'
import { View, ScrollView } from 'react-native'
import Article from './Article.js'

export default class App extends Component {
	render() {
		return (
			<ScrollView horizontal={true}>
				<View >
					<Article />
				</View>
			</ScrollView>

		)
	}
}