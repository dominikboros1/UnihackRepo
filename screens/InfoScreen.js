import React from 'react';
import { Animated, View, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import DefaultLayout from '/DefaultLayout';

const InfoScreen = () => {
    return (
        <DefaultLayout title="Info Screen">
            <View style={styles.container}>
                <View style={styles.ciorbabuna}>
                    <Text style={styles.batpemata}>Informații</Text>
                </View>
                <ScrollView ref={scrollRef} contentContainerStyle={styles.scrollView}>

                    {/* Secțiunea Informații */}
                    <View style={styles.card}>
                        <Text style={styles.header}>
                            <Icon name="information" size={24} color="#72BF78" /> Informații
                        </Text>
                        <Text style={styles.paragraph}>
                            Sistemul de Garanție-Returnare este cel mai mare proiect de economie circulară din România, până în acest moment, care va face țara mai verde, mai curată și mai responsabilă. Procesul de reciclare este acum mai simplu ca niciodată: Cumperi băutura preferată, cauți simbolul Ambalaj cu Garanție, te deplasezi la magazinul tău preferat (important să aibă un punct de returnare), reciclezi, primești garanția înapoi și, cel mai important, te bucuri că ești un om responsabil care vrea un mediu curat.
                        </Text>
                    </View>

                    {/* Secțiunea Detalii Reciclare */}
                    <View style={styles.card}>
                        <Text style={styles.header}>Detalii Reciclare</Text>
                        {infoItems.map((item, index) => (
                            <View key={index}>
                                <TouchableOpacity onPress={() => toggleExpandInfo(index)} style={styles.expandableItem}>
                                    <Text style={styles.subHeader}>
                                        <Icon name={item.icon} size={20} color="#72BF78" /> {item.headline}
                                    </Text>
                                </TouchableOpacity>
                                {expandedInfoIndex === index && (
                                    <Animated.View style={styles.expandedContent}>
                                        <Text style={styles.paragraph}>{item.text}</Text>
                                    </Animated.View>
                                )}
                            </View>
                        ))}
                    </View>

                    {/* Secțiunea Impact */}
                    <View style={styles.card}>
                        <Text style={styles.header}>
                            <Icon name="earth" size={24} color="#72BF78" /> Impactul dvs. este vizibil
                        </Text>
                        <Text style={styles.paragraph}>Numărul de ambalaje reciclate:</Text>
                        <Progress.Bar progress={0.7} width={200} color="#72BF78" />
                    </View>

                    {/* Secțiunea Întrebări Frecvente */}
                    <View style={styles.card}>
                        <Text style={styles.header}>Întrebări Frecvente</Text>
                        {faqs.map((faq, index) => (
                            <View key={index}>
                                <TouchableOpacity onPress={() => toggleExpandFAQ(index)} style={styles.expandableItem}>
                                    <Text style={styles.subHeader}>
                                        <Icon name={faq.icon} size={20} color="#72BF78" /> {faq.question}
                                    </Text>
                                </TouchableOpacity>
                                {expandedFAQIndex === index && (
                                    <Animated.View style={styles.expandedContent}>
                                        <Text style={styles.paragraph}>{faq.answer}</Text>
                                    </Animated.View>
                                )}
                            </View>
                        ))}
                    </View>
                </ScrollView>

                {/* Buton pentru scroll-up */}
                <TouchableOpacity style={styles.scrollTopButton} onPress={scrollToTop}>
                    <Icon name="arrow-up-bold-circle" size={30} color="#000000" />
                </TouchableOpacity>
            </View>

        </DefaultLayout>
    );
};

const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FEFF9F', // Fundal general galben deschis
    },
    scrollView: {
        padding: 20,
    },
    card: {
        marginBottom: 20,
        padding: 20,
        backgroundColor: '#D3EE98', // Verde deschis pentru fundalul secțiunii
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 5, // pentru Android
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000000', // Negru pentru titlu
        marginBottom: 10,
    },
    subHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000000', // Negru pentru sub-titlu
        marginBottom: 5,
    },
    paragraph: {
        fontSize: 16,
        color: '#000000', // Negru pentru textul informativ
        lineHeight: 24,
    },
    expandableItem: {
        marginVertical: 10,
    },
    expandedContent: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        backgroundColor: '#A0D683', // Verde deschis pentru fundalul răspunsului
        borderRadius: 5,
        marginTop: 5,
    },
    scrollTopButton: {
        position: 'absolute',
        right: 20,
        bottom: 30,
        backgroundColor: '#A0D683',
        borderRadius: 30,
        padding: 10,
        elevation: 5,
    },
    ciorbabuna: {
        height: '9%',
        width: '100%',
        paddingTop: '3%',
        paddingLeft: '3%',
        backgroundColor: 'white',
        alignItems: 'left',
        justifyContent: 'center',
    },
    batpemata: {
        fontSize: 25,
        verticalAlign: 'middle',
    }
});


export default InfoScreen;
