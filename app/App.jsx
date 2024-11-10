import React, { useState } from 'react';
import DefaultLayout from '../functions/DefaultLayout';
import InfoScreen from '../screens/InfoScreen';
import MapScreen from '../screens/MapScreen';
import FavoritesScreen from '../screens/FavoritesScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {StatusBar} from "react-native";

export default function App() {
    const [futureScreen, setFutureScreen] = useState('search');

    const renderScreen = () => {

        switch (futureScreen) {
            case 'search':
                return <InfoScreen />;
            case 'map':
                return <MapScreen />;
            case 'heart':
                return <FavoritesScreen />;
            case 'user':
                return <ProfileScreen />;
            default:
                return <MapScreen />;
        }
    };

    return (
        <DefaultLayout title='EcoMap' setFutureScreen={setFutureScreen}>
            <StatusBar hidden={true} />
                {renderScreen()}
        </DefaultLayout>
    );
}
