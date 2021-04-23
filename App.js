import React,{useState} from 'react';
// import * as font from 'expo-font';
// import {AppLoading} from 'expo';
import { NavigationContainer } from '@react-navigation/native';
import StackNav from './Components/StackNav';


// const loadFont = () => {
//   Font.loadAsync({
//     Dirooz : require('./assets/fonts/Dirooz.ttf')
//   })
// }

export default function App() {
  const [loadedData, setLoadedData] = useState(false);
  

  // if(!loadedData)
  // {
  //   return(<AppLoading startAsync={loadFont} onFinish={() => setLoadedData(true)} onError={console.warn} />)
  // }
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
}

 


