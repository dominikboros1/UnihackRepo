//Achievements care ar trebui sa mearga
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Achievements = ({ bottlesRecycled }) => {
    const achievements = [
        { milestone: 10, description: 'Reciclează 10 de recipiente!' },
        { milestone: 50, description: 'Reciclează 50 de recipiente!' },
        { milestone: 100, description: 'Reciclează 100 de recipiente!' },
        { milestone: 500, description: 'Reciclează 500 de recipiente!' },
    ];

    const getProgressBarWidth = (milestone) => {
        return bottlesRecycled >= milestone ? 100 : (bottlesRecycled / milestone) * 100;
    };

    return (
        <View style={styles.achievementsSection}>
            <Text style={styles.header}>Obiective:</Text>
            {achievements.map((achievement, index) => (
                <View key={index} style={styles.achievementContainer}>
                    <Text style={styles.achievementText}>{achievement.description}</Text>
                    <View style={styles.progressBar}>
                        <View style={[styles.progressBarFill, { width: getProgressBarWidth(achievement.milestone) + '%' }]} />
                    </View>
                </View>
            ))}
        </View>
    );
};

const styles = StyleSheet.create({
    achievementsSection: {
        marginBottom: 20,
        backgroundColor: '#D3EE98',
        padding: 15,
        borderRadius: 8
    },
    header: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#72BF78',
        marginBottom: 10
    },
    achievementContainer: {
        marginBottom: 15
    },
    achievementText: {
        fontSize: 16,
        color: '#72BF78'
    },
    progressBar: {
        width: '100%',
        height: 20,
        backgroundColor: '#D3EE98',
        borderRadius: 10,
        overflow: 'hidden',
        marginTop: 10
    },
    progressBarFill: {
        height: '100%',
        backgroundColor: '#FFDF00',
        borderRadius: 10
    },
});

export default Achievements;