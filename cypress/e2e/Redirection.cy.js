it('Redirect', () => {
    cy.request('GET', 'https://httpbin.org/redirect-to?url=https://httpbin.org/get').then((response) => {
      expect(response.status).to.eq(200);
      expect(response.redirectedToUrl).to.include('https://httpbin.org/get');
    });
  });