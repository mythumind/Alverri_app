import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useUserStore } from '@/store/userStore';
import { colors } from '@/shared/theme/colors';

export const ExplorationDashboard = () => {
    const resetUser = useUserStore((state) => state.resetUser);
    const profile = useUserStore((state) => state.profile);

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.greeting}>Ready to Explore, {profile?.name}?</Text>
                <Text style={styles.modeLabel}>Exploration Mode (Ages 6-10)</Text>
            </View>

            <ScrollView contentContainerStyle={styles.grid}>
                <View style={[styles.card, { backgroundColor: colors.primary.skyBlue }]}>
                    <Text style={styles.cardText}>Games</Text>
                </View>
                <View style={[styles.card, { backgroundColor: colors.primary.lavender }]}>
                    <Text style={styles.cardText}>Creativity</Text>
                </View>
                <View style={[styles.card, { backgroundColor: colors.primary.mintGreen }]}>
                    <Text style={styles.cardText}>Tokens</Text>
                </View>
                <View style={[styles.card, { backgroundColor: colors.status.warning }]}>
                    <Text style={styles.cardText}>Challenges</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.resetButton} onPress={resetUser}>
                <Text style={styles.resetText}>Reset (Dev Only)</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.warmOffWhite,
        paddingTop: 50,
    },
    header: {
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    greeting: {
        fontSize: 24,
        fontWeight: 'bold',
        color: colors.text.dark,
    },
    modeLabel: {
        fontSize: 14,
        color: '#666',
    },
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 10,
        justifyContent: 'space-between',
    },
    card: {
        width: '48%',
        height: 150,
        borderRadius: 15,
        marginBottom: 15,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    cardText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
    },
    resetButton: {
        alignSelf: 'center',
        marginBottom: 30,
        padding: 10,
    },
    resetText: {
        color: '#999',
    },
});
