/* eslint-disable */
import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Button, Text, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { routes } from '../../navigation/routes';
import { PokeActions } from '../../store/ducks/home/actions';
import getPokemonsList from '../../store/ducks/home/sagas';


const PokeHome: React.FC = () => {

  const navigation = useNavigation();
  

  return (
    <View>
        <Button title='Info' onPress={()=> navigation.navigate(routes.POKE_INFO)}/>
    </View>
  );
};

export default PokeHome;
