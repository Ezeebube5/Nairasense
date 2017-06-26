import React from 'react';
import { View, Text } from 'react-native';

export default class TabTwoScreenTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Videos'}
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
        <Text>{ 'Tab Two Screen Two' }</Text>
      </View>
    );
  }
}
