import React, { useState, useRef } from 'react';
import { View, Text, TouchableOpacity, ScrollView, Animated, StyleSheet, Dimensions } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InfoPage = () => {
    const [expandedInfoIndex, setExpandedInfoIndex] = useState(null);
    const [expandedFAQIndex, setExpandedFAQIndex] = useState(null);
    const scrollRef = useRef();

    // Funcția pentru a comuta extinderea secțiunilor de informații
    const toggleExpandInfo = (index) => {
        setExpandedInfoIndex(expandedInfoIndex === index ? null : index);
    };

    // Funcția pentru a comuta extinderea secțiunilor de FAQ
    const toggleExpandFAQ = (index) => {
        setExpandedFAQIndex(expandedFAQIndex === index ? null : index);
    };

    // Funcția pentru a derula la începutul paginii
    const scrollToTop = () => {
        scrollRef.current?.scrollTo({ y: 0, animated: true });
    };

    const infoItems = [
        {
            headline: 'Procesul reciclării',
            text: 'La prima vedere, procesul poate părea complicat: "Cum aflu ce magazine au un punct de returnare?", "De unde să știu programul magazinelor?" sau "Am timp să trec azi să reciclez?". Nu vă faceți griji, ne ocupăm noi de asta. Toate magazinele cu puncte de returnare și programul acestora sunt disponibile într-un singur loc în aplicație, iar harta integrată vă ajută să ajungeți la magazinul preferat.',
            icon: 'recycle',
        },
        {
            headline: 'Alegerea magazinului',
            text: 'Pentru a ușura procesul de reciclare, magazinele preferate și cele vizitate recent sunt reținute în aplicație.',
            icon: 'store',
        },
        {
            headline: 'Impactul dvs. este vizibil',
            text: 'Aveți un profil personal, unde puteți ține evidența numărului de ambalaje reciclate și vă păstrați motivația prin obiective săptămânale.',
            icon: 'earth',
        },
        {
            headline: 'De reținut',
            text: 'Sunt acceptate pentru returnare doar ambalajele goale, neturtite, curate și cu eticheta intactă de Ambalaj cu Garanție. În funcție de punctul de returnare, ambalajele pot fi preluate manual de un angajat sau automat. În cazul punctelor automate, introduceți ambalajele pe rând și, pentru PET-uri, cu dopul spre dvs.',
            icon: 'information',
        },
    ];

    const faqs = [
        {
            question: 'Ce este reciclarea?',
            answer: 'Reciclarea este procesul prin care deșeurile “cu valoare”, precum ambalajele, sunt transformate în materie primă pentru produse noi. Reciclarea aduce beneficii mediului și economiei.',
            icon: 'recycle',
        },
        {
            question: 'De ce trebuie să reciclez?',
            answer: 'Reciclarea reduce depunerea deșeurilor la gropile de gunoi, care poluează mediul și afectează sănătatea. Reciclarea economisește energie pe termen lung, energia economisită la reciclarea unei sticle alimentând un bec timp de patru ore.',
            icon: 'hand-heart',
        },
        {
            question: 'Cum pot începe să reciclez?',
            answer: 'Poți începe adunând ambalajele de băuturi (sticlă, plastic sau metal) care au simbolul de "Ambalaj cu Garanție".',
            icon: 'play',
        },
        {
            question: 'Ce este simbolul Ambalaj cu Garanție?',
            answer: 'Simbolul indică faptul că o garanție a fost plătită pe lângă prețul produsului și poate fi recuperată dacă recipientul este reciclat la centrele RetuRO.',
            icon: 'information-outline',
        },
        {
            question: 'Pot recicla ambalaje fără simbolul de Ambalaj cu Garanție?',
            answer: 'La centrele RetuRO: Nu. Acestea acceptă doar ambalajele cu Simbolul de Garanție.',
            icon: 'close-circle',
        },
    ];

    return (
        <View style={styles.container}>
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
});

export default InfoPage;