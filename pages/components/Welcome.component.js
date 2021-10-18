import React, {Component} from 'react';
import { View, Text } from 'react-native';
import {app_name} from '../../configs/app.config.json';
import styles from './Welcome.style';

class WelcomeComponent extends Component{
    render(){
        const {handleLogin, handleRegister} = this.props;
        return(
            <View style={styles.container}>
                <Text style={styles.title}>
                    {app_name}
                </Text>
                <View style={styles.additionalContainer}>
                    <Text style={styles.additionalText} onPress={handleLogin}>
                        Login
                    </Text>
                    <Text style={styles.additionalText} onPress={handleRegister}>
                        Register
                    </Text>
                </View>
            </View>
        )
    }
}

export default WelcomeComponent;