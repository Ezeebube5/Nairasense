import React from 'react';
import { View, Image } from 'react-native';
import { Images } from '../Themes';

// Add Actions - replace 'Your' with whatever your reducer is called :)
// import YourActions from '../Redux/YourRedux'

// Styles
import styles from './Styles/LoadingScreenStyle';

class LoadingScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Image source={Images.inlogo} style={{ alignSelf: 'center', resizeMode: 'contain' }} />
      </View>
    );
  }
}

export default LoadingScreen;
