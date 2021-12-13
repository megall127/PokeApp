/* eslint-disable */
export enum PokeTypes {
    GET_POKEMONS_NAME_REQUEST = '@home/GET_POKEMONS_NAME_REQUEST',
    GET_POKEMONS_DATA_REQUEST = '@home/GET_POKEMONS_DATA_REQUEST',
    SET_POKEMONS_NAME = '@home/SET_POKEMONS_NAME',
    ADD_FAVORITE_POKEMONS = '@home/ADD_FAVORITE_POKEMONS'
   }


  export interface PokeState {
   readonly pokemonName: any[];
   readonly pokemonData: any[];
   readonly pokeName: string | null;
   readonly favoritePokemons: any[];
  }