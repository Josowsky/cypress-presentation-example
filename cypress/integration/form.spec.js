describe('Form', () => {
  it('form changes header correctly correctly', () => {
    cy.visit('/login');

    cy.get('input[id="name"]').type('username');
    cy.get('input[id="password"]').type('correct');
    cy.get('button').click();

    cy.url().should('not.contain', '/login');

    cy.get('input[id="name"]').type('Tywin');
    cy.get('#surname').click();
    cy.get('[data-value="Lannister"]').click();

    cy.get('#header').should('contain', 'Tywin Lannister')
  })
})