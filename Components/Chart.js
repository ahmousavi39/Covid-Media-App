import React, { useState, useEffect } from 'react';
import { FetchDailyData } from '../Data/dummyData';
import { Bar } from 'react-chartjs-2';
import { Text } from 'react-native';


export default function AllChart({ data: {
    cases,
    deaths,
    recovered,
    active },
    country }) {

    const [daily, setDaily] = useState([]);

    useEffect(() => {
        const FetchAPI = async () => {
            setDaily(await FetchDailyData());
        }
        FetchAPI();
    }, []);

    return (
        cases ? (
            <Bar
                data={
                    {
                        // labels: [t('con.1'), t('rec.1'), t('dea.1'), t('Active.1')],
                        labels: ["Confirmed", "Recvered", "Death", "Active"],
                        datasets: [{
                            // label: t('peo.1'),
                            label: "People",
                            backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)', 'yellow', 'blue'],
                            data: [cases, recovered, deaths, active]
                        }]
                    }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `${country}` },
                }}
            />
        ) : (<Text>Loading...</Text>)
    )
};




export function DailyChart({ data: {
    todayCases,
    todayDeaths,
    todayRecovered,
},
    country }) {

    const [daily, setDaily] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDaily(await FetchDailyData());
        }
        fetchAPI();
    }, []);

    return (
        todayCases ? (
            <Bar
                data={
                    {
                        // labels: [t('con.1'), t('rec.1'), t('dea.1')],
                        labels: ["Confirmed", "Recovered", "Deaths"],
                        datasets: [{
                            label: "People",
                            backgroundColor: ['rgba(0,0,255,0.5', 'rgba(0,255,0,0.5)', 'rgb(255, 3, 3)'],
                            data: [todayCases, todayRecovered, todayDeaths]
                        }]
                    }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `${country}` },
                }}
            />
        ) : (<Text>Selected Coountry didn't yet provided the statics of today.</Text>)
    )
};