// LoginPage2.js
class LoginPage2 {
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
      cy.wait(2000);
      cy.get(':nth-child(8) > .next-bve2vl').click();
    }
  
    verifyUrl() {
      cy.url().should('include', '/account/login');
    }
  }
  
  export default LoginPage2;
  