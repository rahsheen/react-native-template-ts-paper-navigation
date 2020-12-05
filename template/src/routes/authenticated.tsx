import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerContent} from '../components/DrawerContent';
import {useDarkTheme} from '../context/theme-context';
import {Dashboard} from '../screens';

export type AuthenticatedRoutesParamsList = {
  Home: undefined;
};

const Drawer = createDrawerNavigator<AuthenticatedRoutesParamsList>();

export default function AuthenticatedRoutes() {
  const {theme} = useDarkTheme();

  return (
    <NavigationContainer theme={theme}>
      <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
        <Drawer.Screen name="Home" component={Dashboard} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
