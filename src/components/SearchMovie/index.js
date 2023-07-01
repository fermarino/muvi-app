import React from 'react';

import {
  Container,
  Banner,
  Title,
  Release,
  RateContainer,
  Rate,
  MovieInfos
} from './styles';

import { Ionicons } from '@expo/vector-icons';

function SearchMovie({ data }) {
  return (
    <Container>
      {data?.poster_path ? (
        <Banner
          resizeMethod="resize"
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${data?.poster_path}`
          }}
        />
      ) : (
        <Banner
          resizeMethod="resize"
          source={require('../../../assets/nophoto.jpg')}
        />
      )}

      <Title>{data?.title}</Title>
      <MovieInfos>
        <RateContainer>
          <Ionicons name="star" size={13} color="#f2ba43" />
          <Rate> {data?.vote_average}/10</Rate>
        </RateContainer>
        <Release>{data?.release_date}</Release>
      </MovieInfos>
    </Container>
  );
}

export default SearchMovie;
