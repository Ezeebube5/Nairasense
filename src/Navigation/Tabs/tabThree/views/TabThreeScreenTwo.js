import React from 'react';
import { View, Text } from 'react-native';

export default class TabThreeScreenTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Investing'}
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
        <Text>{ 'Tab Three Screen Two' }</Text>
      </View>
    );
  }
}
