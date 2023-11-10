it('Header Agent', () => {
    cy.request('GET', 'https://httpbin.org/user-agent').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('user-agent');
    });
  });