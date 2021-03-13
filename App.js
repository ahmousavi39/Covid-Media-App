import React, { useState } from 'react';
// import * as font from 'expo-font';
// import {AppLoading} from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Components/StackNav';
import { createStore } from 'redux';
import allReducers from './reducers';
import { Provider } from 'react-redux';
import {LoadingPage} from './Pages/LoadingPage';

const store = createStore(allReducers);

export default function App() {
  const [loadedData, setLoadedData] = useState(false);
  setTimeout(() => {setLoadedData(true)}, 3200);

  return(
    loadedData ? (      
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider> ) : 
    (<LoadingPage />)
  );
}






