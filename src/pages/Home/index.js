import React from "react";
import { Container, SearchContainer, Input, SearchButton } from './styles';
import { Feather } from '@expo/vector-icons';

import Header from '../../components/Header';

function Home() {
  return(
    <Container>
      <Header title="Muvi"/>

      <SearchContainer>
        <Input
          placeholder="Pesquisar"
          placeholderTextColor="#495057"
        />
        <SearchButton>
          <Feather name="search" size={25} color="#fff" />
        </SearchButton>
      </SearchContainer>

    </Container>
  )
}

export default Home;