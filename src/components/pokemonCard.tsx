/* eslint-disable */
import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Button, Image, Text, View} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from '../navigation/routes';
import { PokeActions } from '../store/ducks/home/actions';
import { RootState } from '../store/rootReducers';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type Props = any



const PokemonCard: React.FC<Props>= (props) => {  
  const navigation = useNavigation();
  const dispatch = useDispatch();
  

//FUNCTIONS
  const savePokemon = (chave:any, valor:any) => {
    AsyncStorage.setItem(chave, valor)
  }

  const searchPokemon = async (chave:any) => {
      const valor:any = await AsyncStorage.getItem(chave)
      setFavoritesPokemons(valor)
  }

    const ButtonInfo = () => {
        navigation.navigate(routes.POKE_INFO);
        dispatch(PokeActions.setPokemonName(props.props.name));
    }

    savePokemon('01' , 'pokemon teste')



  return (
    <ScrollView> 
        <Image source={{
            uri:props.props && props.props.sprites.front_default   
        }}
        style={{width: 60, height: 60}} 
        />
        <Text>{props.props.name}</Text>
        <Button title='Info' onPress={()=> ButtonInfo()}/>
        <Button title='Adicionar a Pokedex' onPress={()=> dispatch(PokeActions.addFavoritePokemons(props.props))}/>
    </ScrollView>
  );
};

export default PokemonCard;
