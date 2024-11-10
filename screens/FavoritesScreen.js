import React from 'react';
import {View,Text,StyleSheet} from "react-native";

const FavoritesScreen = () => {
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
        },
    })

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Favorites</Text>
        </View>
    )
}
export default FavoritesScreen;