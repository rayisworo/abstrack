import React, {Component} from 'react';
import {View, Text, TextInput as TextField} from 'react-native';
// import {TextField} from '@material-ui/core';

class InputField extends Component {
    render(){
        const {label, ...inputProps} = this.props;
        return(
            <View>
                <Text>
                    {label}
                </Text>
                <TextField
                    // onChangeText={onChange}
                    {...inputProps}
                />
            </View>
        );
    }
}

export default InputField;