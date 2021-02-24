import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import DrawerNavigator from "./screens/DrawerNavigator";
import StackNavigator from './screens/StackNavigator';

const App = () => {
  return (
    <NavigationContainer>
    <StackNavigator/>
    </NavigationContainer>
  );
}
export default App;