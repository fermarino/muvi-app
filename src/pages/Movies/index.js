import React, { useEffect, useState } from "react";


import { Container, MoviesList } from "./styles";
import { getSaveMovies, deleteMovie } from "../../utils/storage";
import Header from '../../components/Header';
import FavoriteMovie from '../../components/FavoriteMovie';
import { useNavigation, useIsFocused } from "@react-navigation/native";


function Movies() {
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [movies, setMovies] = useState([])

  useEffect(() => {
    let isActive = true;

    async function getFavoriteMovies() {
      const results = await getSaveMovies('@muvi')

      if(isActive) {
        setMovies(results);
      }

    }

    if(isActive) {
      getFavoriteMovies();
    }
    
    return () => {
      isActive = false;
    }

  }, [isFocused])

  async function handleDelete(id) {
    const results = await deleteMovie(id);
    setMovies(results)
  }

  function navigateToDetailsPage( item ) {
    navigation.navigate('Details', { id: item.id })
  }

  return (
  <Container>
    <Header title='Filmes Salvos'/>
    <MoviesList
      showsVerticalScrollIndicator={false}
      data={movies}
      keyExtractor={ item => String(item.id) }
      renderItem={ ({item}) => (
        <FavoriteMovie
          data={item}
          deleteMovie={ handleDelete }
          navigatePage={ () => navigateToDetailsPage(item) }
        />
      )}
    />
  </Container>
  )
}

export default Movies;