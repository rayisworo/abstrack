import React, {Component} from 'react';
import { View, Text, TextInput} from 'react-native';
import { Field } from 'redux-form';
import InputField from '../components/formComponents/InputField';

class RegisterComponent extends Component{
    render(){
        const {...otherProps} = this.props;
        console.log(this.props);
        return(
            <View>
                <Text>
                    in register
                </Text>
                <Field
                    name="name"
                    component={InputField}
                    type="text"
                    label="name"
                    {...otherProps}
                />
            </View>
        )
    }
}

export default RegisterComponent;