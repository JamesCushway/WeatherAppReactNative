/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

export default class WeatherCard extends Component<Props> {
  render() {
    return (
      <View style={styles.card}>
        <View style={styles.city}>
          <Text style={styles.cityText}>{this.props.cityName}</Text>
          <Text style={styles.conditions}>{this.props.conditions}</Text>
        </View>
        <View style={styles.temp}>
          <Text style={styles.tempReading}>{this.props.temp}</Text>
          <Text style={styles.tempRange}>{this.props.minTemp} - {this.props.maxTemp}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  card: {
    backgroundColor: '#F5FCFF',
    width: 300,
    height: 300,
    borderRadius: 10
  },

  city: {
    top: 10,
    left: 10
  },

  cityText: {
    fontSize: 16,
    fontWeight: "500"
  },

  conditions: {
    fontSize: 14,
    fontWeight: "300",
    marginTop: 5
  },

  temp: {
    width: 100,
    alignItems: 'center',
    height: 50,
    left: 100,
    top: 100
  },

  tempReading: {
    fontSize: 20,
    fontWeight: "500",
    top: 0
  },

  tempRange: {
    fontSize: 14,
    fontWeight: "200",
  },
});
