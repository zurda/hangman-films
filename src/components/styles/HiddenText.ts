import styled from 'styled-components';

interface ILetterContainer {
  letter: string
}

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 8px 0px;
  font-family: 'Roboto';
`

export const LetterContainer = styled.span<ILetterContainer>`
  padding: 0 8px;
  display: inline-block;
  border-bottom: ${(props) =>
    props.letter === ' ' ? 'none' : `2px solid ${props.theme.colors.text}`};
  width: 20px;
  padding: 2px;
  text-align: center;
  margin-right: 4px;
  font-size: 20px;
  @media (min-width: 420px) {
    font-size: 22px;
  }
`