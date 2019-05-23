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
		width: 100,
		height: 100,
	},
	box1: {
		alignSelf: 'flex-start',
		backgroundColor: 'red',
	},
	box2: {
		alignSelf: 'center',
		backgroundColor: 'white',
	},
	box3: {
		alignSelf: 'flex-end',
		backgroundColor: 'purple',
	},
});
export default styles;