describe('Login', () => {
  it('logins correctly', () => {
    cy.visit('/login');

    cy.get('input[id="name"]').type('username');
    cy.get('input[id="password"]').type('correct');
    cy.get('button').click();

    cy.url().should('not.contain', '/login');
  })
})