import React, { useEffect, useState } from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AllStaticsCard from '../Components/StaticsCard';
import CountryPicker from '../Components/CountryPicker';
import { AllChart, HistoricalData } from '../Components/Chart';
import { fetchData, fetchHistoricalData } from '../Data/dummyData';
import { useSelector } from 'react-redux';


export default function AllStatics(props) {
  const [data, setData] = useState({});
  const [historicalData, setHistoricalData] = useState({});

  const selectedCountry = useSelector(state => state.countryGlobal);

  useEffect(() => {
    async function fetchAPI() {
      const fetchedData = await fetchData(selectedCountry);
      setData(fetchedData);
      if (selectedCountry.length < 1) {
        let fetchedHistoricalData = await fetchHistoricalData();
        setHistoricalData(fetchedHistoricalData);
      } else {
        let fetchedHistoricalData = await fetchHistoricalData(selectedCountry);
        setHistoricalData(fetchedHistoricalData);
      };
    }
    fetchAPI();
  }, [selectedCountry]);


  return (
    <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={40}>
      <ScrollView>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View>
            <AllStaticsCard data={data} />
            <CountryPicker />
            <AllChart data={data} />
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


