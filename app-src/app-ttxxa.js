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
      <View style={styles.cc}>
        {status==='MENU' &&
        <View
          >
          {/* <Image 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%'}}
          source={require('./imgs/img-1.png')}></Image>  */}

          <Button
            style={{ position: 'absolute', top: 100, left: 100, width: 100, height: 100, backgroundColor: 'green'}}
            title="Press me"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
        }
        {status==='ANIM' &&
        <View>
         <Image 
          style={{ position: 'absolute', width: '100%', height: '100%'}}
          source={require('./imgs/img-1.png')}></Image> 
        <LottieView
          style={{right: 0, width: '100%', height: '100%',top: 0}}
          // style={{flex:1}} 
          ref={animation => {
            this.animation = animation;
          }}
          // progress={0.7}
          speed={1.2}
          loop
            // autoPlay
            // source={require('./animations/LottieWalkthrough.json')}
            // source={require('./test-anims/anim-01/data.json')}
            source={require('./test-anims/anim-04/data.json')}
          />
          </View>
 
        }
       

      </View>
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
