import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withSpring } from 'react-native-reanimated';
import { colors } from '@/shared/theme/colors';

const { width } = Dimensions.get('window');

export const AvatarOverlay = () => {
    // Logic: This component sits ON TOP of everything (Navigation, Screens).
    // It allows the avatar to "travel" continuously even when screens change underneath.

    const translateX = useSharedValue(width - 80); // Start at bottom right
    const translateY = useSharedValue(50); // Top offset

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [
                { translateX: translateX.value },
                { translateY: translateY.value },
            ],
        };
    });

    return (
        <View style={styles.pointerContainer} pointerEvents="box-none">
            <Animated.View style={[styles.avatarBubble, animatedStyle]}>
                {/* 
                   PLACEHOLDER: The Avatar System
                   To integrate Rive:
                   1. npm install rive-react-native
                   2. Replace <Text> below with:
                   <Rive
                       url="https://public.rive.app/community/runtime-loader/assets/flux_capacitor.riv"
                       stateMachineName="State Machine 1"
                       style={{ width: 60, height: 60 }}
                   />
                */}
                <Text style={styles.avatarText}>🤖</Text>
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    pointerContainer: {
        ...StyleSheet.absoluteFillObject, // Covers entire screen
        zIndex: 1000, // Higher than Navigation
        elevation: 1000,
    },
    avatarBubble: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: colors.primary.skyBlue,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5,
    },
    avatarText: {
        fontSize: 30,
    }
});
