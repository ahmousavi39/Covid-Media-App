import React, { useState } from 'react';
import {Dimensions} from 'react-native'
import { WebView } from 'react-native-webview';

export default function Map() {

    return (
            <WebView source={{ uri: 'http://covidmediainfo.com/en/app/map/only' }} style={{ maxHeight: Dimensions.get('window').height - 20 }} />
    )
};