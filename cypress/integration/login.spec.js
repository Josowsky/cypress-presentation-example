import loginSelectors from '../selectors/loginSelectors';

describe('Login', () => {
  it('logins correctly', () => {
    cy.visit('/login');

    cy.get(loginSelectors.username).type('username');
    cy.get(loginSelectors.password).type('correct');
    cy.get(loginSelectors.loginButton).click();

    cy.url().should('not.contain', '/login');
  })
})