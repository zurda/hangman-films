import React from 'react'
import { create } from 'react-test-renderer'
import Header from '../components/Header'

describe('Button component', () => {
  test('Matches the snapshot', () => {
    const header = create(
      <Header appDescription="Some app description" appName="Catchy name!" />
    )
    expect(header.toJSON()).toMatchSnapshot()
  })
})
