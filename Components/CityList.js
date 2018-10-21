/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import CitySnippet from './CitySnippet';

export default class CityList extends Component<Props> {
  render() {
    console.log(this.props.getWeather);
    return (
      <View >
        {this.props.cities.map(function(city, index){
          return (
            <TouchableOpacity key={index} onPress={() => {this.props.getWeather(city.LocalizedName, city.Key)}}>
              <CitySnippet key={index} city={city.LocalizedName}/>
            </TouchableOpacity>
          );
        }.bind(this))}
      </View>
    );
  }
}
