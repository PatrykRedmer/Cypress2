describe('Test 1', () => {
    it('Should log in and then log out', () => {
        cy.visit('https://www.edu.goit.global/account/login');
        cy.get('input[name="email"]').type('testowyqa@qa.team');
        cy.get('input[name="password"]').type('QA!automation-1');
        cy.get('.eckniwg2').click();
        cy.get('#open-navigation-menu-mobile').click();
        cy.wait(2000);
        cy.get(':nth-child(8) > .next-bve2vl').click();
        cy.url().should('include', '/account/login');
    });
});
