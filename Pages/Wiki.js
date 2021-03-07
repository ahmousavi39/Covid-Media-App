import React from 'react';
import { View, StyleSheet, Dimensions, ScrollView, FlatList, Image } from 'react-native';
import { Text } from 'react-native-elements';
import YoutubePlayer from 'react-native-youtube-iframe';
import { CoronavirusTransmission, PreventTransmission, ImmuneBoosters, ImmuneBoosters2, WashHand, HighRisk, StayHome, Recommendation1, Recommendation2, Recommendation3, Recommendation4 } from '../assets/images';

export function Wiki() {
    return (
        <ScrollView>
            <View style={styles.container}>

                <View style={styles.whatIsCovid}>
                    <Text style={styles.title} h3>What is COVID-19?</Text>
                    <YoutubePlayer
                        height={200}
                        width={Dimensions.get("window").width - 20}
                        videoId={"7z0kzYpuqhw"}
                        volume={50}
                        playbackRate={1}
                        initialPlayerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: true
                        }}
                    />
                    <Text style={{ textAlign: 'center' }}>An infectious disease caused by a coronavirus (= a type of virus), that usually causes fever, tiredness, and a cough, and can also cause breathing problems.Coronavirus disease 2019 (COVID-19) is an infectious disease caused by severe acute respiratory syndrome coronavirus 2 (SARS-CoV-2). It was first identified in December 2019 in Wuhan, China, and has since spread globally, resulting in an ongoing pandemic.</Text>
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.aboutCovid}>
                    <Text style={styles.title} h3>What we need to know about COVID-19 ?</Text>
                    <YoutubePlayer
                        videoId={"7RFG4o7RKhU"}
                        height={200}
                        width={Dimensions.get("window").width - 20}
                        volume={50}
                        playbackRate={1}
                        initialPlayerParams={{
                            cc_lang_pref: "us",
                            showClosedCaptions: true
                        }}
                    />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.symptoms}>
                    <Text style={styles.title} h3>Symptoms :</Text>
                    <Text style={styles.bold}>Most common symptoms :</Text>
                    <FlatList
                        data={[
                            { key: '-Fever or chills' },
                            { key: '-Cough' },
                            { key: '-Shortness of breath or difficulty breathing' }
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                    <View style={styles.br} />
                    <Text style={styles.bold}>Common symptoms :</Text>
                    <FlatList
                        data={[
                            { key: '-Fatigue' },
                            { key: '-Muscle or body aches' },
                            { key: '-Headache' },
                            { key: '-New loss of taste or smell' },
                            { key: '-Sore throat' },
                            { key: '-Congestion or runny nose' },
                            { key: '-Nausea or vomiting' },
                            { key: '-Diarrhea' },
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                    <View style={styles.br} />
                    <Text style={styles.bold}>Serious symptoms :</Text>
                    <FlatList
                        data={[
                            { key: '-Shortness of breath or difficulty breathing' },
                            { key: '-Chest pain or pressure' },
                            { key: '-Loss of speech or movement' }
                        ]}
                        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
                    />
                    <View style={styles.br} />
                    <Text>People with mild symptoms who are otherwise healthy should manage their symptoms at home.</Text>
                    <View style={styles.br} />
                    <Text>People with COVID-19 have had a wide range of symptoms reported – ranging from mild symptoms to severe illness. Symptoms may appear 2-14 days after exposure to the virus.</Text>
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.spread}>
                    <Text h3 style={styles.title}>COVID-19 Transmission</Text>
                    <Image source={CoronavirusTransmission} style={styles.img} />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.transmission}>
                    <Text h3 style={styles.title}>Stop Transmission</Text>
                    <Image source={PreventTransmission} style={styles.imgHeigh} />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.immune}>
                    <Text h3 style={styles.title}>Immune system boosters</Text>
                    <Image source={ImmuneBoosters} style={styles.img} />
                    <Image source={ImmuneBoosters2} style={styles.img} />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.soap}>
                    <Text h3 style={styles.title}>Wash your hands by soap !</Text>
                    <Image source={WashHand} style={styles.imgMiddle} />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.risk}>
                    <Text h3 style={styles.title}>Who is at high risk of COVID-19 :</Text>
                    <Image source={HighRisk} style={styles.imgLow} />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.stayHome}>
                    <Text h3 style={styles.title}>STAY HOME !!!</Text>
                    <Image source={StayHome} style={styles.imgMiddleHeigh} />
                </View>

                <View style={styles.hr} />
                <View style={styles.br} />

                <View style={styles.recommendation}>
                    <Text h3 style={styles.title}>Recommendations</Text>
                    <Image source={Recommendation1} style={styles.imgLow} />
                    <View style={styles.br} />
                    <Image source={Recommendation2} style={styles.imgLow} />
                    <View style={styles.br} />
                    <Image source={Recommendation3} style={styles.imgLow} />
                    <View style={styles.br} />
                    <Image source={Recommendation4} style={styles.imgLow} />
                </View>

            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10
    },
    title: {
        textAlign: 'center',
        paddingBottom: 20
    },
    whatIsCovid: {
        textAlign: 'center'
    },
    aboutCovid: {
        textAlign: 'center'
    },
    symptoms: {
        textAlign: 'center'
    },
    spread: {
        textAlign: 'center'
    },
    transmission: {
        textAlign: 'center'
    },
    immune: {
        textAlign: 'center'
    },
    soap: {
        textAlign: 'center'
    },
    risk: {
        textAlign: 'center'
    },
    stayHome: {
        textAlign: 'center'
    },
    recommendation: {
        textAlign: 'center'
    },
    hr: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        opacity: .5,
        paddingTop: 20
    },
    br: {
        paddingTop: 10,
        paddingBottom: 10
    },
    item: {
        paddingLeft: 10
    },
    list: {
        flex: 1,
        paddingTop: 22
    },
    bold: {
        fontWeight: 'bold'
    },
    img: {
        width: Dimensions.get("window").width - 20,
        height: 200
    },
    imgHeigh: {
        width: Dimensions.get("window").width - 20,
        height: 570
    },
    imgMiddle: {
        width: Dimensions.get("window").width - 20,
        height: 250
    },
    imgLow: {
        width: Dimensions.get("window").width - 20,
        height: 178
    },
    imgMiddleHeigh: {
        width: Dimensions.get("window").width - 20,
        height: 390
    }
})