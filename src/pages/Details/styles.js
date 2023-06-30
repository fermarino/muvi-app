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
  background-color: rgba( 0, 0, 0, 0.5 ) ;
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

export const LinkButton = styled.TouchableOpacity`
  position: absolute;
  top: 365px;
  right: 13px;
  justify-content: center;
  align-items: center;
  background-color: rgb( 0, 0, 0 );
  border-radius: 35px;
  height: 55px;
  width: 55px;
  z-index: 99;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  padding: 8px 14px;
`

export const RatingArea = styled.View`
  background-color: #f2ba43;
  border-radius: 35px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 3px;
  margin-left: 10px;
  margin-top: 13px;
  width: 80px;
  height: 30px;
`;

export const Rate = styled.Text`
  color: #000;
  font-weight: 700;
  font-size: 14px;
`

export const GenreList = styled.FlatList`
  
`

