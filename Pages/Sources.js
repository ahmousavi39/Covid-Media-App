import React from 'react';
import { StyleSheet, View, ScrollView, Linking } from 'react-native';
import { Text } from 'react-native-elements';

export default function Sources() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.list}>
                    <Text style={[styles.bold, { paddingBottom: 8 }]} h4>We only use trusted sources:</Text>
                    <Text style={styles.item} onPress={async () => { await Linking.openURL('https://www.who.int/') }}>World Health Organization (WHO)</Text>
                    <Text style={styles.item} onPress={async () => { await Linking.openURL('https://cdc.gov/') }}>CDC</Text>
                    <Text style={styles.item} onPress={async () => { await Linking.openURL('https://www.worldometers.info/') }}>World Matters</Text>
                    <Text style={styles.item} onPress={async () => { await Linking.openURL('https://systems.jhu.edu/') }}>JHU CSSE</Text>
                </View>
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
        paddingTop: 5,
        textAlign: 'center'
    },
    hr: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: .5,
        paddingTop: 20
    }
})