import React from 'react'
import styled from '@emotion/styled'
import { colours } from '../style/shared'
import downArrowSvg from '../style/assets/down_arrow.svg'

export const Button = styled.button`
  color: ${(props) => (props.type === 'primary' ? 'white' : 'white')};
  background-color: ${(props) =>
    props.type === 'primary' ? colours.eucaliptus : colours.iceberg};
  font-weight: bold;
  padding: 8px 16px;
  text-align: center;
  -webkit-transition-duration: 0.2s; /* Safari */
  transition-duration: 0.2s;
  border: none;
  width: 100%;
  margin: 8px 0;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  border-radius: 2px;
  &:hover {
    background-color: ${colours.maastrichtBlue};
    color: ${colours.lightest};
  }
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

const Text = styled.span`
  width: 200px;
`

const DropdownContainer = styled.div`
  display: flex;
  flex-direction: row;
  padding: 0;
  margin: 0;
`

const Select = styled.select`
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  background-image: url(${downArrowSvg});
  background-size: 8px;
  background-repeat: no-repeat;
  background-position-y: 50%;
  background-position-x: calc(100% - 8px);
  text-align: left;
  padding: 8px;
  margin-bottom: 8px;
  cursor: pointer;
  width: 100%;
  border: 1px solid black;
  border: none;
  border-radius: 2px;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
  @media (min-width: 420px) {
    font-size: 18px;
  }
`

export const Dropdown = ({ onClick, onChange, title, options }) => (
  <DropdownContainer>
    {title && title.length > 0 && <Text>{title}</Text>}
    <Select onClick={() => onClick('')} onChange={(e) => onChange(e.target.value)}>
      <option value={''}>Choose a genre:</option>
      {options.map((option, index) => (
        <option key={index} value={option.name}>
          {option.name}
        </option>
      ))}
    </Select>
  </DropdownContainer>
)
