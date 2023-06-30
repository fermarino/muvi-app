import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 13px 13px 13px 0;
  width: 160px;
  height: 200px;
`;

export const BannerImg = styled.Image`
  border-radius: 10px;
  height: 190px;
  width: 100%;
`;

export const Title = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-top: 8px;
  margin-left: 5px;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  margin-left: 5px;
`;

export const Rate = styled.Text`
  color: #fff;
  font-size: 13px;
  margin-left: 5px;
`;