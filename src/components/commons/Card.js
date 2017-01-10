import React from 'react';
import {
	View,
	Modal,
	Text,
	TextInput
} from 'react-native';
import _ from 'lodash';


const Card = ( { data, style }) => {
	const {
		cardBox,
		cardTopic,
		cardData,
		cardUnit
	} = styles;

	return (
		<View style={ [cardBox, style] }>
			<Text style={ cardTopic }>
				{ data.title }
			</Text>
			<Text style={ cardData }>
				{ Math.round(data.content) }
			</Text>
			<Text style={ cardUnit }>
				{ data.unit }
			</Text>
		</View>
	);
};

const styles = {
	cardBox: {
		alignItems: 'center',
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: '#ffffff',
		alignSelf: 'stretch',
		marginTop: 10,
		borderRadius: 3,
		borderColor: '#eeeeee',
		borderWidth: 1,
		elevation: 10,
	},
	cardTopic: {
		color: '#9F9F9F',
		fontSize: 20
	},
	cardData: {
		fontSize: 50,
		lineHeight: 90,
		color: '#9F9F9F',
	},
	cardUnit: {
		color: '#9F9F9F',
		fontSize: 18
	},
}

export { Card };