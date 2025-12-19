import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useUserStore } from '@/store/userStore';
import { colors } from '@/shared/theme/colors';

export const FoundationDashboard = () => {
    const resetUser = useUserStore((state) => state.resetUser);
    const profile = useUserStore((state) => state.profile);

    return (
        <View style={styles.container}>
            <View style={styles.canvasArea}>
                <Text style={styles.placeholderText}>Scribble Canvas (70%)</Text>
            </View>

            <View style={styles.avatarArea}>
                <Text style={styles.greeting}>Hi, {profile?.name}!</Text>
                <Text style={styles.modeLabel}>Foundation Mode (Ages 0-5)</Text>

                <TouchableOpacity style={styles.resetButton} onPress={resetUser}>
                    <Text style={styles.resetText}>Reset (Dev Only)</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.primary.softPeach,
    },
    canvasArea: {
        flex: 0.7,
        backgroundColor: '#FFF',
        margin: 10,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#E0E0E0',
        borderStyle: 'dashed',
    },
    avatarArea: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
    },
    placeholderText: {
        fontSize: 20,
        color: '#CCC',
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text.dark,
    },
    modeLabel: {
        fontSize: 14,
        color: colors.text.dark,
        marginTop: 5,
    },
    resetButton: {
        marginTop: 20,
        padding: 10,
        backgroundColor: 'rgba(0,0,0,0.1)',
        borderRadius: 5,
    },
    resetText: {
        fontSize: 12,
    },
});
