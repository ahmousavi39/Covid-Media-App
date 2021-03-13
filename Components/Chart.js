import React from 'react';
import { Text, Dimensions, StyleSheet } from 'react-native';
import { BarChart, LineChart } from "react-native-chart-kit";

export function AllChart({ data: {
    cases,
    deaths,
    recovered,
    active}}) {

    
    const data = {
      labels: ["Confirmed", "Recvered", "Death", "Active"],
      datasets: [
        {
          data: [cases, recovered, deaths, active]
        }
      ]
    };


  
    return (
        cases ? (
            <BarChart
            data={data}
            width={Dimensions.get("window").width}              
            height={280}
            chartConfig={{
              backgroundColor: "white",
              backgroundGradientFrom: "white",
              backgroundGradientTo: "white",
              decimalPlaces: 0, // optional, defaults to 2dp
              color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
              labelColor: (opacity = 1) => `black`,
              style: {
                borderRadius: 16,
                fontSize: 1
              }
            }
          }  
          />
        ) : (<Text>Loading...</Text>)
    )
};


export function HistoricalData({data: {newCasesArray, newDeathsArray, newRecoveredArray}}){
 return(
  newCasesArray ? (
  <LineChart
  bezier 
  width={Dimensions.get("window").width}              
  height={280}
  data={{
    datasets: [
      {
        data: newCasesArray,
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0, 0, 255, 0.5)`, // optional
      },
      {
        data: newDeathsArray,
        strokeWidth: 2,
        color: (opacity = 1) => `rgb(255, 3, 3)`, // optional
      },
      {
        data: newRecoveredArray,
        strokeWidth: 2,
        color: (opacity = 1) => `rgba(0, 255, 0, 0.5)`, // optional
      },
    ],
    legend: ['Confirmed', 'Recovered', 'Deaths'],
  }}
  chartConfig={{
    backgroundColor: "white",
    backgroundGradientFrom: "white",
    backgroundGradientTo: "white",
    decimalPlaces: 0, // optional, defaults to 2dp
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    labelColor: (opacity = 1) => `black`
  }}            
  style={{
    marginVertical: 8
  }}
/>
) : (<Text>Loading...</Text>)

)
};


export function VaccineChart(props){
  return(
    JSON.stringify(props.vaccineData.allDaysCases) ? (
      props.vaccineData.allDaysCases[0].length === 0 ? (
      <Text></Text>
      ): (
   <LineChart
   bezier 
   width={Dimensions.get("window").width}              
   height={280}
   data={{
     datasets: [
       {
         data: props.vaccineData.allDaysCases[0],
         strokeWidth: 2,
         color: (opacity = 1) => `rgba(146, 144, 144, 0.219)`,
       }
     ],
     legend: ['Vaccine'],
   }}
   chartConfig={{
     backgroundColor: "white",
     backgroundGradientFrom: "white",
     backgroundGradientTo: "white",
     decimalPlaces: 0, 
     color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
     labelColor: (opacity = 1) => `black`
   }}            
   style={{
     marginVertical: 8
   }}
 />
 )) : (<Text>Loading...</Text>)
 
 )
 };
 


export function DailyChart({ data: {
    todayCases,
    todayDeaths,
    todayRecovered,
}}) {

    const data = {
      labels: ["Confirmed", "Recvered", "Death"],
      datasets: [
        {
          data: [todayCases, todayRecovered, todayDeaths]
        }
      ]
    };
  

    return (
        todayCases ? (
          <BarChart
          data={data}
          width={Dimensions.get("window").width}              
          height={280}
          chartConfig={{
            backgroundColor: "white",
            backgroundGradientFrom: "white",
            backgroundGradientTo: "white",
            decimalPlaces: 0, // optional, defaults to 2dp
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            labelColor: (opacity = 1) => `black`,
            style: {
              borderRadius: 16
            }
          }}            
        />
        ) : (<Text>Selected Coountry didn't yet provided the statics of today.</Text>)
    )
};  


const styles = StyleSheet.create({
  chartContainer: {
    flex: 1
  }
});