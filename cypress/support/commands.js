Cypress.Commands.add('login', ({ username, password }) => {
  cy.request({
    method: 'POST',
    url: '/api/oauth/token',
    body: {
      grant_type: 'password',
      password,
      username,
    },
  }).then(response => {
    window.localStorage.setItem(
      'reduxPersist:auth',
      JSON.stringify({
        isAuthenticated: true,
        token: response.body.access_token,
      }),
    );
    cy.visit('/');
  });
});