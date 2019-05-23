import { StyleSheet, Platform } from 'react-native';

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
		...Platform.select({
      ios: {
        backgroundColor: 'gray',
      },
      android: {
        backgroundColor: 'green',
      },
    }),
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