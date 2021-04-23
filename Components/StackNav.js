import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Pages/Dashboard';
import TabNavBottom from '../Components/TabNav';

const Stack = createStackNavigator();

const StackNav = () => {
    return(
        <Stack.Navigator screenOptions= {{
            headerStyle : {
              backgroundColor : 'gray'
            },
            headerTitleStyle : {
              fontFamily : 'Dirooz'
            },
            headerBackTitleStyle : {
              fontFamily : 'Dirooz',
              color : 'white'
            },
            headerTitleAlign : 'center'
          }}>
            <Stack.Screen name="Dashboard" component={Dashboard} />
            <Stack.Screen name="Statics" component={TabNavBottom} />
            <Stack.Screen name="Wiki" component={Dashboard} />
            <Stack.Screen name="Map" component={Dashboard} />
            <Stack.Screen name="About Me" component={Dashboard} />
            <Stack.Screen name="Contact Me" component={Dashboard} />
            <Stack.Screen name="Support Me" component={Dashboard} />
          </Stack.Navigator>
    )
  };

  export default StackNav;