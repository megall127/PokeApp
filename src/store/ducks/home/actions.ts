/* eslint-disable */
import { PokeState, PokeTypes } from './types';
import { action } from 'typesafe-actions';
  

  const getPokemonsNameRequest = (pokemonName:any) => action(PokeTypes.GET_POKEMONS_NAME_REQUEST, pokemonName);

  const getPokemonsInfo = (PokemonData:any) => action(PokeTypes.GET_POKEMONS_DATA_REQUEST, PokemonData);

  const setPokemonName = (pokeName:string) => action(PokeTypes.SET_POKEMONS_NAME, pokeName)

  const addFavoritePokemons = (favoritePokemons:any) => action(PokeTypes.ADD_FAVORITE_POKEMONS, favoritePokemons)

  
  export const PokeActions = {
    getPokemonsNameRequest,
    getPokemonsInfo,
    setPokemonName,
    addFavoritePokemons
  };    