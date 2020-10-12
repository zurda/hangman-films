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

  svg{
    margin-left: 8px;
  }
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

export const FilmContainer = styled.div`
  background-color: #FFF;
  border-radius: 8px;

  margin-top: 16px;

  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: flex-start;
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
`;