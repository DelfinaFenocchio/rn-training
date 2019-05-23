import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.container1} >
            <Text>Container1</Text>
          </View>
          <View style={styles.container2} >
            <Text>Container2</Text>
          </View>
          <View style={styles.container3} >
            <Text>Container3</Text>
          </View>
          <View style={styles.container1} >
            <Text>Container1</Text>
          </View>
          <View style={styles.container2} >
            <Text>Container2</Text>
          </View>
          <View style={styles.container3} >
            <Text>Container3</Text>
          </View>
          <View style={styles.container1} >
            <Text>Container1</Text>
          </View>
          <View style={styles.container2} >
            <Text>Container2</Text>
          </View>
          <View style={styles.container3} >
            <Text>Container3</Text>
          </View>

        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    backgroundColor: '#dda0dd',
    width: 70,
    height: 100,
  },
  container2: {
    backgroundColor: '#ffc0cb',
    width: 100,
    height: 130,
    borderRadius: 9,
  },
  container3: {
    backgroundColor: '#b0e0e6',
    width: 130,
    height: 160,
  },

});
