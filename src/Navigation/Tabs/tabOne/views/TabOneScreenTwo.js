import React from 'react';
import { View, Text } from 'react-native';

export default class TabOneScreenTwo extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Market Report'}
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
        <Text>{ 'Tab One Screen Two' }</Text>
      </View>
    );
  }
}
