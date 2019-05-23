import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Container</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#dda0dd',
    alignItems: 'center',
    justifyContent: 'center',
    width:50,
    height:100,
    borderRadius: 4,
  },
});
