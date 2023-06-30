import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #010D22;
  flex: 1;
`

export const Header = styled.View`
  position: absolute;
  display: flex;
  top: 30px;
  flex-direction: row;
  justify-content: space-between;
  padding: 0 15px;
  width: 100%;
  z-index: 99;
  
`

export const HeaderButton = styled.TouchableOpacity`
  background-color: #010D99 ;
  border-radius: 25px;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;


`

export const Banner = styled.Image`
  border-bottom-left-radius: 45px;
  border-bottom-right-radius: 45px;
  object-fit: fill;
  height: 400px;
  width: 100%;
`

