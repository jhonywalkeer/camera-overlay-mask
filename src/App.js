import React, {Component} from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {RNCamera} from 'react-native-camera';
import CameraOverlay from './components/CameraOverlay';
import SmartPhone from './assets/images/smartphone.png';

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          style={styles.camera}
          ref={ref => {
            this.camera = ref;
          }}
          type={RNCamera.Constants.Type.front}
        />
        <CameraOverlay />
        <View style={styles.cameraElements}>
          <View style={{flex: 6}} />
          <View style={{flex: 4, alignItems: 'center'}}>
            <Image style={styles.smartPhoneImage} source={SmartPhone} />
            <Text style={{fontWeight: '700'}}>Você gostou da foto?</Text>
            <Text style={{textAlign: 'center'}}>
              Agite seu telefone para a direita e vamos continuar, ou para
              esquerda e tiraremos outra foto.
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  camera: {
    position: 'absolute',
    flex: 1,
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
  cameraElements: {
    position: 'absolute',
    zIndex: 2,
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    paddingHorizontal: 20,
  },
  smartPhoneImage: {
    width: 50,
    resizeMode: 'contain',
  },
});
