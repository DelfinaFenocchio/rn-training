import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: '#1190FF',
		justifyContent: 'space-around',
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
		backgroundColor: 'purple',
	},
	box3: {
		backgroundColor: 'white',
	},
});
export default styles;