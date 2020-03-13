import React, {Component} from 'react';
import {
  Button,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity
} from 'react-native';

import LottieView from 'lottie-react-native';
// import styles from './app-styles'

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
  componentDidUpdate() {
    if (this.animation)
    this.animation.play();
  }
  goAnim = (anim) => {
    this.setState({
      status: 'ANIM',
      anim: anim
    })
  }
  render() {
    
    const {status, anim} = this.state
    console.log(':: => REDNDEDR <= ::', anim, status)
    return (
      <View style={styles.cc}>
        {status==='MENU' &&
        <View>
        <ImgBack></ImgBack>
        <View style={styles.buttonContainer}>
    
          <BT
            anim='anim-07'
            action={this.goAnim}
            title='ANIM 07'/>
          <BT
            anim='anim-09'
            action={this.goAnim}
            title='ANIM 09'/>
          <BT
            anim='anim-a1'
            action={this.goAnim}
            title='ANIM A1'/>
          <BT
            anim='anim-aa001'
            action={this.goAnim}
            title='ANIM AA-001'/>
          {/* <BT
            anim='anim-aa002'
            action={this.goAnim}
            title='ANIM AA-002'/> */}
          {/* <BT
            anim='anim-aa003'
            action={this.goAnim}
            title='ANIM AA-003'/> */}
          <BT
            anim='anim-aa004'
            action={this.goAnim}
            title='ANIM AA-004'/>
          <BT
            anim='anim-aa005'
            action={this.goAnim}
            title='ANIM AA-005'/>
          <BT
            anim='anim-aa006'
            action={this.goAnim}
            title='ANIM AA-006'/>
          <BT
            anim='anim-aa007'
            action={this.goAnim}
            title='ANIM AA-007'/>
          <BT
            anim='anim-aa008'
            action={this.goAnim}
            title='ANIM AA-008'/>
          <BT
            anim='anim-aa009'
            action={this.goAnim}
            title='ANIM AA-009'/>
          <BT
            anim='anim-aa010'
            action={this.goAnim}
            title='ANIM AA-010'/>
          <BT
            anim='anim-aa011'
            action={this.goAnim}
            title='ANIM AA-011'/>
          <BT
            anim='anim-aa012'
            action={this.goAnim}
            title='ANIM AA-012'/>
        </View>
      </View>
        }
        {status==='ANIM' &&
        <TouchableOpacity
          onPress={() => {
            this.setState({
              status: 'MENU'
            })
          }}>
           <Image 
            style={{ position: 'absolute', width: '100%', height: '100%'}}
            source={require('./imgs/img-1.png')}>
          </Image> 
          {anim === 'anim-03' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1.2}
              loop
                source={require('./test-anims/anim-03/data.json')}
            />
          }
          {anim === 'anim-07' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1.2}
              loop
                source={require('./test-anims/anim-07/data.json')}
            />
          }
          {anim === 'anim-09' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1.2}
              loop
                source={require('./test-anims/anim-09/data.json')}
            />
          }
          {anim === 'anim-a1' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1.2}
              loop
                source={require('./test-anims/anim-a1/data.json')}
            />
          }
          {anim === 'anim-aa001' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1.2}
              loop
                source={require('./test-anims/anim-aa001/data.json')}
            />
          }
          {anim === 'anim-aa002' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1.2}
              loop
                source={require('./test-anims/anim-aa002/data.json')}
            />
          }
          {anim === 'anim-aa003' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa003/data.json')}
            />
          }
          {anim === 'anim-aa004' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa004/data.json')}
            />
          }
          {anim === 'anim-aa005' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa005/data.json')}
            />
          }
          {anim === 'anim-aa006' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa006/data.json')}
            />
          }
          {anim === 'anim-aa007' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa007/data.json')}
            />
          }
          {anim === 'anim-aa008' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa008/data.json')}
            />
          }
          {anim === 'anim-aa009' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa009/data.json')}
            />
          }
          {anim === 'anim-aa010' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa010/data.json')}
            />
          }
          {anim === 'anim-aa011' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa011/data.json')}
            />
          }
          {anim === 'anim-aa012' &&
            <LottieView
              style={styles.img}
              ref={animation => {
                this.animation = animation;
              }}
              speed={1}
              loop
                source={require('./test-anims/anim-aa012/data.json')}
            />
          }
        </TouchableOpacity>
        }
      </View>
    );
  }
  
};

const ImgBack = () => {
  return <Image 
    style={styles.img}
    source={require('./imgs/img-1.png')}>
  </Image> 
}
const BT = (props) => {
  return (
    <View style={styles.button}>
      <Button
        color='black'
        title={props.title}
        onPress={() => {
          props.action(props.anim)
          }
        }
      />
    </View>
  )
}
const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  container: {
    flex: 1,
    alignItems: 'center'
  },
  img: {
    width: '100%',
    height: '100%'
  },
  buttonContainer: {
    position:'absolute',
    marginTop: 20,
    padding: 20,
    top: 50,
    left: '0%',
    width: '100%',
    
  },
  button: {
    marginTop: 20,
    backgroundColor: 'yellow',
    textAlign: 'center'
  },

  test: {
    position: 'absolute',
    top: 100,
    color: 'red',
    marginTop: '200',
    marginVertical: 200,
    position: 'absolute',
    bottom:0,

    top: 300
  },
  box3: {
    position: 'absolute',
    top: 120,
    left: 220,
    width: 100,
    height: 100,
    backgroundColor: 'green'
  }
});

export default App;
