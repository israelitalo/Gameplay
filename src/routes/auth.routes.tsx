import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import { Home } from '../screens/Home';
import { AppointmentDatail } from '../screens/AppointmentDatail';
import { AppointmentCreate } from '../screens/AppointmentCreate';

import { theme } from '../global/styles/themes';

const { Navigator, Screen} = createStackNavigator();

export function AuthRoutes() {
    return (
        <Navigator
            headerMode="none"
            screenOptions={{
                cardStyle: {
                    backgroundColor: theme.colors.secondary100
                }
            }}
        >
            <Screen name="Home" component={Home} />
            <Screen name="AppointmentDatail" component={AppointmentDatail} />
            <Screen name="AppointmentCreate" component={AppointmentCreate} />
        </Navigator>
    );
}