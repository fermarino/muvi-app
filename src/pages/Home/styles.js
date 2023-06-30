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


export const Title = styled.Text`
  color: #fff;
  margin: 20px 0 10px 15px;
  font-size: 24px;
  font-weight: bold;
`;

export const BannerButton = styled.TouchableOpacity`
`;

export const Banner = styled.Image`
  border-radius: 15px;
  height: 250px;
  margin: 0 2px;
  object-fit: fill;
`;

export const Slider = styled.FlatList`
  height: 250px;
  padding: 0 15px;
`;





