import React, {useState, useEffect} from 'react';
import {View, StyleSheet, Dimensions} from 'react-native';

const CustomImgCon = (props) => {
    const [widthNewSize, setWidthNewSize] = useState(Dimensions.get('window').width);

    const dimensionImgCon = {
        width : widthNewSize / 7,
        height : widthNewSize / 7,
        borderRadius : widthNewSize / 7 / 2
      };

      useEffect(() => {
        const onDimensionChange = () => {
          setWidthNewSize(Dimensions.get('window').width);
        };
        Dimensions.addEventListener('change', onDimensionChange);
        return (() => {
          Dimensions.removeEventListener('change', onDimensionChange)
        })
      });

    return(
    <View style={[styles.container, props.style, dimensionImgCon]}>{props.children}</View>
    )
};
export default CustomImgCon;

const styles = StyleSheet.create({
    container : {
        borderRadius: 50, 
        overflow: 'hidden', 
        borderWidth: 1, 
        borderColor: 'black', 
        justifyContent: 'center', 
        alignItems: 'center',
        
    }
})