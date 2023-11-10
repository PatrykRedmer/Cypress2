it('Checking Random Parameters', () => {
    const randomParam = Math.random().toString(36).substring(7);
    cy.request(`GET', 'https://httpbin.org/get?randomParam=${randomParam}`).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.args.randomParam).to.eq(randomParam);
    });
  });