import React, { useState, useEffect } from 'react';
import { ScrollView } from 'react-native';
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
import { getListMovies } from '../../utils/movie';

function Home() {
  
  const [nowMovies, setNowMovies] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]);

  useEffect(() => {
    let isActive = true;

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

      const nowList = getListMovies(10, nowData.data.results);
      const popularList = getListMovies(5, popularData.data.results);
      const topList = getListMovies(10, topData.data.results);

      setNowMovies(nowList);
      setPopularMovies(popularList);
      setTopMovies(topList);

    }

    getMovies();
  }, [])

  return (
    <Container>
      <Header title="Muvi" />

      <SearchContainer>
        <Input placeholder="Pesquisar" placeholderTextColor="#495057" />
        <SearchButton>
          <Feather name="search" size={25} color="#fff" />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>

        <BannerButton activeOpacity={0.8} onPress={() => alert('Clicou')}>
          <Banner
            resizeMethod="resize"
            source={{
              uri: 'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80'
            }}
          />
        </BannerButton>

        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={nowMovies}
          renderItem={({ item }) => <SliderMovie data={item} />}
          keyExtractor={ (item) => String(item.id) }
        />

        <Title>Populares</Title>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularMovies}
          renderItem={({ item }) => <SliderMovie data={item} />}
          keyExtractor={ (item) => String(item.id) }
        />
        
        <Title>Mais votados</Title>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topMovies}
          renderItem={({ item }) => <SliderMovie data={item} />}
          keyExtractor={ (item) => String(item.id) }
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
