import React from 'react'
import { DropdownContainer, Select } from './styles/GameControllers';

interface IOption {
  name: string
}

interface IDropdown {
  options: IOption[]
  onClick: any
  onChange: any
  title?: string
}

export const Dropdown = ({ onClick, onChange, title, options }: IDropdown) => (
  <DropdownContainer>
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
