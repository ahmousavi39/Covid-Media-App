import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid, StylesProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import { StyleSheet, Text, View } from 'react-native';




export default function AllStaticsCard(props) {
    if (!JSON.stringify(props.data.cases)) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid rgba(0, 0, 255, 0.5)", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom >
                            {/* {t('con.1')} */}
                            Confirmed Casses
                        </Typography>
                        <Typography variant="h5"  ><CountUp start={0} end={
                            (props.data.cases).toString()
                        }
                            duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary" >{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid rgba(0, 255, 0, 0.5)", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {(t('rec.1'))} */}
                            Recovered
                        </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.recovered).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid rgb(255, 3, 3)", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {t('dea.1')} */}
                            Death
                            </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.deaths).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid yellow", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {t('Active.1')} */}
                    Active Cases
                </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.active).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid blue", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {t('Tests.1')} */}
                    Tests
                    </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.tests).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>

                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid brown", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {t('CriticalCases.1')} */}
                    Critical Cases
                    </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.critical).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>

                    </CardContent>
                </Grid>

            </Grid>


        </View>
    )
}


export function TodayStaticsCard(props) {
    if (!JSON.stringify(props.data.cases)) {
        return <Text>Loading...</Text>
    }

    return (
        <View style={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid rgba(0, 0, 255, 0.5)", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom >
                            {/* {t('con.1')} */}
                        Confirmed Casses
                    </Typography>
                        <Typography variant="h5"  ><CountUp start={0} end={
                            (props.data.todayCases).toString()
                        }
                            duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary" >{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid rgba(0, 255, 0, 0.5)", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {(t('rec.1'))} */}
                        Recovered
                    </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.todayRecovered).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xc={12} md={3} style={{borderBottom: "10px solid rgb(255, 3, 3)", margin: "2% 0%", width: "30%", height: "130px" }} >
                    <CardContent style={{ paddingLeft: '0%', paddingRight: '1', paddingTop: '2px', paddingBottom: '9px' }}>
                        <Typography color="textSecondary" gutterBottom>
                            {/* {t('dea.1')} */}
                        Death
                        </Typography>
                        <Typography variant="h5"><CountUp start={0} end={
                            (props.data.todayDeaths).toString()
                        } duration={2.5} separator="," /></Typography>
                        <Typography color="textSecondary">{new Date(props.data.updated).toDateString()}</Typography>
                    </CardContent>
                </Grid>
            </Grid>


        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "10px 0"
    },
    card: {
        margin: "2% 0%",
        width: "50%",
        height: "130px"
    }
})