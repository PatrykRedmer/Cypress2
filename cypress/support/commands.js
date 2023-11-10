Cypress.Commands.add("login", (login, password) => {
    cy.get("#login").type(login);
    cy.get("#password").type(password);
  });