describe('Test 1', () => {
    it('Should log in and then log out', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.get('input[name="email"]').type('user888@gmail.com');
        cy.get('input[name="password"]').type('1234567890');
        cy.get('.eckniwg2').click();
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(11) > .next-bve2vl').click();
        cy.url().should('include', '/account/login');
    });
});
