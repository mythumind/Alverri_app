import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useUserStore } from '@/store/userStore';
import { colors } from '@/shared/theme/colors';

export const WelcomeScreen = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const setUser = useUserStore((state) => state.setUser);

    const handleStart = () => {
        const ageNum = parseInt(age, 10);
        if (!name.trim()) {
            Alert.alert('Details Missing', 'Please enter your child\'s name.');
            return;
        }
        if (isNaN(ageNum) || ageNum < 0 || ageNum > 10) {
            Alert.alert('Invalid Age', 'Please enter a valid age between 0 and 10.');
            return;
        }

        setUser(name, ageNum);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                <Text style={styles.title}>Welcome to Alverri</Text>
                <Text style={styles.subtitle}>The friend that grows with you.</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Child's Name"
                    value={name}
                    onChangeText={setName}
                    placeholderTextColor="#999"
                />

                <TextInput
                    style={styles.input}
                    placeholder="Child's Age (0-10)"
                    value={age}
                    onChangeText={setAge}
                    keyboardType="numeric"
                    placeholderTextColor="#999"
                />

                <TouchableOpacity style={styles.button} onPress={handleStart}>
                    <Text style={styles.buttonText}>Start Journey</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background.warmOffWhite,
        justifyContent: 'center',
    },
    content: {
        padding: 20,
        alignItems: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: colors.text.dark,
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: colors.primary.skyBlue,
        marginBottom: 40,
    },
    input: {
        width: '100%',
        height: 50,
        backgroundColor: '#FFF',
        borderRadius: 10,
        paddingHorizontal: 15,
        marginBottom: 15,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        fontSize: 16,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: colors.primary.mintGreen,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
    },
    buttonText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: '600',
    },
});
