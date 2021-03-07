import React from 'react';
import { View, StyleSheet } from 'react-native';


const CardCustom = props => {
    return (<View style={[styles.card, props.style]}>{props.children}</View>)
};

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#ddd',
        justifyContent: 'center',
        alignItems: 'stretch',
        borderRadius: 10,
        padding: 10,
        margin: 10,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 5,
        shadowRadius: 6,
        elevation: 10
    },
    conat : {
        backgroundColor : 'black'
    }
})


export default CardCustom;

