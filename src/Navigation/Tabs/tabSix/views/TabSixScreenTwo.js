import React from 'react';
import { View, Text } from 'react-native';

export default class TabSixScreenTwo extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text>{ 'View and change settings' }</Text>
      </View>
    );
  }
}
