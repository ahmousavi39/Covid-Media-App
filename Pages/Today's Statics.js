import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, RefreshControl, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { TodayStaticsCard } from '../Components/StaticsCard';
import CountryPicker from '../Components/CountryPicker';
import { DailyChart, HistoricalData } from '../Components/Chart';
import { fetchData, fetchHistoricalData, fetchVaccineData } from '../Data/dummyData';
import { useSelector } from 'react-redux';

const wait = (timeout) => {
  return new Promise(resolve => setTimeout(resolve, timeout));
}

export default function TodaysStatics(props) {
  const [data, setData] = useState({});
  const [historicalData, setHistoricalData] = useState({});
  const [vaccineData, setVaccineData] = useState({});
  const [refreshing, setRefreshing] = React.useState(false);
  
  var selectedCountry = useSelector(state => state.countryGlobal);

  // async function fetchAPI() {
  //   selectedCountry = useSelector(state => state.countryGlobal);
  //   const fetchedData = await fetchData(selectedCountry);
  //   setData(fetchedData);
  //   if (selectedCountry.length < 1) {
  //     let fetchedHistoricalData = await fetchHistoricalData();
  //     let fetchedVaccineData = await fetchVaccineData();
  //     setHistoricalData(fetchedHistoricalData);
  //     setVaccineData(fetchedVaccineData);
  //   } else {
  //     let fetchedHistoricalData = await fetchHistoricalData(selectedCountry);
  //     let fetchedVaccineData = await fetchVaccineData(selectedCountry);
  //     setHistoricalData(fetchedHistoricalData);
  //     setVaccineData(fetchedVaccineData);
  //   };
  // }

  async function fetchAPI() {
    const fetchedData = await fetchData(selectedCountry);
    setData(fetchedData);
    if (selectedCountry.length == '') {
      let fetchedHistoricalData = await fetchHistoricalData();
      let fetchedVaccineData = await fetchVaccineData();
      setHistoricalData(fetchedHistoricalData);
      setVaccineData(fetchedVaccineData);
    } else {
      let fetchedHistoricalData = await fetchHistoricalData(selectedCountry);
      let fetchedVaccineData = await fetchVaccineData(selectedCountry);
      setHistoricalData(fetchedHistoricalData);
      setVaccineData(fetchedVaccineData);
    };
  }

  useEffect(() => {
    fetchAPI();
  }, [selectedCountry]);

  const onRefresh = React.useCallback(async () => {
    setRefreshing(true);    
    fetchAPI();
    wait(2000).then(() => setRefreshing(false));
  }, []);


  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={40}>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <TodayStaticsCard data={data} vaccineData={vaccineData} />
            <CountryPicker />
            <DailyChart data={data} />
            <HistoricalData data={historicalData} />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}


const styles = StyleSheet.create({
  rowList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'gray',
    borderRadius: 10,
    padding: 10,
    margin: 5
  },
  listHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 10,
    margin: 5
  }
})


