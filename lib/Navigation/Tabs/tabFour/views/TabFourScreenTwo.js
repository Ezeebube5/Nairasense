import React from 'react';
import { View, Text } from 'react-native';

export default class TabFourScreenTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Audio'}
  render() {
    return (
      <View
style={{
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      >
        <Text>{ 'Tab Four en Two' }</Text>
      </View>
    );
  }
}
