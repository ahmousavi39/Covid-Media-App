import React, { useState } from 'react';
import { CountUp } from 'use-count-up'
import { StyleSheet, Text, View } from 'react-native';
import { Card, Divider } from 'react-native-elements'




export default function AllStaticsCard(props) {
    // Object.size = function (obj) {
    //     var size = 0,
    //         key;
    //     for (key in obj) {
    //         if (obj.hasOwnProperty(key)) size++;
    //     }
    //     return size;
    // };
    
    if (!JSON.stringify(props.data.cases) || !JSON.stringify(props.vaccineData.allCases)){
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>

            <View style={styles.cardVaccine}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Vaccined</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={props.vaccineData.allCases.cases} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{props.vaccineData.allCases.cases === 0  ?  'Not Provided Yet' : 'Congratulations!'}</Text>
                    <Divider style={{ backgroundColor: "rgba(146, 144, 144, 0.219)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Confirmed Casses</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.cases)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "rgba(0, 0, 255, 0.5)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.recovered)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "rgba(0, 255, 0, 0.5)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Death</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.deaths)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "rgb(255, 3, 3)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Active Cases</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.active)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "yellow", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Tests</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.tests)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "blue", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Critical Cases</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.critical)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "brown", height: 3 }} />
                </Card>
            </View>

        </View>
    )
}


export function TodayStaticsCard(props) {
    if (!JSON.stringify(props.data.cases) || !JSON.stringify(props.vaccineData.todayCases)) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>

        <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Vaccined</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={props.vaccineData.todayCases.cases} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{props.vaccineData.todayCases.cases === 0  ?  'Not Provided Yet' : 'Congratulations!'}</Text>
                    <Divider style={{ backgroundColor: "rgba(146, 144, 144, 0.219)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Confirmed Casses</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.todayCases)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "rgba(0, 0, 255, 0.5)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.todayRecovered)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "rgba(0, 255, 0, 0.5)", height: 3 }} />
                </Card>
            </View>

            <View style={styles.card}>
                <Card containerStyle={{ paddingTop: 2, paddingRight: 2, paddingBottom: 0, paddingLeft: 2, borderRadius: 7 }}>
                    <Card.Title>Death</Card.Title>
                    <Divider />
                    <Text>
                        <CountUp isCounting end={(props.data.todayDeaths)} duration={2.5} thousandsSeparator="," />
                    </Text>
                    <Text style={styles.date}>{new Date(props.data.updated).toDateString()}</Text>
                    <Divider style={{ backgroundColor: "rgb(255, 3, 3)", height: 3 }} />
                </Card>
            </View>

        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    card: {
        textAlign: "center",
        justifyContent: "center",
        width: '50%',
        padding: 0
    },
    cardVaccine: {
        textAlign: "center",
        justifyContent: "center",
        width: '55%',
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    date: {
        opacity: .5,
        fontSize: 10,
        paddingBottom: 10
    }
})