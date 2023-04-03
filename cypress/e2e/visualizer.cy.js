/* eslint-disable no-undef */
/// <reference types="cypress" />

// import { assertByData } from '../support/shortcuts'

describe.only('Capabilities VisualizerApp', async () => {
  beforeEach(() => {})

  it('opens and visits visualizer app', async () => {
    cy.visit('http://localhost:3000', { debug: true })

    cy.intercept('POST', /firestore.googleapis.com/).as('getPoints')
    cy.wait('@getPoints')

    cy.get('img[data-test="base-img"]').should('be.visible')

    cy.get('[data-test="point"]').should('be.equal', 4)

    cy.get('[data-test="point"]').first().click()
  })
})
