import React from "react";
import { Ionicons, Feather } from '@expo/vector-icons';

import { Container, Title, RateContainer, Rate, Buttons,  DetailButton, DeleteButton, ButtonTitle } from './styles'


function FavoriteMovie({ data, deleteMovie, navigatePage }) {
  return (
    <Container>
      <Title>{data.title}</Title>
      <RateContainer>
        <Ionicons name='star' size={13} color='#f2ba43' />
        <Rate>{data.vote_average}/10</Rate>
      </RateContainer>

    <Buttons>
      <DetailButton onPress={ () => navigatePage(data) }>
        <ButtonTitle>Ver detalhes</ButtonTitle>
      </DetailButton>
      
      <DeleteButton onPress={ () => deleteMovie(data.id) }>
        <Feather name='trash' size={24} color='#fff' />
      </DeleteButton>
    </Buttons>

    </Container>
  )
}

export default FavoriteMovie;