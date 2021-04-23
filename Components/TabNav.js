import React from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import AllStatics from '../Pages/All Statics';
import TodaysStatics from "../Pages/Today's Statics";
import {Ionicons} from '@expo/vector-icons';


const Tab = createBottomTabNavigator();

const TabNavBottom = props => {
    return(
      <Tab.Navigator tabBarOptions={{
        activeTintColor : 'tomato',
        inactiveTintColor : 'gray',
        labelStyle : {
          fontFamily : 'Dirooz'
        }
      }}>
        <Tab.Screen name="All Statics" component={AllStatics} 
        options={{
          tabBarIcon :  ({color}) => (<Ionicons name='md-menu' size={24} color={color} />),
          tabBarLabel : 'All Statics'
        }}
        />
        <Tab.Screen name="Today's Statics"  component={TodaysStatics} 
        options={{
          tabBarIcon :  ({color}) => (<Ionicons name='ios-star' size={24} color={color} />),
          tabBarLabel : "Today's Statics" 
        }}
        />
      </Tab.Navigator>
    )
  };

  export default TabNavBottom;

