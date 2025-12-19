import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { ExplorationDashboard } from '@/features/exploration/screens/Dashboard';

const Stack = createStackNavigator();

export const ExplorationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="ExplorationDashboard" component={ExplorationDashboard} />
        </Stack.Navigator>
    );
};
