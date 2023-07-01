import React, { useEffect, useState } from 'react';
import {
  Container,
  Header,
  HeaderButton,
  Banner,
  LinkButton,
  Title,
  RatingArea,
  Rate,
  GenreList,
  Description
} from './styles';

import { ScrollView, Modal } from 'react-native';

import { Feather, Ionicons } from '@expo/vector-icons';

import { useNavigation, useRoute } from '@react-navigation/native';
import api, { key } from '../../services/api';
import Genres from '../../components/Genres';

import { saveMovie } from '../../utils/storage'


function Details() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState({});
  const [openLink, setOpenLink] = useState(false);

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

  async function favoriteMovie(movie) {
    await saveMovie('@muvi', movie)
  }

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.7} onPress={ () => navigation.goBack() } >
          <Feather
            name="arrow-left"
            size={25}
            color="#fff" />
        </HeaderButton>
        <HeaderButton activeOpacity={0.7} onPress={ () => favoriteMovie(movie)} >
          <Ionicons
            name="bookmark-outline"
            size={25}
            color="#fff" />
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod='resize'
        source={{ uri: `https://image.tmdb.org/t/p/original/${movie.backdrop_path}` }}
      />

      <LinkButton onPress={() => setOpenLink(true)}>
        <Feather name="link" size={20} color="#fff"/>
      </LinkButton>

      <RatingArea>
        <Ionicons name='star' size={18} color='#000'/>
        <Rate>{movie.vote_average}/10</Rate>
      </RatingArea>

      <Title numberOfLines={2}>{movie.title}</Title>

      <GenreList
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        renderItem={( {item} ) =>  <Genres data={item} />}
       />

       <ScrollView>
        <Title>Sinopse</Title>
        <Description>{movie?.overview}</Description>
       </ScrollView>
    </Container>
  );
}

export default Details;
