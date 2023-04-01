/* eslint-disable no-undef */
import Home from './pages/Home'
import utils from '../utils'

describe('Log in with enter', () => {
  beforeEach(() => {
    mockGetPoints()
  })

  it('Can see points', () => {
    // expect(login.hasMenu()).to.be.true
    cy.visit('/')
    cy.wait('@getPoints')
  })
})

function mockGetPoints () {
  cy.intercept('GET', 'https://firestore.googleapis.com/*')
    .intercept('points/res_data.json')
    .as('getPoints')
}
