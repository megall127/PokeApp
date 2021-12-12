/* eslint-disable */
import { call, put, all, takeLatest } from 'redux-saga/effects';
import { PokeTypes } from './types';
import { useDispatch } from 'react-redux';


import api from '../../../services/api';
import { PokeActions } from './actions';



function getPokemonList() {
    api.get('pokemon/')
    .then((res) => {
       const response = res.data.results;
        PokeActions.getPokemonsDataSucess(response);
    })  
    .catch((err) => {
        PokeActions.getPokemonsFail();
    })
}

export default getPokemonList;