describe("The target page", () => {
  it("should have a h1 title", () => {
    cy.visit("https://eqpme.com/");
    cy.get("h1").should("exist");
  });
});