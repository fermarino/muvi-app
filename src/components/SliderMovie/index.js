import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import { Container, BannerImg, Title, RateContainer, Rate } from './styles'

function SliderMovie( {data}) {
  return(
    <Container activeOpacity={0.7}>
      <BannerImg source={{ uri: `https://image.tmdb.org/t/p/original/${data.poster_path}` }} />

      <Title numberOfLines={1}>{data.title}</Title>

      <RateContainer>
        <Ionicons name='star' size={13} color='#e7a74e' />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

    </Container>
  )
}

export default SliderMovie;