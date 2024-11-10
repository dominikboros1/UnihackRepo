import React, { useState } from 'react';
import DefaultLayout from '../functions/DefaultLayout';
import InfoScreen from '../screens/InfoScreen';
import MapScreen from '../screens/MapScreen';
// import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {StatusBar} from "react-native";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('user');

    const renderScreen = () => {
        console.log(`Current screen: ${currentScreen}`);
        switch (currentScreen) {
            case 'search':
                return <InfoScreen />;
            case 'map':
                return <MapScreen />;
            case 'heart':
                return <FavoritesScreen />;
            case 'user':
                return <ProfileScreen />;
            default:
                return <InfoScreen />;
        }
    };

    return (
        <DefaultLayout>
            <StatusBar hidden={true} />
            {renderScreen()}
        </DefaultLayout>
    );
}
