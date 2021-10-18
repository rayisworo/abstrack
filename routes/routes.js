import React,{Component} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import WelcomeScreen from '../pages/screens/Welcome.screen';
import RegisterScreen from '../pages/screens/Register.screen';

const noHeaderConfig = {
    headerShown: false
}

class HomeRoutes extends Component{
    render(){
        const Stack = createNativeStackNavigator();
        return(
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="welcome" component={WelcomeScreen} options={noHeaderConfig}/>
                    <Stack.Screen name="register" component={RegisterScreen} options={noHeaderConfig}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}

export default HomeRoutes;