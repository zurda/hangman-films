import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  background-color: ${(props) => props.theme.colors.dark};
  font-weight: bold;
  font-family: 'Roboto', sans-serif; 
  padding: 16px 32px;

  button {
    background-color: transparent;
    border: 0;
  }
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  color: #fff;

  h1 {
    font-size: 1.5rem;
  }

  h2{
    font-size: 0.875rem;
    font-weight: 400;
  }
`