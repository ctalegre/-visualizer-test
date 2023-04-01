/* eslint-disable no-undef */

// CYPRESS KEYBOARD KEYS:
export const ENTER = '{enter}'
export const DOWN_ARROW = '{downarrow}'
export const BACKSPACE = '{backspace}'
const REQUEST_URL_LOGIN = ''

// We need to create a new OPTIONS object
// because Cypress appears to modify it in each execution
export const get = (id) => cy.get(id)
export const assertByData = (id) => cy.get(`[data-test=${id}]`).should('exist')
export const getByData = (id) => cy.get(`[data-test=${id}]`)

export const requestLogin = async ({ email, password }) => {
  const options = {
    method: 'POST',
    url: REQUEST_URL_LOGIN,
    form: true,
    body: {
      email,
      password,
    },
  }
  return cy.request(options)
}
// export const OPTIONS = () => ({ force: true })
// export const click = (id) => cy.get(id).click(OPTIONS())
// export const clickWhenEnabled = (id) => cy.get(id).click({ force: false })

// export const clickFirst = (id) => cy.get(id).first().click()

// export const clickLast = (id) => cy.get(id).last().click()

// export const uncheck = (id) => cy.get(id).uncheck()

// export const singleSelect = (id, optionName) => cy.get(id).select(optionName)

// export const write = (id, text) => cy.get(id).clear(OPTIONS()).type(text, OPTIONS())

// // export const getByData = (id) => cy.get(`[data-test=${id}]`)

// export const getSlow = (id) => cy.get(`[data-test=${id}]`, { timeout: 10000 })

// export const getFirst = (id) => cy.get(id).first()

// export const assertValue = (id, value) => cy.get(id).should('have.value', value)

// export const assertVisible = (id) => cy.get(id).should('be.visible')

// export const assertNotVisible = (id) => cy.get(id).should('not.be.visible')

// export const assertHasClass = (id, className) => cy.get(id).should('have.class', className)

// export const assertNotHasClass = (id, className) => cy.get(id).should('not.have.class', className)

// export const assertAtLeastOne = (id) => cy.get(id).should((items) => expect(items.size()).to.be.above(0))

// export const assertAtLeastOneWithClass = (className) => cy.get(className).should((items) => expect(items.size()).to.be.above(0))

// export const assertOccurrences = (id, occurrenceNumber) => cy.get(id).should((items) => expect(items.size()).to.eql(occurrenceNumber))

// export const loginAndGoToHome = () => {
//   cy.login()
//   cy.visit('/')
// }

// export const urlContains = (urlPart) => cy.url().should('contain', urlPart)

// export const stubRequest = (url, alias) => {
//   cy.server()
//   cy.route(url, [{}]).as(alias)
// }

// export const getRandomFloat = () => {
//   const max = 2000
//   const min = 1000
//   // Force decimals to be .25 to avoid problems wit trailing zeroes
//   return (Math.floor(Math.random() * (max - min) + min) + 0.25).toFixed(2)
// }

// export const waitForGet = (command) => {
//   cy.server()
//   cy.route('GET', 'www.google.es' + '/async').as('get')
//   command()
//   cy.wait('@get')
// }
