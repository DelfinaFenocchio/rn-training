import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'white',
		width: 900,
		flexDirection: 'column',
	},
	box: {
		padding: 20,
		margin: 10,
		borderColor: 'black',
		borderWidth: 0.5,
		borderRadius: 4,
		height: 200,
	},
	header: {
		width: '70%',
	},
	title: {
		fontWeight: 'bold',
	},
	body: {
		width: '70%',
	},
	imageContainer: {
		alignSelf: 'flex-end',
		height: 150,
		width: '30%'
	},
	image: {
		height: 140,
		width: undefined,

	},
	authorText: {
		fontWeight: 'bold',
		fontSize: 10,
	},
});
export default styles;