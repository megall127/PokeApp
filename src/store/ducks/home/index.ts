/* eslint-disable */
import { PokeState, PokeTypes } from './types';
import { Reducer } from 'redux';

const INITIAL_STATE: PokeState = {
  pokemonName: [],
  pokemonData: [],
  pokeName: null,
  favoritePokemons:[]
}


const reducer: Reducer<PokeState> = (state = INITIAL_STATE, action) => {
    switch(action.type) {
      case PokeTypes.GET_POKEMONS_NAME_REQUEST:
        return {...state, 
          pokemonName: action.payload};
      case PokeTypes.GET_POKEMONS_DATA_REQUEST:
        return{...state,
          pokemonData: action.payload};
      case PokeTypes.SET_POKEMONS_NAME:
        return{...state,
          pokeName: action.payload};
      case PokeTypes.ADD_FAVORITE_POKEMONS:
        return{...state,
          favoritePokemons: [...state.favoritePokemons, action.payload.name]}
      default: 
          return state;
        }
    
    }
    
  
  export default reducer;