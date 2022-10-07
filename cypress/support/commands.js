// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('addSong', (title) => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="title"]')
        .type(title)
    cy.get('[data-test="artist"]')
        .type("Billy McLaughlin")
    cy.get('[data-test="album"]')
        .type("Fingerdance")
    cy.get('[data-test="genre"]')
        .type("Instrumental Guitar")
    cy.get('[data-test="release_date"]')
        .type("1996-01-01")

    cy.get('[data-testid="submit btn"]')
        .click()
})

Cypress.Commands.add('deleteSong', (title) => {
    cy.visit('http://localhost:3000')

    cy.contains(title)
        .parents('tr')
        .find('button')
        .contains('Delete')
        .click()
})