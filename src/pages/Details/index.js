import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  HeaderButton,
  Banner
} from './styles';

import { Feather, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';

function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});

  useEffect(() => {
    let isActive = true;

    async function getMovie() {
      const response = await api.get(`/movie/${route.params?.id}`, {
        params: {
          api_key: key,
          language: 'pt-BR', 
        }
      })
      .catch((err) => {
        console.log(err)
      })

      if(isActive) {
        setMovie(response.data)
      }

    }

    if(isActive) {
      getMovie();
    }

    return () => {
      isActive = false
    }

  }, [])

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={ () => navigation.goBack() } >
          <Feather
            name="arrow-left"
            size={25}
            color="#fff" />
        </HeaderButton>
        <HeaderButton activeOpacity={0.7}>
          <Ionicons
            name="bookmark"
            size={25}
            color="#fff" />
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod='resize'
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}` }}
      />
    </Container>
  );
}

export default Details;
