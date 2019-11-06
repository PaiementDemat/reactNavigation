import React from 'react';
import {Platform,Dimensions} from 'react-native';
import {createAppContainer} from 'react-navigation';
import { createDrawerNavigator} from 'react-navigation-drawer'
import HomeScreen from '../screens/HomeScreen';
import camera from '../screens/camera';
import qrgen from '../screens/qrgen';


const WIDTH= Dimensions.get('window').width;

const DrawerConfig={
	drawerWidth:WIDTH*0.83,
}

const DrawerNavigator = createDrawerNavigator({
	Accueil:{
		screen:HomeScreen
	},
	Payer:{
		screen:camera
	},
	Demander:{
		screen:qrgen
	}
},
	DrawerConfig 
);
export default createAppContainer(DrawerNavigator);