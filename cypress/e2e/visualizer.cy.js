/* eslint-disable no-undef */
/// <reference types="cypress" />

// import { assertByData } from '../support/shortcuts'

describe.only('Capabilities VisualizerApp', async () => {
  beforeEach(() => {})

  it('opens and visits visualizer app', async () => {
    cy.visit('http://localhost:3000', { debug: true })
    cy.get('img[data-test="visualizer-base-img"]').should('be.visible')
  })
})
