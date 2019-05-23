import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import styles from './ArticleStyles.js'

export default class App extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.box}>
					<View style={styles.header}>
						<Text style={styles.title}>
							Integer ullamcorper tincidunt lectus non dignissim. Phasellus eget mauris ut velit
            </Text>
						<View>
							<Text style={styles.authorText}>
								By
								<Text style={{ color: 'blue' }}>
									purus lacinia
             		</Text>
							</Text>
						</View>
					</View>
					<View style={styles.imageContainer}>
						<Image style={styles.image} source={require('./pictures/paisaje.jpg')} resizeMode='stretch' />
					</View>
					<View style={styles.body}>
						<Text >
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc maximus, nulla ut commodo sagittis,
							sapien dui mattis dui, non pulvinar lorem felis nec erat. Aliquam egestas, velit at condimentum placerat,
							sem sapien laoreet mauris, dictum porttitor lacus est nec enim. Vivamus feugiat elit lorem,
							eu porttitor ante ultrices id. Phasellus suscipit tellus ante, nec dignissim elit imperdiet nec.
          </Text>
					</View>
				</View>

			</View>
		);
	}
};
