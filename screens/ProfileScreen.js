import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, Modal } from 'react-native';
import Achievements from '../functions/Achievements';
import EditProfile from '../functions/EditProfile';

const App = () => {
    const [userInfo, setUserInfo] = useState({
        name: 'username',
        bottlesRecycled: 0,
        profileImage: require('../assets/images/profile.png'),
        input: '',
    });

    const [isModalVisible, setModalVisible] = useState(false);
    const [input, setInput] = useState('');

    const addBottles = () => {
        const amount = parseInt(input) || 0;
        if (amount > 0) {
            setUserInfo(prevState => ({
                ...prevState,
                bottlesRecycled: prevState.bottlesRecycled + amount,
            }));
            setInput('');
        }
    };

    const removeBottles = () => {
        const amount = parseInt(input) || 0;
        if (amount > 0) {
            setUserInfo(prevState => {
                const newBottlesRecycled = Math.max(0, prevState.bottlesRecycled - amount);
                return {
                    ...prevState,
                    bottlesRecycled: newBottlesRecycled,
                };
            });
            setInput('');
        }
    };

    const closeModal = () => {
        setModalVisible(false);
    };
    const totalMoney = userInfo.bottlesRecycled * 0.5;

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userInfoSection}>
                {/* Update to handle either local images or remote URIs */}
                <Image source={typeof userInfo.profileImage === 'string' ? { uri: userInfo.profileImage } : userInfo.profileImage} style={styles.profileImage} />

                <View style={styles.userInfoText}>
                    <Text style={styles.header}>{userInfo.name}</Text>
                    <Text style={styles.text}>Recipiente reciclate: {userInfo.bottlesRecycled}</Text>
                </View>
                <View style={styles.editButtonContainer}>
                    <Button title="Editează" onPress={() => setModalVisible(true)} color="#72BF78" />
                </View>
            </View>


            <Modal visible={isModalVisible} transparent={true} animationType="slide">
                <View style={styles.modalContainer}>
                    <View style={styles.modalBox}>
                        <EditProfile
                            userInfo={userInfo}
                            setUserInfo={setUserInfo}
                            onClose={closeModal}
                        />
                    </View>
                </View>
            </Modal>

            <Achievements bottlesRecycled={userInfo.bottlesRecycled} />

            <View style={styles.addBottlesSection}>
                <TextInput
                    style={styles.inputBox}
                    placeholder="Introduceți numărul de recipiente"
                    keyboardType="numeric"
                    value={input}
                    onChangeText={(text) => setInput(text)}
                />
                <View style={styles.buttonsContainer}>
                    <Button
                        title="+ Adaugă recipiente"
                        onPress={() => addBottles(parseInt(userInfo.input) || 0)}
                        color="#72BF78"
                    />
                    <View style={styles.buttonSpacer} />
                    <Button
                        title="- Șterge recipiente"
                        onPress={() => removeBottles(parseInt(userInfo.input) || 0)}
                        color="#FF6347"
                    />
                </View>
            </View>

            <View style={styles.moneySection}>
                <Text style={styles.moneyText}>Total bani recuperați: {totalMoney.toFixed(2)} RON</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#FEFF9F',
        paddingTop: 60
    },

    userInfoSection: {
        flexDirection: 'row',
        marginBottom: 20,
        backgroundColor: '#A0D683',
        padding: 15, borderRadius: 8,
        alignItems: 'center'
    },

    profileImage: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginRight: 15
    },

    userInfoText:
        { flexDirection: 'column',
            flex: 1
        },

    header: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'black',
        marginBottom: 5
    },

    text: {
        fontSize: 16,
        color: '#333'
    },

    addBottlesSection: {
        marginTop: 20,
        backgroundColor: '#A0D683',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },

    inputBox: {
        height: 40,
        width: '80%',
        borderColor: '#333',
        borderWidth: 1,
        marginBottom: 10,
        borderRadius: 5,
        paddingLeft: 10,
        fontSize: 16
    },

    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%'
    },

    buttonSpacer: {
        width: 20
    },

    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    modalContent: {
        width: '80%',
        padding: 20,
        backgroundColor: '#FFF',
        borderRadius: 10,
        alignItems: 'center'
    },

    editButtonContainer: {
        alignItems: 'flex-end',
        width: '34%',
        marginLeft: 30,
    },
    modalBox: {
        width: '80%',
        maxWidth: 400,
        height: 400,
        backgroundColor: '#FFFFFF',
        borderRadius: 10,
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 3,
        borderColor: '#72BF78',
    },
    moneySection: {
        marginTop: 20,
        backgroundColor: '#A0D683',
        padding: 15,
        borderRadius: 8,
        alignItems: 'center'
    },
    moneyText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },

});

export default App;