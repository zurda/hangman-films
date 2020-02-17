import React from 'react'
import { create } from 'react-test-renderer'
import { Button, RoundButton, Dropdown } from '../components/GameControllers'

const options = [{ name: 'First option' }, { name: 'second option' }]
const onClick = () => {}
const onChange = () => {}

describe('GameControllers component', () => {
  test('RoundButton matches the snapshot', () => {
    const roundButton = create(<RoundButton>Button name</RoundButton>)
    expect(roundButton.toJSON()).toMatchSnapshot()
  })
  test('Button matches the snapshot', () => {
    const button = create(<Button>Button name</Button>)
    expect(button.toJSON()).toMatchSnapshot()
  })
  test('Dropdown matches the snapshot', () => {
    const dropdown = create(
      <Dropdown options={options} onChange={onChange} onClick={onClick} />
    )
    expect(dropdown.toJSON()).toMatchSnapshot()
  })
})
