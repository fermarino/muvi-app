import React, { useState, useEffect } from 'react';
import { ActivityIndicator, ScrollView } from 'react-native';
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  Slider
} from './styles';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';
import SliderMovie from '../../components/SliderMovie';

import api, { key } from '../../services/api';
import { getListMovies, randomMovie } from '../../utils/movie';

import { useNavigation } from '@react-navigation/native';

function Home() {
  
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);
  const [bannerMovie, setBannerMovie] = useState({});
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    async function getMovies() {
      const [nowData, popularData, topData] = await Promise.all([
        api.get('/movie/now_playing', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/popular', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
        api.get('/movie/top_rated', {
          params: {
            api_key: key,
            language: 'pt-BR',
            page: 1,
          }
        }),
      ])

      if(isActive) {
        const nowList = getListMovies(10, nowData.data.results);
        const popularList = getListMovies(5, popularData.data.results);
        const topList = getListMovies(10, topData.data.results);

        setBannerMovie(nowData.data.results[randomMovie(nowData.data.results)])
  
        setNowMovies(nowList);
        setPopularMovies(popularList);
        setTopMovies(topList);
        setLoading(false)
      }

    }

    getMovies();

    return () => {
      isActive = false;
      ac.abort();
    }
  }, [])


  function navigateDetailsPage(item) {
    navigation.navigate('Details', { id: item.id });
  }

  function handleSearchMovie() {
    if(search === '') return;

    navigation.navigate('Search', { name: search })
    setSearch('');
  }

  if(loading) {
    return(
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    )
  }

  return (
    <Container>
      <Header title="Muvi" />

      <SearchContainer>
        <Input
          placeholder="Pesquisar filme"
          placeholderTextColor="#495057"
          value={search}
          onChangeText={ (text) => setSearch(text) }
          />
        <SearchButton onPress={handleSearchMovie}>
          <Feather name="search" size={25} color="#fff" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>

        <BannerButton activeOpacity={0.8} onPress={ () => navigateDetailsPage(bannerMovie) } >
          <Banner
            resizeMethod="resize"
            source={{
              uri: `https://image.tmdb.org/t/p/original/${bannerMovie.poster_path}`
            }}
          />
        </BannerButton>

        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={ ({ item } ) => <SliderMovie data={item} navigatePage={ () => navigateDetailsPage(item) } /> }
          keyExtractor={ (item) => String(item.id) }
        />

        <Title>Populares</Title>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => <SliderMovie data={item} navigatePage={ () => navigateDetailsPage(item) } />}
          keyExtractor={ (item) => String(item.id) }
        />
        
        <Title>Mais votados</Title>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }) => <SliderMovie data={item} navigatePage={ () => navigateDetailsPage(item) } />}
          keyExtractor={ (item) => String(item.id) }
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
