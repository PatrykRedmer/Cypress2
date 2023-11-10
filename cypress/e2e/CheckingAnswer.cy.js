it('Checking Answer', () => {
    cy.request('GET', 'https://httpbin.org/anything').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('method');
    });
  });