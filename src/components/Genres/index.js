import React from "react";
import { Container, Genre } from './styles';

function Genres({ data }) {
  return (
    <Container>
      <Genre>{data.name}</Genre>
    </Container>
  )
}

export default Genres;