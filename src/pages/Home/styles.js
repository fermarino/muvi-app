import styled from 'styled-components/native';
import { LinearGradient } from 'expo-linear-gradient';

export const Container = styled.SafeAreaView`
  background-color: #010D22;
  flex: 1;
  padding: 4px 0; 
`;

export const SearchContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 14px;
  margin: 14px 0;
  
  height: 60px;
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
  margin: 18px 0 10px 15px;
  font-size: 24px;
  font-weight: bold;
`;

export const BannerButton = styled.TouchableOpacity`
`;


export const Overlay = styled(LinearGradient).attrs({
  colors: ['rgba(0, 0, 0, 0.1)', 'rgba(0, 0, 0, 0.8)'],
  start: { x: 0, y: 0 },
  end: { x: 0, y: 1 },
})`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const Banner = styled.ImageBackground`
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  height: 420px;
  margin: 0 2px;
  object-fit: fill;
`;

export const Slider = styled.FlatList`
  height: 250px;
  padding: 0 15px;
`;





