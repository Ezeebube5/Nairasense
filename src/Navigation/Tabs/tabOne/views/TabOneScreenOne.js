import React, {Component} from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Container, Content,   } from 'native-base';

export default class TabOneScreenOne extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Trending'}
  render() {
    return (
      <Container>
<Text> Text</Text>
              </Container>

    );
  }
}
