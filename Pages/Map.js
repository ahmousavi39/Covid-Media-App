import React, { useState } from 'react';
import { WebView } from 'react-native-webview';

export default function Map() {

    return (
            <WebView source={{ uri: 'http://covidmediainfo.com/en/app/map/only' }} style={{ marginTop: 20, maxHeight: 600 }} />
    )
};