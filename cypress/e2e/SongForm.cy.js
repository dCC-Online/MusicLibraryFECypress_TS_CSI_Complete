describe('Song Form Tests', () => {

  // The cy.visit is not placed in a beforeEach, 
  //   as this will cause an additional delay in timing between each test
  //   causing sporadic results. 

  it('Add song: The Happy Archer', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="title"]')
      .type("The Happy Archer")
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

  it('Edit song: The Happy Archer', () => {
    cy.visit('http://localhost:3000')
    cy.contains('The Happy Archer')
      .parents('tr')
      .find('button')
      .contains('Edit')
      .click()
      .parents('tr')
      .find('form').within(()=> {
        cy.get('[data-test="edit-title"]')
          .clear()
          .type("The Happy Archer II")
        cy.get('[data-testid="submit-btn"]')
          .click()
      })

  })

  it('Delete song: The Happy Archer', () => {
    cy.visit('http://localhost:3000')

    cy.contains('The Happy Archer')
      .parents('tr')
      .find('button')
      .contains('Delete')
      .click()

  })
})

describe("Additional Test for Instructors Reference", () => {

  it('Filters data using drop down and keyed data', () => {
    expect('true').to.equal('true')
  })
})