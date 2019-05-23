import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'column',
		backgroundColor: '#1190FF',
		justifyContent: 'space-around',
		alignItems: 'flex-end',
	},
	box: {
		margin: 10,
		height: 100,
		width: 100,
		alignContent: 'flex-start',
	},
	box1: {
		backgroundColor: 'red',
	},
	box2: {
		backgroundColor: 'white',
	},
	box3: {
		backgroundColor: 'purple',
	},
});
export default styles;