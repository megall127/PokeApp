/* eslint-disable */
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import PokeHome from '../screens/PokeHome';
import { routes } from './routes';
import PokeInfo from '../screens/PokeInfo';
import FavoritePokemons from '../screens/FavoritePokemons';


const Stack = createNativeStackNavigator();

const Routes = () => {


  useEffect(() => {
    
  },[])

  return (
    <NavigationContainer>
      <Stack.Navigator  initialRouteName={routes.POKE_HOME}>
        <Stack.Screen name={routes.POKE_HOME} component={PokeHome}/>
        <Stack.Screen name={routes.POKE_INFO} component={PokeInfo}/>
        <Stack.Screen name={routes.FAVORITE_POKEMONS} component={FavoritePokemons}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};


export default Routes;