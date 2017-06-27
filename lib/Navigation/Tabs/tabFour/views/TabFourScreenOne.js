import React from 'react';
import { View, Text } from 'react-native';

export default class TabFourScreenOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Video'}
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
        <Text>{ 'Tab four Screen One' }</Text>
      </View>
    );
  }
}
