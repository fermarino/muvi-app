import styled from 'styled-components/native';

export const Container = styled.View `
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  
  padding: 18px;
  height: 70px;
  margin: 2px 15px;
  z-index: 99;
`;

export const MenuButton = styled.TouchableOpacity `
  height: 70px;
  align-items: center;
  flex-direction: row;
  right: 14px;
`;

export const Title = styled.Text `
  color: #fff;
  font-size: 30px;
  font-weight: bold;
  text-transform: uppercase;
  margin-right: 28px;
`;