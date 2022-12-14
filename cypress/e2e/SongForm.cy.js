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

  it('Filters for: The Happy Archer', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="search-field"]')
      .wait(500)
      .type("The Happy Archer")
    cy.get('[data-test="song-title"]')
      .contains("The Happy Archer")
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