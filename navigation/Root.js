import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Tabs';
import Stack from './Stack';
const RootNav = createNativeStackNavigator();

const Root = () => (
  <RootNav.Navigator
    screenOptions={{ headerShown: false, presentation: 'modal' }}
  >
    <RootNav.Screen name="Tabs" component={Tabs} />
    <RootNav.Screen name="Stack" component={Stack} />
  </RootNav.Navigator>
);
export default Root;
