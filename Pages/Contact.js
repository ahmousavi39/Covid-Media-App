import React from 'react';
import { Text, View, StyleSheet, ScrollView, Linking, Image, Dimensions } from 'react-native';
import { WebView } from 'react-native-webview';
import { Entypo, Foundation } from '@expo/vector-icons'; 

export default function Contact() {
    return (
        <ScrollView>
        <View style={{ flex: 1 }}>
            <WebView source={{ uri: 'http://covidmediainfo.com/en/app/contact/only' }} style={{ marginTop: 20, width: "100%",maxHeight: 450, minHeight: 440, flex: 1 }} />
            <View style={styles.list}>
                <Text style={[styles.bold,{paddingBottom: 8}]}>Connect Me Directly:</Text>
                <Text style={styles.item} onPress={async () => {await Linking.openURL('mailto:m.amirhossein2005@gmail.com')}}><Entypo name="email" size={14} color="black" /> Email: <Text style={styles.bold}>m.amirhossein2005@gmail.com</Text></Text>
                <Text style={styles.item} onPress={async () => {await Linking.openURL('tel:+491636252607')}}><Entypo name="old-phone" size={14} color="black" /> Phone: <Text style={styles.bold}>+49 1636252607</Text></Text>
                <Text style={styles.item} onPress={async () => {await Linking.openURL('https://amirhossein.netlify.app')}}><Foundation name="web" size={16} color="black"/> Website: <Text style={styles.bold}>Amirhossein.netlify.app</Text></Text>
                <Text style={styles.item} onPress={async () => {await Linking.openURL('https://linkedin.com/in/amirhossein-mousavi-7583111a6')}}><Entypo name="linkedin" size={14} color="black"/> Linkedin: <Text style={styles.bold}>@amirhossein-mousavi-7583111a6</Text></Text>
                <Text style={styles.item} onPress={async () => {await Linking.openURL('https://github.com/mousaviamirhossein')}}><Foundation name="social-github" size={14} color="black" /> GitHub: <Text style={styles.bold}>@mousaviamirhossein</Text></Text>
            </View>
        </View>
        </ScrollView>
    )
};

const styles = StyleSheet.create({
    item: {
        paddingLeft: 10
    },
    list: {
        paddingTop: 10,
        paddingLeft: 15,
        flex: 0.3
    },
    bold: {
        fontWeight: 'bold'
    },
    img: {
        width: Dimensions.get("window").width,
        height: 190
    }
})