describe("Nasz pierwszy blok testów", () => {
  it("Badanie na miejscu LMS", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  })

  it("Znajdź wejście z pocztą i wpisz email", () => {
    cy.visit("https://www.edu.goit.global/account/login")
    cy.get("#user_email").type("user888@gmail.com");
  })
})