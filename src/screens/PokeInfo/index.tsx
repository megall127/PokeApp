/* eslint-disable */
import React, { useState } from 'react';
import { Image, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/rootReducers';

export type Props = any

const PokeInfo: React.FC = () => {

  const {pokeName} = useSelector((state:RootState) => state.reducer)
  const {pokemonData} = useSelector((state:RootState) => state.reducer)

  const pokemonSelect = pokemonData.find(item => item.name == pokeName)

  return (
    <View>
      <Text>{pokemonSelect.name}</Text>
        {pokemonSelect.moves.map((itens:any) => {
          return(
            <Text key={itens.move.name}>{itens.move.name}</Text>
          )
        })}
    </View>
  );
};

export default PokeInfo;
