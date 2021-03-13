import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import { CovidMedia } from '../assets/images';

export function LoadingPage() {
    const [TextTitle, setTextTitle] = useState([]);
    const [Covidmedia, setCovidmedia] = useState(["w", "w", "w", ".", "C", "o", "v", "i", "d", "M", "e", "d", "i", "a", "I", "n", "f", "o", ".", "c", "o", "m"]);
    const [currentIndex, setCurrentIndex] = useState(0);

    function animatedText() {
        setTextTitle([...TextTitle, Covidmedia[currentIndex]]);
        if (TextTitle.length < Covidmedia.length) {
            setTimeout(() => { setCurrentIndex(currentIndex + 1); }, 100)
        }
    }

    useEffect(() => {
        animatedText();
    }, [currentIndex])

    return (
        <View style={styles.container}>
            <Image source={CovidMedia} style={styles.img} />
            <Text style={[styles.text, { paddingTop: 10 }]}>Covid Media for every refugee</Text>
            <Text style={[styles.text, { fontWeight: 'bold' }]}>{TextTitle.map(value => (value))}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        textAlign: 'center',
        justifyContent: 'center',
        marginRight: 'auto',
        marginTop: 'auto',
        marginLeft: 'auto',
        marginBottom: 'auto'
    },
    img: {
        width: Dimensions.get("window").width - 50,
        height: 100
    },
    text: {
        textAlign: 'center'
    }
})