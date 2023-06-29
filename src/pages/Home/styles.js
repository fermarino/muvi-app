import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  background-color: #010D22;
  flex: 1;
  padding: 4px 0; 
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  margin-bottom: 8px;
  
  height: 50px;
  width: 100%;

`;

export const Input = styled.TextInput`
  background-color: transparent;
  border: 0.5px solid #fff;
  border-radius: 10px;
  padding: 8px 15px;
  font-size: 20px;
  color: #fff;

  width: 85%;
  height: 50px;
`;

export const SearchButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  
  height: 50px;
  width: 15%;
`;



