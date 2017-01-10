import React from 'react';
import {
	Text,
	View,
	TouchableOpacity
} from 'react-native';


const Button = ({ type, label, short, half, onPress, children, style }) => {
	let { viewButton, buttonStyle, buttonText } = styles;

	buttonStyle = (type == "success") ? { ...buttonStyle, backgroundColor: "#00D378" } : buttonStyle;
	buttonStyle = (type == "default") ? { ...buttonStyle, backgroundColor: "#A7A7A7" } : buttonStyle;
	buttonStyle = short ? { ...buttonStyle, width: 200 } : { ...buttonStyle, alignSelf: 'stretch' };
	viewButton = half ? { ...viewButton, justifyContent: 'flex-end',flex: .5,} : viewButton;
	return (
		<View style={[ viewButton ]}>
			<TouchableOpacity onPress={onPress} style={ [buttonStyle,style] }>
				<Text style={ buttonText }>{ children }</Text>
			</TouchableOpacity>
		</View>
	);
};

const styles = {
	viewButton: {
		alignItems: 'center',
		alignSelf: 'stretch'
	},
	buttonStyle: {
		marginTop: 20,
		borderRadius: 3,
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 15,
		paddingBottom: 15,
		backgroundColor: '#3189FF'
	},
	buttonText: {
		fontSize: 16,
		color: '#ffffff',
		textAlign: 'center'
	},
};

export { Button };