import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { FoundationDashboard } from '@/features/foundation/screens/Dashboard';

const Stack = createStackNavigator();

export const FoundationStack = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="FoundationDashboard" component={FoundationDashboard} />
        </Stack.Navigator>
    );
};
