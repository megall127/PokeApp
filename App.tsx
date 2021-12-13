/* eslint-disable */
import { NavigationContainer } from '@react-navigation/native';
import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { Provider, useDispatch } from 'react-redux';
import Routes from './src/navigation';
import Requests from './src/requests';
import store from './src/store';


const App: React.FC = () => {


  useEffect(() => {
  },[])


  return (
      <Provider store={store}>
        <Requests />
      <Routes />
      </Provider>

  );
};


export default App;
