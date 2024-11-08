import React, { useEffect, useRef } from 'react';
import MapView, { Callout, Marker, PROVIDER_GOOGLE, Region } from 'react-native-maps';
import { Alert, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from 'expo-router';
import { markers } from '@/assets/markers';
import id from "ajv/lib/vocabularies/core/id";

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
                    <View style={{ padding: 10 }}>
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
        Alert.alert(marker.name);
    };

    const calloutPressed = (ev: any) => {
        console.log(ev);
    };

    const onRegionChange = (region: Region) => {
        console.log(region);
    };

    return (
        <View style={{ flex: 1 }}>
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
                    <Marker id={"lidl"}
                        key={index}
                        title={marker.name}
                        coordinate={marker}
                        onPress={() => onMarkerSelected(marker)}
                        pinColor={marker.color}
                        identifier={marker.id}
                        image={require('../assets/markers/lidl_middle_middle.png')}
                    >
                        <Callout onPress={calloutPressed}>
                            <View style={{ padding: 10 }}>
                                <Text style={{ fontSize: 24 }}></Text>
                            </View>
                        </Callout>
                    </Marker>
                ))}
            </MapView>
        </View>
    );
}