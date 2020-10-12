import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.plain};
  min-height: calc(100vh - 130px);
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

export const ContentContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`

export const GenreCard = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #fff;
  padding: 16px 24px;

  border-radius: 8px;
`

export const Text = styled.p`
  font-size: 18px;
`

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.dark};
  text-transform: uppercase;
  border-radius: 8px;

  height:40px;

  font-weight: bold;
  padding: 8px 16px;
  text-align: center;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  border: none;
  width: auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) => props.theme.colors.darker};
  }
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

export const RoundButton = styled(Button)`
  border-radius: 50%;
  width: 90px;
  min-width: 90px;
  height: 90px;
  align-self: flex-end;
  margin: 0 auto;
`

export const ButtonContainer = styled.div`
  margin-left: 16px;
`

export const HiddenTextContainer = styled.div`
  background-color: #FFF;
  border-radius: 8px;

  margin-top: 16px;

  padding: 16px 24px;
`

export const LettersTrayContainer = styled.div`
  background-color: #FFF;
  border-radius: 8px;

  margin-top: 16px;

  padding: 16px 24px;
`;

export const PosterContainer = styled.div`
  background-color: #FFF;
  border-radius: 8px;

  margin-top: 16px;

  padding: 16px 24px;
`;
