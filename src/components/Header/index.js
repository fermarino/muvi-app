import React from "react";

import { Feather } from '@expo/vector-icons'

import { Container, Title, MenuButton } from './styles';
import { useNavigation } from "@react-navigation/native";

function Header({title}) {
  
  const navigation = useNavigation()

  return(
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name="menu" size={30} color='#fff' />
      </MenuButton>
      <Title>{title}</Title>
      <MenuButton>
        <Feather name="bell" size={22} color='#fff' />
      </MenuButton>
    </Container>
  )
}

export default Header;