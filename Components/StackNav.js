import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Dashboard from '../Pages/Dashboard';
import Map from '../Pages/Map';
import Contact from '../Pages/Contact';
import Wiki from '../Pages/Wiki';
import About from '../Pages/About';
import Support from '../Pages/Support';
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
            <Stack.Screen name="About Me" component={About} />
            <Stack.Screen name="Contact Me" component={Contact} />
            <Stack.Screen name="Support Me" component={Support} />
          </Stack.Navigator>
    )
  };

  export default StackNav;