import * as React from 'react';
import { useState, useEffect } from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Home from './components/Home';
import Login from './components/Login';
import rootStyles from './assets/css/main';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';

const Nav = createStackNavigator();



function AppNavigator() {

    const [isFontLoaded, setIsFontLoaded] = useState(false);

    useEffect(() => {
        const loadFont = async () => {
            await Font.loadAsync({
                'dongleBold': require('./assets/fonts/Dongle-Bold.ttf'),
                'dongleRegular': require('./assets/fonts/Dongle-Regular.ttf'),
            });
            setIsFontLoaded(true);
        };

        loadFont();
    }, []);

    if (!isFontLoaded) {
        return null;
    }

    return (
        <NavigationContainer style={rootStyles.body}>
            <Nav.Navigator screenOptions={{ headerShown: false }}>
                <Nav.Screen name="Login" component={Login} />
                <Nav.Screen name="Home" component={Home} />
            </Nav.Navigator >
        </NavigationContainer >

    );

}

export default AppNavigator;