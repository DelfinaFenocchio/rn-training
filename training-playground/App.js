import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image style={styles.image} source={require('./pictures/paisaje.jpg')} />
        <Image source={{ uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png' }}
          style={{ width: 100, height: 130 }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    width: 200,
    height: 200,
  },
  image: {
    width: 150,
    height: 120,
  }
});
