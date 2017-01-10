import React from 'react';
import {
	View,
	ActivityIndicator
} from 'react-native';


const ButtonDisabled = ({ short }) => {
	let { buttonDisabled } = styles;

	buttonDisabled = short ? { ...buttonDisabled, width: 200 } : { ...buttonDisabled, alignSelf: 'stretch' };
	
	return (
		<View style={buttonDisabled}>
			<ActivityIndicator />
		</View>
	);
};


const styles = {
	buttonDisabled: {
		marginTop: 20,
		borderRadius: 3,
		backgroundColor: '#dddddd',
		paddingLeft: 10,
		paddingRight: 10,
		paddingTop: 15,
		paddingBottom: 15,
	}
};

export { ButtonDisabled };