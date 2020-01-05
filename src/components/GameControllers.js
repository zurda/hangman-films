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
  &:hover {
    background-color: ${colours.maastrichtBlue};
    color: ${colours.lightest};
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
  padding: 4px 8px;
  margin-bottom: 8px;
  cursor: pointer;
  width: calc(100% - 60px);
  border: 1px solid black;
  border: none;
  border-radius: 0;
`

export const Dropdown = ({ onClick, onChange, title, options }) => (
  <DropdownContainer>
    <Text>{title}</Text>
    <Select onClick={() => onClick('')} onChange={(e) => onChange(e.target.value)}>
      <option value={''} />
      {options.map((option, index) => (
        <option key={index} value={option.name}>
          {option.name}
        </option>
      ))}
    </Select>
  </DropdownContainer>
)
