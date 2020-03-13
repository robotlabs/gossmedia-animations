import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';

import LottieView from 'lottie-react-native';
import styles from './app-styles'

export class App extends Component {
  state = {
    status: 'MENU'
  }
  componentDidMount() {
    if (this.animation)
    this.animation.play();
    // this.animation2.play();
    // this.animation3a.play();
    // this.animation3b.play();
    // this.animation3c.play();
    // Or set a specific startFrame and endFrame with:
    // this.animation.play();
    // this.animation.speed = 0.01;

  }
  render() {
    const {status} = this.state
    return (
      <SafeAreaView>
        <Button
          style={{position: 'absolute', top: 200, marginTop: 200}}
          title="Press me"
          onPress={() => Alert.alert('Simple Button pressed')}
        />
    </SafeAreaView>
    );
  }
  
};

// const styles = StyleSheet.create({
//   body: {
//     backgroundColor: Colors.white,
//   },
//   sectionContainer: {
//     marginTop: 32,
//     paddingHorizontal: 24,
//   }
// });

export default App;
