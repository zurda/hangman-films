import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: 'Roboto';

  @media (min-width: 420px) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

export const Info = styled.p`
  margin: 16px 32px;
`;

export const Img = styled.img`
  width: 154px;
`