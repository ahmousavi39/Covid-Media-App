import React from 'react';
import { View, StyleSheet, Linking, ScrollView } from 'react-native';
import { Text, Button } from 'react-native-elements';
import { FontAwesome5, Feather, Entypo } from '@expo/vector-icons';

export default function Support() {
    return (
        <ScrollView>
        <View style={styles.container}>
            <Text h3 style={styles.title}>I need you're support for keeping this project up <FontAwesome5 name="hand-holding-heart" size={24} color="black" /></Text>
            <Text>This project is not being funded by any organ or person <FontAwesome5 name="exclamation-circle" size={14} color="black" /></Text>

            <View style={styles.br} />
            <View style={styles.br} />

            <Text style={styles.bold}>You can support me by:</Text>
            <View style={styles.br} />

            <Button
            onPress={async () => { await Linking.openURL('https://buymeacoffee.com/amirhossein2005') }}
                icon={
                    <Feather name="coffee" size={24} color="white" />
                }
                iconRight
                title="Buy me a coffee "
                buttonStyle={{ backgroundColor: 'red' }}
            />
            <Text style={styles.title}>Or</Text>
            <Button
             onPress={async () => { await Linking.openURL('https://paypal.me/mamirhossein2005?locale.x=en_US') }}
                icon={
                    <Entypo name="paypal" size={24} color="white" />}
                iconRight
                title="Donat me form PayPal "
            />
            <Text style={styles.title}>Or</Text>
            <Text style={[{textAlign: 'center'}, styles.bold]}>Share us with you're frinds</Text>
        </View>
        </ScrollView>
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