import 'react-native-gesture-handler';
import React, { useCallback, useEffect, useState } from 'react';
import { Text, View, Image, useColorScheme } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import { Ionicons } from '@expo/vector-icons';
import { Asset, useAssets } from 'expo-asset';
import { NavigationContainer } from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import Root from './navigation/Root';
import { darkTheme, lightTheme } from './styled';
import { ThemeProvider } from 'styled-components/native';

// 렌더링이 끝날 때까지 어플의 splash screen을 띄워준다.
// 이 때 로딩이 필요한 것들이나 api 호출 혹은 데이터베이스에서 데이터를 불러오는 등을 할 수 있다
// 다 완료되면 다른 요소를 렌더하면 되는데 이 때 splash screen이 사라지게 될 것이다.

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [assets] = useAssets([require('./PF-47.jpeg')]);
  const [loaded] = useFonts(Ionicons.font);
  const isDark = useColorScheme() === 'dark';

  // 이미지가 없거나 폰트가 없으면 즉, 둘 중 하나라도 없으면
  if (!assets || !loaded) {
    SplashScreen.hideAsync(); // splash screen을 보여줌
  } else {
    SplashScreen.preventAutoHideAsync();
  }

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <NavigationContainer>
        <Root />
      </NavigationContainer>
    </ThemeProvider>
  );
}
