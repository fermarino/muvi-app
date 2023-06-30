import React from 'react';
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

function Home() {
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
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <SliderMovie />}
        />

        <Title>Populares</Title>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <SliderMovie />}
        />
        
        <Title>Mais votados</Title>
        <Slider
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={[1, 2, 3, 4, 5]}
          renderItem={({ item }) => <SliderMovie />}
        />
      </ScrollView>
    </Container>
  );
}

export default Home;
