/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import WeatherCard from './Components/WeatherCard';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props);
    this.state = {City: "", Condition: "", WC: <Text>Hello</Text>};
  }
  render() {
    var that = this;
    fetch("https://api.aerisapi.com/observations/seattle,wa?client_id=qhM2hWLTX0xOQ9Gsaxl7E&client_secret=gcIxmvPKrF4TEL3FZcYV67unq8eGlawkZXnAZoPI",
      {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    ).then((response) => response.json())
      .then(function(responseJson){
        that.setState({WC: <WeatherCard cityName={responseJson.response.place.name} conditions={responseJson.response.ob.weather}/>});

      }).catch((error) => {
      console.error(error);
    });

    return (
      <View>
        {this.state.WC}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
