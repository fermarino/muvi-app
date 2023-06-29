import styled from 'styled-components/native';

export const Container = styled.View `
  height: 70px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 0 15px;
`;

export const MenuButton = styled.TouchableOpacity `
  height: 70px;
  align-items: center;
  flex-direction: row;
`;

export const Title = styled.Text `
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
`;