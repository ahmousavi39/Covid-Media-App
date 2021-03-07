import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Pages/Dashboard';
import Map from '../Pages/Map';
import {Wiki} from '../Pages/Wiki';
import TabNavBottom from '../Components/TabNav';

const Stack = createStackNavigator();

const StackNav = () => {
    return(
        <Stack.Navigator screenOptions= {{
            headerStyle : {
              backgroundColor : 'gray'
            },
            headerTitleStyle : {
            },
            headerBackTitleStyle : {
              color : 'white'
            },
            headerTitleAlign : 'center'
          }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Statics" component={TabNavBottom} />
            <Stack.Screen name="Wiki" component={Wiki} />
            <Stack.Screen name="Map" component={Map} />
            <Stack.Screen name="About Me" component={Dashboard} />
            <Stack.Screen name="Contact Me" component={Dashboard} />
            <Stack.Screen name="Support Me" component={Dashboard} />
          </Stack.Navigator>
    )
  };

  export default StackNav;