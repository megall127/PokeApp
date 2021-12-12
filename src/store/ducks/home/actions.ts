/* eslint-disable */
import { PokeTypes } from './types';
import { action } from 'typesafe-actions';
import getPokemonList from './sagas';

  const getPokemonsRequest = () => action(PokeTypes.TAKE_POKEMONS_DATA_REQUEST, getPokemonList());

  const getPokemonsDataSucess = (pokemons: any) =>
  action(PokeTypes.TAKE_POKEMONS_DATA_SUCESS, { pokemons });

  const getPokemonsFail = () => action(PokeTypes.TAKE_POKEMONS_DATA_FAIL);
  
  export const PokeActions = {
    getPokemonsRequest, 
    getPokemonsDataSucess,
    getPokemonsFail,
  };  