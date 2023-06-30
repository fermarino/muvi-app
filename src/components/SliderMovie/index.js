import React from 'react';
import { Ionicons } from '@expo/vector-icons'

import { Container, BannerImg, Title, RateContainer, Rate } from './styles'

function SliderMovie() {
  return(
    <Container activeOpacity={0.7}>
      <BannerImg source={{ uri: 'https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1113&q=80' }} />

      <Title numberOfLines={1}>Aftersun</Title>

      <RateContainer>
        <Ionicons name='star' size={13} color='#e7a74e' />
        <Rate>9/10</Rate>
      </RateContainer>

    </Container>
  )
}

export default SliderMovie;