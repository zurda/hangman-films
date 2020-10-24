import styled from 'styled-components';

interface ImageContainerProps {
  posterImage: string;
}

interface PosterOverlayProps {
  active?: boolean;
}

export const Container = styled.div`
  width: 100%;
  color: ${(props) => props.theme.colors.text};
  padding: 16px 32px;
  background-color: ${(props) => props.theme.colors.plain};
  min-height: calc(100vh - 130px);
  font-size: 18px;

  @media (max-width: 640px) {
    padding: 16px;
  }

  @media (max-width: 420px) {
    font-size: 16px;
    padding: 8px;
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

  background-color: ${props => props.theme.colors.card};
  padding: 16px 24px;

  border-radius: 8px;

  box-shadow: ${props => props.theme.utils.boxShadow};

  @media (max-width: 420px) {
    flex-direction: column;
  }
`

export const Text = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;

  svg{
    width: 18px;
    margin-left: 8px;
    color: ${(props) => props.theme.colors.primary};
  }

  @media (max-width: 420px) {
    font-size: 16px;

    svg{
      width: 16px;
      margin-left: 4px;
    }
  }

  @media (max-width: 300px) {
    font-size: 14px;

    svg{
      width: 14px;
    }
  }
`

export const ButtonContainer = styled.div`
  margin-left: 16px;

  @media (max-width: 420px) {
    margin-left: 0;
    margin-top: 8px;
    width: 100%;
  }
`

export const Button = styled.button`
  color: white;
  background-color: ${(props) => props.theme.colors.primary};
  text-transform: uppercase;
  border-radius: 8px;

  height:40px;

  font-weight: bold;
  font-size: 18px;
  text-align: center;

  padding: 8px 16px;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  border: none;
  width: auto;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: ${(props) => props.theme.colors.darker};
  }

  @media (max-width: 420px) {
    width: 100%;
    font-size: 16px;
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

export const HiddenTextContainer = styled.div`
  background-color: ${props => props.theme.colors.card};
  border-radius: 8px;

  margin-top: 16px;
  padding: 16px 24px 0;

  box-shadow: ${props => props.theme.utils.boxShadow};
`

export const LettersTrayContainer = styled.div`
  background-color: ${props => props.theme.colors.card};
  border-radius: 8px;

  margin-top: 16px;
  padding: 16px 24px;

  box-shadow: ${props => props.theme.utils.boxShadow};
`;

export const FilmContainer = styled.div`
  background-color: ${props => props.theme.colors.card};
  border-radius: 8px;

  margin-top: 16px;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: flex-start;

  box-shadow: ${props => props.theme.utils.boxShadow};

  @media (max-width: 720px) {
    flex-direction: column;
  }
`;

export const ImageContainer = styled.div<ImageContainerProps>`
  background: url(${(props) => `http://image.tmdb.org/t/p/w154${props.posterImage}`});
  background-repeat: no-repeat;
  background-size: cover;
  width: 250px;
  height: 345px;

  border-radius: 8px;
  overflow: hidden;

  position: relative;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(7, 1fr);

  box-shadow: ${props => props.theme.utils.boxShadow};
`

export const PosterOverlay = styled.div<PosterOverlayProps>`
  background-color: ${(props) => props.active ? 'transparent' : props.theme.colors.plain};
`

export const HintButton = styled.button`
  position: absolute;

  bottom: 0;

  padding: 8px;

  background-color: ${(props) => props.theme.colors.dark};
  color: #fff;
  border: 0;

  width: 100%;

  h4 {
    font-size: 20px;
  }
`;

export const FilmInfo = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;

  h3 {
    margin-bottom: 16px;
  }

  margin-left: 16px;

  @media (max-width: 720px) {
    margin-left: 0px;
    margin-top: 16px;
  }
`;