import React from 'react';
import {Text, StyleSheet} from 'react-native';

const CustomText = (props) => {
    return(
        <Text style={[styles.text, props.style]}>{props.children}</Text>
    )
};
export default CustomText;
const styles = StyleSheet.create({
    text : {
        fontFamily : 'Dirooz'
    }
})