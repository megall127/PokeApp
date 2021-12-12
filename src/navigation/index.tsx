/* eslint-disable */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import PokeHome from '../screens/PokeHome';
import { routes } from './routes';
import PokeInfo from '../screens/PokeInfo';
import { useDispatch } from 'react-redux';
import { PokeActions } from '../store/ducks/home/actions';
import getPokemonList from '../store/ducks/home/sagas';

const Stack = createNativeStackNavigator();

const Routes = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(PokeActions.getPokemonsRequest())
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={routes.POKE_HOME}>
        <Stack.Screen name={routes.POKE_HOME} component={PokeHome}/>
        <Stack.Screen name={routes.POKE_INFO} component={PokeInfo}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Routes;