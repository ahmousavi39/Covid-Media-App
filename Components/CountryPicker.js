import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../Data/dummyData';
import { StyleSheet, Text, View } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import {useSelector, useDispatch} from 'react-redux';
import {changeCountry} from '../actions';

const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

    const dispatch = useDispatch();

    const selectedCountry = useSelector(state => state.countryGlobal);
    
    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountries())
        }
        fetchAPI();
    }, [setFetchedCountries]);

    const searchList =
        fetchedCountries.map(
            (project_name) => {
                return {
                    label: project_name,
                    value: project_name
                }
            }
        )

    const newArray = searchList;

    return (
        <View style={styles.formControl}>
            <Text style={{ textAlign: 'center', paddingBottom: 6 }}>Select Country</Text>
            <View style={{ backgroundColor: 'white' }}>
                <Picker
                    placeholder="Global"
                    selectedValue={selectedCountry}
                    style={{ width: 250, marginRight: 'auto', marginLeft: 'auto' }}
                    dropdownIconColor="black"
                    onValueChange={(itemValue, itemIndex) => {
                        dispatch(changeCountry(itemValue));
                        // props.handleCountryChange();
                    }}>
                    <Picker.Item label="Global" value="" />
                    {newArray.map(i => <Picker.Item label={i.label} value={i.value} />)}
                </Picker>
            </View>
        </View>
    )
}

export default CountryPicker;


const styles = StyleSheet.create({
    formControl: {
        marginBottom: 30,
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '5%',
        textAlign: 'center'
    }
})