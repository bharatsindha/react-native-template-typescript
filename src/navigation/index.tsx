import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ColorSchemeName, useColorScheme} from 'react-native';
import {useSelector} from 'react-redux';
import {AppNavigator} from '@/navigation/AppNavigator';
import {AuthNavigator} from '@/navigation/AuthNavigator';
import {getUser} from '@/selectors/UserSelectors';
import {theme} from '@/theme';

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme: ColorSchemeName = useColorScheme();

  return (
    <NavigationContainer theme={theme[scheme ?? 'light']}>
      {user ? <AppNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
}
