import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Movies from '../screens/Movies';
import Tv from '../screens/Tv';
import Search from '../screens/Search';
import { View, Text } from 'react-native';
import { useColorScheme } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {
  BG_COLOR,
  BLACK_COLOR,
  DARK_GRAY,
  DARK_PURPLE,
  DM_FONT_COLOR,
  FONT_COLOR,
  GRAY_COLOR,
  GREEN_COLOR,
  LIGHT_BLACK_COLOR,
  PURPLE,
} from '../color';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const isDark = useColorScheme() === 'dark';

  return (
    <Tab.Navigator
      sceneContainerStyle={{
        backgroundColor: isDark ? DARK_GRAY : 'white',
      }}
      screenOptions={{
        tabBarStyle: {
          backgroundColor: isDark ? DARK_GRAY : 'white',
        },
        tabBarActiveTintColor: isDark ? PURPLE : DARK_PURPLE,
        tabBarInactiveTintColor: isDark ? LIGHT_BLACK_COLOR : GRAY_COLOR,
        headerStyle: {
          backgroundColor: isDark ? DARK_GRAY : 'white',
        },
        headerTitleStyle: {
          color: isDark ? 'white' : FONT_COLOR,
        },
        tabBarLabelStyle: {
          marginTop: -7,
          fontSize: 12,
          fontWeight: '600',
        },
      }}
    >
      <Tab.Screen
        name="Movies"
        component={Movies}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'film' : 'film-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="TV"
        component={Tv}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'tv' : 'tv-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={Search}
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <Ionicons
              name={focused ? 'search' : 'search-outline'}
              size={size}
              color={color}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Tabs;
