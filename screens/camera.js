

import * as React from 'react';
import { Text, View, TouchableOpacity,StyleSheet,Dimensions,Button } from 'react-native';
import Constants from 'expo-constants';
import * as Permissions from 'expo-permissions';

import { BarCodeScanner } from 'expo-barcode-scanner';

const { width}=Dimensions.get('screen');

export default class camera extends React.Component {
  state = {
    hasCameraPermission: null,
    scanned: false,
  };

  async componentDidMount() {
    this.getPermissionsAsync();
  }

  getPermissionsAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });
  };

  render() {
    const { hasCameraPermission, scanned } = this.state;

       const leftTop={
            borderLeftWidth:3,
            borderTopWidth:3,
            borderColor:'white'
          };
          const leftBottom={
             borderLeftWidth:3,
            borderBottomWidth:3,
            borderColor:'white'
          };
          const rightTop={
             borderRightWidth:3,
            borderTopWidth:3,
            borderColor:'white'
          };
          const rightBottom={
             borderRightWidth:3,
            borderBottomWidth:3,
            borderColor:'white'
          };

    if (hasCameraPermission === null) {
      return <Text>Requesting for camera permission</Text>;
    }
    if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    }
    return (
   <View style={{ flex: 1 }}>
       <View style={{height: 65, backgroundColor: 'steelblue'}} >

                <Text style={{ fontSize: 15, marginTop: 35, marginLeft:50 , color: 'white' }}> Veuillez scanner le Code Qr pour payer</Text>
         </View>
      <View style={{flex: 1,}}>
         
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
    <View style={{...StyleSheet.absoluteFill,alignItems:'center',justifyContent:'center'}}>
                  <View style={{width:width/2,height:width/2}}>
                      <View style={{flex:1,flexDirection:'row'}}>
                         <View style={{flex:1,...leftTop}}></View>
                         <View style={{flex:1}}></View>
                         <View style={{flex:1,...rightTop}}></View>
                      </View>
                       <View style={{flex:1}}></View>
                        <View style={{flex:1,flexDirection:'row'}}>
                         <View style={{flex:1,...leftBottom}}></View>
                         <View style={{flex:1}}></View>
                         <View style={{flex:1,...rightBottom}}></View>
                      </View>



                  </View>
                  <View >
 {scanned && (
          <Button title={'Appuyer pour scanner à nouveau'} color={'white'}  onPress={() => this.setState({ scanned: false })} />
        )}
          </View>
         </View>
       

      </View>
  </View>
    );
  }

  handleBarCodeScanned = ({ type, data }) => {
    this.setState({ scanned: true });
    alert(`Bar code with type ${type} and data ${data} has been scanned!`);
  };
}