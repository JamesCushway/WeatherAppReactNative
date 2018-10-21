import {StyleSheet} from "react-native";

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  WC: {
    position: 'absolute',
    zIndex: 1,
    bottom: 10
  },
  CityList: {
    flexDirection: 'column',
    alignItems: 'center',
    top: 20,
  },
  SectionStyle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: .5,
    borderColor: '#000',
    height: 40,
    borderRadius: 5 ,
    margin: 10,
    top: 30
  },
  ImageStyle: {
    padding: 10,
    margin: 5,
    height: 25,
    width: 25,
    resizeMode : 'stretch',
    alignItems: 'center'
  },
});