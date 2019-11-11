import formSelectors from '../selectors/formSelectors'

describe('Form', () => {
  it('form changes header correctly correctly', () => {
    cy.visit('/login');
    cy.login({ username: 'username', password: 'correct' })

    cy.get(formSelectors.name).type('Tywin');
    cy.get(formSelectors.surnameContainer).click();
    cy.get(formSelectors.surnameRow('Lannister')).click();

    cy.get('#header').should('contain', 'Tywin Lannister')
  })
})