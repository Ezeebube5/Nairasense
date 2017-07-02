import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

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
        <TouchableOpacity
         onPress={ () => this.props.navigation.goBack() }>
         <Icon name="list"
          size={30}
        />
    </TouchableOpacity>
         <TouchableOpacity
          onPress={ () => this.props.navigation.navigate('TabTwoScreenThree') }>
         <Icon name="list"
          size={30}
        />
      </TouchableOpacity>

      </View>
    );
  }
}
