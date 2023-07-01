import React, { useEffect, useState } from "react";
import { Container, MoviesList } from './styles';

import SearchMovie from '../../components/SearchMovie';

import api, { key } from '../../services/api';

import { useNavigation, useRoute } from "@react-navigation/native";

function Search() {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect( () => {
    let isActive = true;

    async function getMovieBySearch() {
      const response = await api.get('/search/movie', {
        params: {
          query: route?.params?.name,
          api_key: key,
          language: 'pt-BR',
          page: 1,
        }
      })

      if(isActive) {
        setMovie(response.data.results);
        setLoading(false);
      }

    }

    if(isActive) {
      getMovieBySearch();
    }

    return () => {
      isActive = false;
    }

  }, [])

  function navigateToDetailsPage(item) {
    navigation.navigate('Details', { id: item.id })
  }

  if(loading) {
    return (
      <Container></Container>
    )
  }

  return(
    <Container>
      <MoviesList 
        data={movie}
        showsVerticalScrollIndicator={false}
        keyExtractor={ (item) => String(item.id) }
        renderItem={ ({item}) => <SearchMovie data={item} navigatePage={ () => navigateToDetailsPage(item) }/> }
      />
    </Container>
  )
}

export default Search;