import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <ScrollView horizontal={true}>
        <View style={styles.container}>
          <View style={styles.container1} >
            <Text style={styles.text3}>text1
              <Text style={styles.text1}>
                text1text1text1text1text1
              </Text>
            </Text>
          </View>
          <View style={styles.container2} >
            <Text style={styles.text2}>text2text2text2text2text2</Text>
          </View>
          <View style={styles.container3} >
            <Text style={styles.text1}>text3
              <Text style={styles.text3}>
                text1text1text1text1text1
              </Text>
            </Text>
          </View>
        </View>
      </ScrollView>
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
  },
  container1: {
    backgroundColor: '#dda0dd',
    width: 100,
    height: 130,
  },
  container2: {
    backgroundColor: '#ffc0cb',
    width: 130,
    height: 160,
    borderRadius: 9,
  },
  container3: {
    backgroundColor: '#b0e0e6',
    width: 160,
    height: 190,
  },
  text1: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  text2: {
    fontSize: 30,
    fontWeight: '300',
  },
  text3: {
    fontSize: 45,
    fontWeight: '500',
  },

});
