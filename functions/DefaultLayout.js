import React, { useState } from 'react'
import 'react-native-vector-icons'
import icon from 'react-native-vector-icons/Feather'
import {StyleSheet, Text, TouchableOpacity, View} from "react-native";
import Feather from "react-native-vector-icons/Feather";
import InfoScreen from "../screens/InfoScreen";
import MapScreen from "../screens/MapScreen";

const DefaultLayout = ({children, title, setFutureScreen}) => {

    const templateStyles = StyleSheet.create({
        defaultContainer: {
            justifyContent: 'space-between',
            width: '100%',
            height: '100%',
            backgroundColor: '#D3EE98',
        },
        header: {
            height: '10%',
            backgroundColor: '#78cf39',
            paddingTop: '4%',
        },
        title: {
            fontSize: 25,
            textAlignVertical: 'center',
            height:'100%',
            marginLeft: '4%',
            color: 'white',
            fontWeight: 'bold',
            textShadowColor: 'black',
            textShadowOffset: {height:1, width:1},
            textShadowRadius: 3,
        },
        page: {
            flex: 1,
            justifyContent: 'center',
            borderStyle: 'solid',
            borderTopWidth: 2,
            borderBottomWidth: 2,
            borderColor: 'white',
        },
        buttonRow: {
            height:'7%',
            width:'100%',
            flexDirection: 'row',
            justifyContent: 'space-around',

        },
        pageButton: {
            width: '25%',
            height: '100%',
            backgroundColor: '#78cf39',
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderBottomWidth: 1,
            borderColor: 'white',
            alignItems: 'center',
            paddingTop:'5%',
        },
    });

    const PageButton = ({name, screen}) => (
        <TouchableOpacity onPress={() => setFutureScreen(screen)}
        style={templateStyles.pageButton}>
            <Feather name={name} size={20} color='black'/>
        </TouchableOpacity>
    )

    return (
        <View style={templateStyles.defaultContainer}>
            <View style={templateStyles.header}>
                <Text style={templateStyles.title}>{title}</Text>
            </View>
            <View style={templateStyles.page}>
                {children}
            </View>
            <View style={templateStyles.buttonRow}>
                <PageButton name='search' screen={"search"}/>
                <PageButton name='map' screen={'map'}/>
                <PageButton name='heart' screen={'heart'}/>
                <PageButton name='user' screen={'user'}/>
            </View>
        </View>
    );
};

export default DefaultLayout;