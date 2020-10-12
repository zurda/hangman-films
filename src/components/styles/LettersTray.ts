import styled from 'styled-components';

export const LettersContainer = styled.div`
  display: grid;

  grid-template-columns: repeat(9, 1fr);
  gap: 8px;

  margin: 8px auto;
  font-family: 'Roboto';
`

export const Char = styled.button`
  background-color: ${(props) => (props.disabled ? props.theme.colors.plain : props.theme.colors.dark)};
  padding: 8px 4px;
  border-radius: 8px;
  font-weight: 700;
  width: 100%;
  color: #fff;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border: 0;
  @media (min-width: 420px) {
    font-size: 18px;
  }
`