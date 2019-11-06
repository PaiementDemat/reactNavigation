'use strict';

import * as React from 'react'
import QRCode from 'react-native-qrcode';

import {
    AppRegistry,
    StyleSheet,
    View,
    TextInput,
    Text,
    Dimensions
} from 'react-native';

const { width } = Dimensions.get('screen');

class AskPayment extends React.Component {
    state = {
        text: 'https://MyMerchantUrl.PaiementDemat.com/',
    };

    URL = {
        url: 'https://MyMerchantUrl.PaiementDemat.com/',
        type: 'ask?',
        price: 'price=',
        currency: '&currency=€'
    };

    render() {
        return (
            <View style={{ flex: 1 }}>

                <View style={{ height: 65, backgroundColor: 'steelblue' }} >
                    <Text style={{ fontSize: 15, marginTop: 35, marginLeft: 50, color: 'white' }}> Veuillez scanner le Code Qr pour payer</Text>
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter Price"
                        value={this.state.price}
                        keyboardType="number-pad"
                        onChangeText={(code) => {
                            this.setState({ price: code });
                            this.URL.price = 'price=' + code;
                            this.state.text = this.URL.url + this.URL.type + this.URL.price + this.URL.currency;
                        }}
                    />

                    <TextInput
                        style={styles.input}
                        onChangeText={(text) => this.setState({ text: text })}
                        value={this.state.text}
                    />

                        
                    <QRCode
                        value={this.URL.url + this.URL.type + this.URL.price + this.URL.currency}
                        size={200}
                        bgColor='black'
                        fgColor='white'
                        style={StyleSheet.absoluteFillObject} />

                </View>
            </View>
        );
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center'
    },

    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10,
        borderRadius: 5,
        padding: 5,
    }
});

AppRegistry.registerComponent('AskPayment', () => AskPayment);

module.exports = AskPayment;