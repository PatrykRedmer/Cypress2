it('Checking Duration', () => {
    cy.request('GET', 'https://httpbin.org/delay/1').then((response) => {
      expect(response.duration).to.be.greaterThan(1000);
    });
  });