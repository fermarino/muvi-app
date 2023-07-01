import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 15px;
`

export const Banner = styled.Image`
  border-radius: 10px;
  width: 100%;
  height: 250px;
`

export const Title = styled.Text`
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  padding-top: 12px;
  text-align: center;
`

export const Release = styled.Text`
  color: #fff;
  font-size: 12px;
  font-weight:  500;
`

export const RateContainer = styled.View`
display: flex;
flex-direction: row;
align-items: center;
background-color: rgba( 0, 0, 0, 0.6 );
border-radius: 35px;
max-width: 90px;
height: 25px;
padding: 2px 8px;
`

export const Rate = styled.Text`
  text-align: center;
  color: #fff;
`

export const MovieInfos = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 10px 5px;
`