export class LoginPage {
  visit() {
    cy.visit('https://www.edu.goit.global/account/login');
  }

  fillEmail(email) {
    cy.get('input[name="email"]').type(email);
  }

  fillPassword(password) {
    cy.get('input[name="password"]').type(password);
  }

  clickLoginButton() {
    cy.get('.eckniwg2').click();
  }

  clickMobileNavigationMenu() {
    cy.get('#open-navigation-menu-mobile').click();
  }

  clickLogout() {
    cy.get(':nth-child(11) > .next-bve2vl').click();
  }

  verifyUrl() {
    cy.url().should('include', '/account/login');
  }
}


