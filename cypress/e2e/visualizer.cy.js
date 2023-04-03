/* eslint-disable no-undef */
/// <reference types="cypress" />

// import { assertByData } from '../support/shortcuts'

describe('Capabilities VisualizerApp', async () => {
  beforeEach(() => {})

  it('opens and visits visualizer app', async () => {
    cy.visit('http://localhost:3000')
    cy.wait(200)

    cy.get('img[data-test="base-img"]').should('be.visible')

    cy.get('[data-test="point"]').should('have.length', 4)
    cy.get('[data-test="point"]').each(($btn) => {
      cy.wrap($btn).click()
      cy.wait(400)

      applyMaterialList()
      backToPoints()
    })

    function applyMaterialList () {
      cy.get('[data-test="sidebar"]').should('be.visible')
      cy.get('[data-test="material"]').should('have.length.greaterThan', 1)

      cy.get('[data-test="material"]').each(($material) => {
        cy.wrap($material).click({ force: true })
        cy.get('[data-test="loading"]').should('be.visible')
        cy.wait(200)
      })
    }

    function backToPoints () {
      cy.get('img[data-test="layout"]').last().click({ force: true })
    }
  })
})
