it('Cookies', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/cookies/set',
      qs: {
        key: 'value',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.cookies).to.deep.include({ key: 'value' });
    });
  });