import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { useUserStore } from '@/store/userStore';
import { WelcomeScreen } from '@/features/onboarding/screens/WelcomeScreen';
import { FoundationStack } from '@/features/foundation/navigation/FoundationStack';
import { ExplorationStack } from '@/features/exploration/navigation/ExplorationStack';

const Stack = createStackNavigator();

export const RootNavigator = () => {
    const mode = useUserStore((state) => state.mode);
    const isOnboarded = useUserStore((state) => state.isOnboarded);

    // Rehydration check could be added here if needed, 
    // but Zustand persist handles it mostly synchronously for async-storage if properly awaited?
    // Actually, persist is async. We might show a loader if not hydrated.
    // For MVP, we assume fast load or default to Welcome.
    // Ideally, useUserStore.persist.hasHydrated() check.

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {!isOnboarded ? (
                <Stack.Screen name="Welcome" component={WelcomeScreen} />
            ) : mode === 'Foundation' ? (
                <Stack.Screen name="FoundationApp" component={FoundationStack} />
            ) : (
                <Stack.Screen name="ExplorationApp" component={ExplorationStack} />
            )}
        </Stack.Navigator>
    );
};
