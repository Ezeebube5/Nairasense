import React from 'react';
import { View, Text } from 'react-native';

export default class TabTwoScreenThree extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Podcasts'}
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
        <Text>{ 'Tab Two Screen One' }</Text>
      </View>
    );
  }
}
