/* eslint-disable */
export enum PokeTypes {
    TAKE_POKEMONS_DATA_SUCESS = '@home/TAKE_POKEMONS_DATA_SUCESS',
    TAKE_POKEMONS_DATA_REQUEST = '@home/TAKE_POKEMONS_DATA_REQUEST',
    TAKE_POKEMONS_DATA_FAIL = '@home/TAKE_POKEMONS_DATA_FAIL'
   }


  export interface PokeState {
   readonly pokemons: any[];
  }