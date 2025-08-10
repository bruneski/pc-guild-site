// https://on.cypress.io/api

describe('Is the Site up?', () => {
  it('visits the app root url', () => {
    cy.visit('/')
    cy.contains('p', 'Coming Soon')
  })
})
