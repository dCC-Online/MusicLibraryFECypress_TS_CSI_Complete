describe('Song Form Tests', () => {

  // The cy.visit is not placed in a beforeEach, 
  //   as this will cause an additional delay in timing between each test
  //   causing sporadic results. 

  it('Add song: The Happy Archer', () => {
    cy.addSong("The Happy Archer")
  })

  it('Filters for: The Happy Archer', () => {
    cy.visit('http://localhost:3000')
    cy.get('[data-test="search-field"]')
      .wait(500)
      .type("The Happy Archer")
    cy.get('[data-test="song-title"]')
      .contains("The Happy Archer")
  })

  it('Edit song: The Happy Archer', () => {
    cy.visit('http://localhost:3000')
    cy.contains('The Happy Archer')
      .parents('tr')
      .find('button')
      .contains('Edit')
      .click()
      .parents('tr')
      .get('.modal-main')
      .find('form').within(() => {
        cy.get('[data-test="edit-title"]')
          .clear()
          .type("The Happy Archer II")
        cy.get('[data-testid="submit-btn"]')
          .click()
      })
  })

  it('Delete song: The Happy Archer', () => {
    cy.deleteSong("The Happy Archer II")
  })


})
