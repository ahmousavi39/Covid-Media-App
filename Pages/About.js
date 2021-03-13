import React from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Text } from 'react-native-elements';
import { AntDesign } from '@expo/vector-icons';

export default function About() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title} h3>Who Developed This Website <AntDesign name="questioncircle" size={24} color="black" /></Text>
                <Text>This website has been developed by <Text style={styles.bold} onPress={async () => { await Linking.openURL('https://amirhossein.netlify.app') }}>Amirhossein</Text>.
            I'm a middle school student and I'm a refugee in <Text style={styles.bold}>Budingen, Hessen, Germany</Text>.{'\n'}
            I study Full Stack Web Development at <Text style={styles.bold} onPress={async () => { await Linking.openURL('https://socialhackersacademy.org') }}>Social Hackers Academy</Text>.
            </Text>

                <View style={styles.br} />
                <View style={styles.br} />

                <Text>It is my first react project, this are the technologies I used to design and develope this Android/IOS App :</Text>
                <View style={styles.list}>
                    <Text><Text style={styles.bold}>1.</Text> React Native</Text>
                    <Text><Text style={styles.bold}>2.</Text> CSS3</Text>
                    <Text><Text style={styles.bold}>3.</Text> Expo</Text>
                </View>

                <View style={styles.br} />
                <View style={styles.br} />

                <Text>I started learning programing at <Text style={styles.bold}>June, 2019</Text> and still learning ....</Text>

                <View style={styles.hr} />

                <Text style={styles.title} h3>Why did I design this website <AntDesign name="questioncircle" size={24} color="black" /></Text>
                <Text>When I seen that coronavirus started to spread more and more and Scientists started trying to make a vaccine for COVID-19 and they informed world that it can take a super long time, I undrestood that <Text style={styles.bold}>we need to learn how to live safely by coronavirus</Text>.{'\n'}
            That is the reason of making this website.</Text>

                <View style={styles.br} />
                <View style={styles.br} />

                <Text style={styles.bold}>That is the human duty of everyone to help eradicating coronavirus.</Text>

                <View style={styles.br} />
                <View style={styles.br} />

            </View >
    </ScrollView >

    )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 10,
        paddingRight: 10,
        paddingLeft: 10
    },
    title: {
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10
    },
    bold: {
        fontWeight: 'bold'
    },
    br: {
        paddingTop: 10,
        paddingBottom: 10
    },
    list: {
        paddingLeft: 20,
        paddingTop: 5
    },
    hr: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: .5,
        paddingTop: 20
    }
})