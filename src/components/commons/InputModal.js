import React from 'react';
import {
	View,
	Modal,
	Text,
	TextInput
} from 'react-native';


const InputModal = (props) => {
	const {
		title,
		message,
		placeholder,
		children,
		visible,
		onChangeText,
		value
	} = props
	const {
		modalView,
		modalBox,
		modalBoxWrap,
		modalBoxTitle,
		modalBoxInput,
		buttonGroupStyle 
	} = styles;

	return (
			<Modal 
					animationType={"slide"}
          transparent={false}
          visible={visible}
      >
				<View style={ modalView }>
					<View style={ modalBox }>
						<View style={ modalBoxWrap }>
					    <Text style={ modalBoxTitle }>{ title }</Text>
					    <Text>{ message }</Text>
					    <TextInput
						    autoCapitalize="none"
					    	style={ modalBoxInput }
					    	placeholder={ placeholder }
					    	onChangeText={ onChangeText }
					    	value={ value }
					    />
					  </View>
					  <View style={ buttonGroupStyle }>
					    { children }
					  </View>
					</View>
				</View>
      </Modal>
	);
};

const styles = {
	modalView: {
		flex: 1,
		backgroundColor: 'rgba(0,0,0,.9)',
		justifyContent: 'center',
	},
	modalBox: {
		backgroundColor: 'rgba(255,255,255,.9)',
		width: 300,
		borderRadius: 3,
		alignSelf: 'center',
	},
	modalBoxWrap: {
		paddingTop: 20,
		paddingLeft: 20,
		paddingRight: 20,
		alignSelf: 'stretch',
		alignItems: 'center'
	},
	modalBoxTitle: {
		fontSize: 22,
		lineHeight: 30,
	},
	modalBoxInput: {
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#dddddd',
		height: 35,
		padding: 10,
		marginTop: 10,
		width: 250,
		alignSelf: 'center'
	},
	buttonGroupStyle: {
		flexDirection:'row',
		flexWrap:'wrap'
	}
}

export { InputModal };