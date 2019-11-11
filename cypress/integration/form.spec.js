import formSelectors from '../selectors/formSelectors'
import loginSelectors from '../selectors/loginSelectors';

describe('Form', () => {
  it('form changes header correctly correctly', () => {
    cy.visit('/login');

    cy.get(loginSelectors.username).type('username');
    cy.get(loginSelectors.password).type('correct');
    cy.get(loginSelectors.loginButton).click();

    cy.url().should('not.contain', '/login');

    cy.get(formSelectors.name).type('Tywin');
    cy.get(formSelectors.surnameContainer).click();
    cy.get(formSelectors.surnameRow('Lannister')).click();

    cy.get('#header').should('contain', 'Tywin Lannister')
  })
})