import React from 'react';
import { Text, StyleSheet, View, KeyboardAvoidingView, ScrollView, TouchableWithoutFeedback, Keyboard } from 'react-native';
import AllStaticsCard from '../Components/StaticsCard';
import CountryPicker from '../Components/CountryPicker';
import AllChart from '../Components/Chart';
import { fetchData } from '../Data/dummyData';


export default class AllStatics extends React.Component {
  state = {
    data: {},
    country: ''
  }

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData });
  }

  handleCountryChange = async (country) => {
    const fetchedData = await fetchData(country);

    this.setState({ data: fetchedData, country: country })
  }
  render() {
    const { data, country } = this.state;
    return (
      <KeyboardAvoidingView behavior='padding' keyboardVerticalOffset={40}>
        <ScrollView>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View>
              <AllStaticsCard isDaily={this.state.isDaily} data={data} />
              <CountryPicker country={this.state.country} handleCountryChange={this.handleCountryChange} />
              <AllChart isDaily={this.state.isDaily} data={data} country={country} />
            </View>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    )
  }
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


