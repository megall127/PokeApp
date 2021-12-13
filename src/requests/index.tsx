/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'; 

import PokeHome from '../screens/PokeHome';
import PokeInfo from '../screens/PokeInfo';
import api from '../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { PokeActions } from '../store/ducks/home/actions';
import { View } from 'react-native';
import { RootState } from '../store/rootReducers';

const Stack = createNativeStackNavigator();

const Requests = () => {
    const dispatch = useDispatch();

    const { pokemonName, pokeName }  = useSelector((state:RootState) => state.reducer)


    function getPokemonNames(){  
        api.get('/pokemon')
        .then((res) => {
            dispatch(PokeActions.getPokemonsNameRequest(res.data.results))
        })
        .catch((err) => {
            console.log(err);
        })

        
    }

    function getPokemonsList(){
        const newList:any[] = [];
        pokemonName.forEach((item) => {
            api.get(`/pokemon/${item.name}`)
            .then((res) => {
                newList.push(res.data);
                if(newList.length === 20){
                    const orderedList = newList.sort((a, b) => {
                        return a.id - b.id;
                    })
                    dispatch(PokeActions.getPokemonsInfo(orderedList));
                }
            })
            .catch((err) => {
                console.log(err)
            })
        })
    }
    function getPokemonInfo(){
        pokemonName.forEach((item) => {
            if(item.name === pokeName) {
            api.get(`/pokemon/${item.name}`)
            .then((res) => {
                console.log(res.data.name)
            })
            .catch((err) => {
                console.log(err)
            })
        } else {
            console.log('nao deu certo')
        }
        })
    }

  useEffect(() => {
    getPokemonNames();
  },[])

  useEffect(() => {
    getPokemonsList();
},[pokemonName])

  return (
      <></>
  );
};


export default Requests;