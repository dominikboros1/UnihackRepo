import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function HelloWorldScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Hello World</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5f5f5', // Optional background color
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333', // Text color
    },
});
