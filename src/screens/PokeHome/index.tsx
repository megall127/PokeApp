/* eslint-disable */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, ScrollView, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import PokemonCard from '../../components/pokemonCard';
import { routes } from '../../navigation/routes';
import api from '../../services/api';
import { PokeState } from '../../store/ducks/home/types';
import { RootState } from '../../store/rootReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Props = any


const PokeHome: React.FC<Props>= () => {

  const { pokemonData, favoritePokemons }  = useSelector((state:RootState) => state.reducer);

  const navigation = useNavigation();


  useEffect(() => {
  
  },[])
  

  return (
    <ScrollView>
      {console.log(favoritePokemons)}
      <Button title='Pokedex' onPress={()=> navigation.navigate(routes.FAVORITE_POKEMONS)}/>
        {pokemonData.map((pokemons) => {
          return(
          <PokemonCard key={pokemons.name} props={pokemons}></PokemonCard>
          )
        })}
    </ScrollView>
  );
};

export default PokeHome;
