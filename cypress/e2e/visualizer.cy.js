/* eslint-disable no-undef */
/// <reference types="cypress" />

import firestoreApi from '../../src/firebase/firestore'

import pointListFixture from '../fixtures/points/dataList.json'
import materialsPavimentoFixture from '../fixtures/materials/pavimento/dataList.json'

function stubGetPoints () {
  cy.stub(firestoreApi.points, 'getAll').as('stubGetPoints').resolves(pointListFixture)
}

function stubGetMaterialsOfPavimento () {
  cy.stub(firestoreApi.materials, 'getByPointId').as('stubGetMaterialsOfPavimento').resolves(materialsPavimentoFixture)
}

describe('Stub firestore responses', async () => {
  before(() => {
    cy.stub()
    stubGetPoints()
    stubGetMaterialsOfPavimento()
  })

  it('check correct stub GetPoints', async () => {
    cy.wrap(firestoreApi.points.getAll()).should('deep.equal', pointListFixture)
    cy.get('@stubGetPoints').should('have.been.calledOnce')
  })

  it('check correct stub GetMaterials OfPavimento', async () => {
    cy.wrap(firestoreApi.materials.getByPointId('any-id')).should('deep.equal', materialsPavimentoFixture)
    cy.get('@stubGetMaterialsOfPavimento').should('have.been.calledOnce')
  })
})
