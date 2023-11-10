it('Checking POST', () => {
    cy.request('POST', 'https://httpbin.org/post', { title: 'test' }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.data).to.eq('{"title":"test"}');
    });
  });