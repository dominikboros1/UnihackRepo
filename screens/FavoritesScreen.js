import React from "react";
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity, Alert,
} from 'react-native';
import markers from "../functions/markers"

const FavoritesScreen = ({ favorites }) => {

    const Store = (props) => {
        return (
            <TouchableOpacity onPress={() => Alert.alert(props.text + " " + "Selected")} style={styles.TagContainer}>
                <View style={styles.item}>
                    <View style={styles.itemleft}>
                        <View style={styles.square}></View>
                        <Text style={styles.itemText}>{props.text}</Text>
                    </View>
                    <Text style={styles.circular}></Text>
                </View>
            </TouchableOpacity>
        )
    }
    const styles = StyleSheet.create({
        item:{
            backgroundColor: 'lightgrey',
            padding: 15,
            borderRadius: 15,
            width: 750,
            marginHorizontal: 20,
            flexDirection:'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30,
        },
        itemleft:{
            flexDirection: "row",
            alignItems: "center",
            flexWrap: 'wrap',
        },
        square:{
            width: 24,
            height: 24,
            backgroundColor:'red',
            opacity: 0.6,
            borderRadius: 5,
            marginRight: 15,
        },
        itemText:{
            maxWidth: 100,
            fontWeight: "bold",

        },
        circular:{
            width: 24,
            height: 24,
            backgroundColor:'#f94a87',
            opacity: 0.4,
            borderRadius: 5,
            marginRight: 15,
        },
        TagContainer: {
            alignItems: 'center',
        },

    });

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

    const stylesFav = StyleSheet.create({
        container:{
            flex: 1,
        },
        tasksWrapper:{
            padding: 80,
            paddingHorizontal: 20,

        },
        selectionTitle:{
            fontSize: 50,
            fontWeight: 'bold',
            color: '#F8E559',
        },
        items:{
            marginTop: 30,
        },
        backgroundImage:{
            flex: 1,
        }
    });


    return (
        <View style={stylesFav.container}>
            <View style={stylesFav.tasksWrapper}>
                <View style={stylesFav.items}>
                    <Store text = {'Kaufland'} />
                    <Store text = {'Lidl'} />
                    <Store text = {'Penny'} />
                    <Store text = {'Carrefour'} />
                </View>
            </View>
        </View>
    );
};

export default FavoritesScreen;