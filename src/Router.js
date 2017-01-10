import React from 'react';
import { Text, View } from 'react-native';
import { Scene, Router, Actions } from 'react-native-router-flux';
import LoginForm from './components/LoginForm'

const RouterComponent = () => {
	return (
		<Router navigationBarStyle={{backgroundColor:'#ffffff', borderBottomColor:'#E3E3E3'}} sceneStyle={{  backgroundColor:'#F9FAFC' }} initial>
			<Scene key="auth">
				<Scene key="login" component={LoginForm} title="Login" />
			</Scene>
		</Router>
	)
};

export default RouterComponent;