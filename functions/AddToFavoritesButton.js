import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const AddToFavoritesButton = ({ onPress }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.buttonText}>Add to Favorites</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#72BF78',
        padding: 10,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 5,
    },
    buttonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
    },
});

export default AddToFavoritesButton;