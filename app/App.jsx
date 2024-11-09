import React, {useState} from "react";
import DefaultLayout from "../DefaultLayout";
import InfoScreen from "../screens/InfoScreen";
import MapScreen from "../screens/MapScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import ProfileScreen from "../screens/ProfileScreen";

export default function App() {
    const [currentScreen, setCurrentScreen] = useState('Home');

    const renderScreen = () => {
        switch (currentScreen) {
            case 'Info':
                return <InfoScreen />;
            case 'Map':
                return <MapScreen />;
            case 'Favorites':
                return <FavoritesScreen />;
            case 'Profile':
                return <ProfileScreen />;
            default:
                return <MapScreen />;
        }
    };

    return (
        <DefaultLayout setCurrentScreen={setCurrentScreen}>
            {renderScreen()}
        </DefaultLayout>
    );
}