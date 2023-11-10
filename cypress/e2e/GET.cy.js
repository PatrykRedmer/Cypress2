it('Checking GET', () => {
    cy.request('GET', 'https://httpbin.org/get').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('url');
    });
  });