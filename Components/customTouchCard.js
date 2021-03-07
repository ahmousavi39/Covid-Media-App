import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const CustomTouchCard = (props) => {
    const [heightNewSize, setHeightNewSize] = useState(Dimensions.get('window').height);

    const dimensionItem = {
      height : heightNewSize < 400 ? 110 : 150
    };
   
    useEffect(() => {
      const onDimensionChange = () => {
        setHeightNewSize(Dimensions.get('window').height);
      };
      Dimensions.addEventListener('change', onDimensionChange);
      return (() => {
        Dimensions.removeEventListener('change', onDimensionChange)
      })
    });
    return (
        <View style={[styles.item, props.style, dimensionItem]}>
            {props.children}
        </View>
    )
};
export default CustomTouchCard;

const styles = StyleSheet.create({
    item: {
        height: 200,
        width: '50%',
        padding: 10
      }
})