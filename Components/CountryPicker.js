import React, { useState, useEffect } from 'react';
import { fetchCountries } from '../Data/dummyData';
import Select from 'react-select';
import { StyleSheet, Text, View } from 'react-native';


const CountryPicker = (props) => {
    const [fetchedCountries, setFetchedCountries] = useState([]);

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
                    value: project_name,
                    label: project_name
                }
            }
        )

    const newFirstElement = { label: "Global", value: "" }
    const newArray = [newFirstElement].concat(searchList);

    return (
        <View style={styles.formControl}>
            <Text>
                {/* {t('Select.1')} */}
                Select Country
            </Text>
            <Select
                style={styles.formControl}
                placeholder="Global"
                defaultValue=""
                options={newArray}
                onChange={e => props.handleCountryChange(e.value)} />
        </View>
    )
}

export default CountryPicker;


const styles = StyleSheet.create({
    formControl : {
        width : "90%",
        marginBottom: "30px",
        marginRight: "auto",
        marginLeft: "auto",
        marginTop: "5%",
        textAlign: "center"
        }
  })