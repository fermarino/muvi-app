import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 14px;
`;

export const Title = styled.Text`
  color: red;
  font-size: 30px;
  font-weight: 700;
`;

export const RateContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 8px 0;
`;

export const Rate = styled.Text`
  color: #fff;
  font-size: 14px;
  padding-left: 5px;
`;

export const Buttons = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const ButtonTitle = styled.Text`
  color: #fff;
  font-size: 24px;
`;
export const DetailButton = styled.TouchableOpacity`
  background-color: #000;
  width: 50%;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 20px;
`;

export const DeleteButton = styled.TouchableOpacity`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
`;
