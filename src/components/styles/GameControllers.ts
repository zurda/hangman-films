import styled from 'styled-components';
import downArrowSvg from '../../style/assets/down_arrow.svg';

export const DropdownContainer = styled.div`
  flex:1;

  background-color: ${(props) => props.theme.colors.light};

  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0;
  margin: 0;

  height: 40px;
  border-radius: 8px;

  select {
    color: ${(props) => props.theme.colors.text};
    

    &:focus {
      border: 2px solid ${(props) => props.theme.colors.text};
    }
  }

  @media (max-width: 420px) {
    width: 100%;
  }
`

export const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: ${(props) => props.theme.colors.light};;
  background-image: url(${downArrowSvg});
  background-size: 8px;
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: calc(100% - 8px);
  border-radius: 8px;

  width: 100%;
  text-align: left;
  padding: 8px;
  cursor: pointer;
  border: none;

  font-size: 18px;
  font-weight: 500;
`