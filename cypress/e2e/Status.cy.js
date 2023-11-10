it('Status', () => {
    cy.request('PUT', 'https://httpbin.org/status/200').then((response) => {
      expect(response.status).to.eq(200);
    });
  });