/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {TextInput, Image, View, ImageBackground, TouchableOpacity} from 'react-native';
import WeatherCard from './Components/WeatherCard';
import CityList from './Components/CityList';
import styles from './assets/styles/styles';

type Props = {};
export default class App extends Component<Props> {

  constructor(props) {
    super(props);
    this.state = {
      City: "",
      CityKey: "",
      Condition: "",
      Temperature: "",
      MinTemp: 0,
      MaxTemp: 0,
      text: "",
      suggestedCities: [],
      showCities: false
    };
    //this.setInitialWeather();
  }

  render() {
    return (
      <ImageBackground source={require('./assets/img/WeatherBackground.jpg')} style={styles.container}>
        <View style={styles.SectionStyle}>
          <TextInput style={{flex: 1, paddingLeft: 10}} onChangeText={(text) => {this.setState({text: text})}} value={this.state.text}/>
          <TouchableOpacity onPress={() => {this.searchCity()}}>
            <Image style={styles.ImageStyle} source={require('./assets/img/search.png')}></Image>
          </TouchableOpacity>
        </View>
        <View style={styles.CityList}>
          {this.state.showCities && <CityList cities={this.state.suggestedCities} getWeather={this.getWeather}/>}
        </View>
        <View style={styles.WC}>
          <WeatherCard cityName={this.state.City} conditions={this.state.Condition} temp={this.state.Temperature} minTemp={this.state.MinTemp} maxTemp={this.state.MaxTemp}/>
        </View>
      </ImageBackground>
    );
  }

  getWeather = (city, key) => {
    this.state.text = city;
    this.state.CityKey = key;
    this.state.City = city;

    // ACCUweather search cities API
    fetch("https://dataservice.accuweather.com/currentconditions/v1/" + this.state.CityKey + "?apikey=IPTpF47u8I2WwdSBdav2GrvcsODOi4zj",
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    )

    // Decode JSON
    .then((response) => response.json())

    // Set state with top 5 cities
    .then(function (res) {
      console.log(res);
      this.setState(
        {
          Temperature: res[0].Temperature.Metric.Value,
        }
      );
    }.bind(this))

    // Catch promise error
    .catch(function(err) {
      console.log(err);
    });
    fetch("https://dataservice.accuweather.com/forecasts/v1/daily/1day/" + this.state.CityKey + "?apikey=IPTpF47u8I2WwdSBdav2GrvcsODOi4zj&metric=true&details=true",
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    )

    // Decode JSON
    .then((response) => response.json())

    // Set state with top 5 cities
    .then(function (res) {
      this.setState(
        {
          MinTemp: res.DailyForecasts[0].Temperature.Minimum.Value,
          MaxTemp: res.DailyForecasts[0].Temperature.Maximum.Value,
        }
      );
      console.log(res);
    }.bind(this))

    // Catch promise error
    .catch(function(err) {
      console.log(err);
    });
    this.state.showCities = false;
  }

  searchCity() {
    // ACCUweather search cities API
    fetch("https://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=IPTpF47u8I2WwdSBdav2GrvcsODOi4zj&q=" + this.state.text,
      {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }
    )

    // Decode JSON
    .then((response) => response.json())

    // Set state with top 5 cities
    .then(function (res) {
      if (res.length == 0) {
        this.state.text = "";
        return;
      }
      else if (res.length == 1 && this.state.text.toLowerCase() == res[0].LocalizedName.toLowerCase()) {
        this.getWeather(this.state.text, res[0].Key);
      }
      else {
        var tempArr = res.length > 5 ? res.splice(5) : res;
        this.setState(
          {
            suggestedCities: tempArr,
            showCities: true
          }
        );
      }
    }.bind(this))

    // Catch promise error
    .catch(function(err) {
      console.log(err);
    });
  }
}


