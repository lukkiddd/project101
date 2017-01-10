import React, { Component } from 'react';
import {
	View,
	Text,
	TextInput,
	Alert
} from 'react-native';
import { ButtonDisabled, Button } from './commons';
import { connect } from 'react-redux';

class LoginForm extends Component {

	render() {
		return (
			<View style={styles.viewStyle}>
				<View style={styles.loginWrap}>
					<Text style={styles.headerText}>เข้าสู่ระบบ</Text>
					<Text style={styles.subText}>ยินดีต้อนรับ</Text>
					<View style={styles.inputWrapStyle}>
						<TextInput
							autoCapitalize="none"
							placeholder="nurse@welse.com"
							style={styles.inputTextStyle}
						/>
					</View>
					<View style={styles.inputWrapStyle}>
						<TextInput
							secureTextEntry
							autoCapitalize="none"
							placeholder="password"
							style={styles.inputTextStyle}
						/>
					</View>
					<Button type="success" >
						เข้าสู่ระบบ
					</Button>
				</View>
			</View>
		)
	}
}

const styles = {
	viewStyle: {
		flex: 1,
		justifyContent: 'center',
		marginTop: -64,
		flexDirection: 'column',
		alignItems: 'center'
	},
	loginWrap: {
		width: 300,
	},
	headerText: {
		fontSize: 30,
		textAlign: 'center'
	},
	subText: {
		textAlign: 'center',
		marginBottom: 10
	},
	inputWrapStyle: {
		borderBottomColor: '#dddddd',
		borderBottomWidth: 1,
		borderStyle: 'solid',
		marginTop: 5
	},
	inputTextStyle: {
		fontSize: 18,
		height: 50,
	},
}

// const mapStateToProps = ({auth}) => {
// 	const { email, password, loading, error } = auth;
// 	return { email, password, loading, error }
// }

// export default connect(mapStateToProps, { emailChanged, passwordChanged, loginUser })(LoginForm);
export default LoginForm;



