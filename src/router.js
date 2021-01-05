import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';

import Home from './pages/Home';
import Datail from './pages/Datail';

const Stack = createStackNavigator();

function Routes(){
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="home" component={Home} />
                <Stack.Screen name="datail" component={Datail} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;