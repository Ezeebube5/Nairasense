import React from 'react';
import { View, Text } from 'react-native';

export default class TabFiveScreenOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Forum'}
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
        <Text>{ 'Forum on the way' }</Text>
      </View>
    );
  }
}
