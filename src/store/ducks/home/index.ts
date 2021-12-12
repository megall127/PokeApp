/* eslint-disable */
import { Reducer } from 'redux';
import { PokeState, PokeTypes } from './types';

const INITIAL_STATE: PokeState = {
  pokemons: [],
}

const reducer = (state = INITIAL_STATE, action: any) => {
    switch (action.type) {
      case PokeTypes.TAKE_POKEMONS_DATA_REQUEST:
        console.log(action)
        return {
          ...state,
        };  
      case PokeTypes.TAKE_POKEMONS_DATA_SUCESS:
        return {
          ...state,
            pokemons: action,     
        }
      case PokeTypes.TAKE_POKEMONS_DATA_FAIL:
        return{
          pokemons: []
        }
        default:
          return state;
    }
  }
  
  export default reducer;