import React, { useEffect, useRef } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { markers } from '@/functions/markers';
import AddToFavoritesButton from "@/functions/AddToFavoritesButton";
import addToFavoritesButton from "@/functions/AddToFavoritesButton";

const INITIAL_REGION = {
    latitude: 45.7494,
    longitude: 21.2272,
    latitudeDelta: 0.07,
    longitudeDelta: 0.07,
};

export default function App() {
    const mapRef = useRef<any>(null);
    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={focusMap}>
                    <View style={{padding: 10}}>
                        <Text>Focus</Text>
                    </View>
                </TouchableOpacity>
            )
        });
    }, []);


    const focusMap = () => {
        const Timisoara = {
            latitude: 45.7494,
            longitude: 21.2272,
            latitudeDelta: 0.07,
            longitudeDelta: 0.07,
        };

        mapRef.current?.animateToRegion(Timisoara);
    };

    const onMarkerSelected = (marker: any) => {
        console.log(marker.name);
    };

    const calloutPressed = () => {
        console.log("Add to Favorite Pressed");
    };

    const onRegionChange = (region: Region) => {
        console.log(region);
    };

    return (
        <View style={{flex: 1}}>
            <MapView
                style={StyleSheet.absoluteFillObject}
                initialRegion={INITIAL_REGION}
                showsUserLocation
                showsMyLocationButton
                provider={PROVIDER_GOOGLE}
                ref={mapRef}
                onRegionChangeComplete={onRegionChange}
            >
                {markers.map((marker, index) => (
                    <Marker
                        key={index}
                        title={marker.name}
                        coordinate={marker}
                        onPress={() => onMarkerSelected(marker)}
                        pinColor={marker.color}
                    >
                        <Callout onPress={calloutPressed}>
                                <View style={{padding: 5, alignItems:'center'}}>
                                    <Text style={{fontWeight:'bold'}}>{marker.name}</Text>
                                    <AddToFavoritesButton onPress={addToFavoritesButton} />
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}