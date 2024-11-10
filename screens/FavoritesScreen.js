import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const FavoritesScreen = ({ favorites }) => {

    const favStyles = StyleSheet.create({
        favoritesContainer: {
            flex: 1,
            width: '100%',
            height: '100%',
            alignItems: 'center',
            paddingTop: '1%',
            backgroundColor: '#D3EE98',
        },
        item: {
            padding: 15,
            marginVertical: 8,
            width: '90%',
            backgroundColor: '#ffffff',
            borderRadius: 8,
            borderColor: '#ddd',
            borderWidth: 1,
        },
        itemText: {
            fontSize: 16,
            color: '#333',
        },
        emptyText: {
            fontSize: 18,
            color: '#777',
            marginTop: 20,
        },
    });

    return (
        <View style={favStyles.favoritesContainer}>
            {favorites && favorites.length > 0 ? (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <View style={favStyles.item}>
                            <Text style={favStyles.itemText}>{item.value}</Text>
                        </View>
                    )}
                />
            ) : (
                <Text style={favStyles.emptyText}>Lista de favorite este goală</Text>
            )}
        </View>
    );
};

export default FavoritesScreen;