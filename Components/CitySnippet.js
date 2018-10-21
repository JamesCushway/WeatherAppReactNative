/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class CitySnippet extends Component<Props> {
  render() {
    return (
      <View style={styles.snippet}>
        <Text style={styles.city}>{this.props.city}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  snippet: {
    backgroundColor: '#FFF',
    width: 350,
    height: 30,
    borderBottomColor: 'gray',
    borderLeftColor: 'gray',
    borderRightColor: 'gray',
    borderWidth: 1,
  },
  city: {
    position: 'absolute',
    left: 10,
    fontSize: 14,
    top: 8,
    zIndex: 1
  }
});
