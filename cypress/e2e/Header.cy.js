it('Checking Header', () => {
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/headers',
      headers: {
        'X-My-Custom-Header': 'HelloCypress',
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.headers['X-My-Custom-Header']).to.eq('HelloCypress');
    });
  });