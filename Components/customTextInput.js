import React from 'react';
import { TextInput, StyleSheet, Platform } from 'react-native';


function TextInputCustom(props) {
    return (
        <TextInput {...props} style={[styles.textInput, props.style]}></TextInput>
    )
};

export default TextInputCustom;

const styles = StyleSheet.create({
    textInput: {
        width: '80%',
        padding: 10,
        margin: 10,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        borderWidth : Platform.OS == 'ios' ? 1 : 0,
        ...Platform.select({
            ios : {
                backgroundColor : 'white'
            },
            android : {
                backgroundColor : 'transparent'
            }
        })
    }
})