import { Slot } from 'expo-router';
import React from 'react';
import { KeyboardAvoidingView, Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../appcomponents/Header';

const EntryScreen = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: '#48BD77' }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}
        >
            <SafeAreaView style={styles.safeArea} edges={['top']}>
                <Header />
                <View style={{ flex: 1 }}>
                    <Slot />
                </View>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

export default EntryScreen

const styles = StyleSheet.create({
    safeArea: {
        flex: 1
    },
    header: {

    }
})