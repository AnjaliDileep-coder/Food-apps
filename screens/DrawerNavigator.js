import 'react-native-gesture-handler';
import React from 'react';

import { createDrawerNavigator } from '@react-navigation/drawer';

import Dashboard from './Dashboard';
import Menu from './Menu';
import Restaurant from './Restaurant';
import Delivery_Boy from './Delivery_Boy';
import Offer from './Offer';
import Accounts from './Accounts';
import Settings from '../../Settings';

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
      <Drawer.Navigator
        drawerContentOptions={{
          activeTintColor: '#FDC913',
          itemStyle: { marginVertical: 5 },
          activeBackgroundColor: 'white',
          inactiveTintColor: '#696969',
          marginVertical: 50
        }}> 
        <Drawer.Screen
          name="Dashboard"
          options={{ drawerLabel: 'Dashboard' }}
          component={Dashboard} />
        <Drawer.Screen
          name="Menu"
          options={{ drawerLabel: 'Menu' }}
          component={Menu} />
        <Drawer.Screen
          name="Restaurant"
          options={{ drawerLabel: 'Restaurant' }}
          component={Restaurant} />
        <Drawer.Screen
          name="Delivery_Boy"
          options={{ drawerLabel: 'Delivery_Boy' }}
          component={Delivery_Boy} />
        <Drawer.Screen
          name="Offers"
          options={{ drawerLabel: 'Offer' }}
          component={Offer} />
        <Drawer.Screen
          name="Accounts"
          options={{ drawerLabel: 'Accounts' }}
          component={Accounts} />
        <Drawer.Screen
          name="Settings"
          options={{ drawerLabel: 'Settings' }}
          component={Settings} />
      </Drawer.Navigator>
  );
}
export default DrawerNavigator;