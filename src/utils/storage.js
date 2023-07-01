import AsyncStorage from '@react-native-async-storage/async-storage';

export async function getSaveMovies(key) {
  const myMovies = await AsyncStorage.getItem(key)

  let saveMovies = JSON.parse(myMovies) || [];

  return saveMovies;
}

export async function saveMovie(key, newMovie) {
  let storedMovies = await getSaveMovies(key);

  //Verificar se o filme é duplicado
  const hasMovie = storedMovies.some( item => item.id === newMovie.id );

  if(hasMovie) {
    return;
  }

  storedMovies.push(newMovie);

  await AsyncStorage.setItem(key, JSON.stringify(storedMovies))

}

// Deletar filme da lista

export async function deleteMovie(id) {
  let storedMovies = await getSaveMovies('@muvi');

  let myMovies = storedMovies.filter( item => {
    return (item.id !== id)
  })

  await AsyncStorage.setItem('@muvi', JSON.stringify(myMovies));
  return myMovies;
}

// Filtrar filmes salvos 

export async function hasMovie() {
  let storedMovies = await getSaveMovies('@muvi');

  const hasMovie = storedMovies.find( item => item.id === movie.id );

  if(hasMovie) {
    return true
  }

  return false;

}