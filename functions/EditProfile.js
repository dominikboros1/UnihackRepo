import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, Modal, TouchableOpacity, ScrollView } from 'react-native';

const EditProfile = ({ userInfo, setUserInfo, onClose }) => {
    const [name, setName] = useState(userInfo.name);
    const [profileImage, setProfileImage] = useState(userInfo.profileImage);
    const [isImagePickerVisible, setImagePickerVisible] = useState(false);

    const imageOptions = [
        require('../assets/images/manager.png'),
        require('../assets/images/happy.png'),
        require('../assets/images/young-man.png'),
        require('../assets/images/man.png'),
        require('../assets/images/young-man (1).png'),
        require('../assets/images/young-woman.png'),
        require('../assets/images/bedouin.png'),
        require('../assets/images/man (5).png'),
        require('../assets/images/young-woman(3).png'),
        require('../assets/images/woman.png'),
        require('../assets/images/young-woman(6).png'),
    ];

    const saveChanges = () => {
        setUserInfo((prevInfo) => ({
            ...prevInfo,
            name,
            profileImage,
        }));
        onClose();
    };


    return (
        <View style={styles.modalContainer}>
            <View style={styles.modalBox}>
                {/* Profile Image */}
                <Text style={styles.header}>Poză de profil:</Text>
                <Image source={profileImage} style={styles.profileImage} />

                {/* Button to change image */}
                <Button title="Schimbă poza" onPress={() => setImagePickerVisible(true)} color="#72BF78" />

                {/* Modal to select new profile image */}
                <Modal visible={isImagePickerVisible} transparent={true} animationType="slide">
                    <View style={styles.modalContainer}>
                        <View style={styles.modalBox}>
                            <Text style={styles.header}>Alege o Poză de Profil:</Text>
                            <ScrollView horizontal style={styles.imageOptionsContainer}>
                                {imageOptions.map((imageUrl, index) => (
                                    <TouchableOpacity key={index} onPress={() => {
                                        setProfileImage(imageUrl);
                                        setImagePickerVisible(false);
                                    }}>
                                        <Image source={imageUrl} style={styles.imageOption} />
                                    </TouchableOpacity>
                                ))}
                            </ScrollView>
                            <Button title="Înapoi" onPress={() => setImagePickerVisible(false)} color="#FF6347" />
                        </View>
                    </View>
                </Modal>

                {/* Change Name Section */}
                <Text style={styles.header}>Schimbă numele:</Text>
                <TextInput
                    style={styles.input}
                    placeholder=""
                    value={name}
                    onChangeText={setName}
                />

                <View style={styles.buttonsContainer}>
                    <Button title="Înapoi" onPress={onClose} color="#FF6347" />
                    <Button title="Salvează schimbările" onPress={saveChanges} color="#72BF78" />
                </View>

            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalBox: {
        width: '80%',
        maxWidth: 400,
        backgroundColor: 'white',
        borderRadius: 0,
        padding: 20,
        alignItems: 'center',
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 15,
    },
    profileImage: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    imageOptionsContainer: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    imageOption: {
        width: 80,
        height: 80,
        margin: 5,
        borderRadius: 40,
        borderWidth: 2,
        borderColor: '#72BF78',
    },
    // input: {
    //     height: 40,
    //     width: 200,
    //     borderColor: '#333',
    //     borderWidth: 1,
    //     marginBottom: 20,
    //     borderRadius:8 ,
    //     paddingLeft: 15,
    //     fontSize: 20,
    // },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '85%',
        marginTop: 20,
    },
});

export default EditProfile;