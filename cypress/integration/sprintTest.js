describe("Quotes app", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/pizza");
  });

  const nameInput = () => cy.get("input[name=name]");
  const sizeInput = () => cy.get("select");
  const mushroomsInput = () => cy.get("input[name=mushrooms]");
  const cheeseInput = () => cy.get("input[name=cheese]");
  const peperoniInput = () => cy.get("input[name=peperoni]");
  const beansInput = () => cy.get("input[name=beans]");
  const submitButton = () => cy.get("button[type=submit]");
  const specialInput = () => cy.get("textarea[name=special]");

  describe("Filling out the inputs", () => {
    it("can type in inputs", () => {
      nameInput()
        .should("have.value", "")
        .type("Jeffrey")
        .should("have.value", "Jeffrey");

      specialInput()
        .should("have.value", "")
        .type("Drop it truh the window.")
        .should("have.value", "Drop it truh the window.");
    });

    it("Select multiple toppings", () => {
      mushroomsInput().should("not.be.checked");
      mushroomsInput().check();
      mushroomsInput().should("be.checked");
      cheeseInput().should("not.be.checked");
      cheeseInput().check();
      cheeseInput().should("be.checked");
      peperoniInput().should("not.be.checked");
      peperoniInput().check();
      peperoniInput().should("be.checked");
      beansInput().should("not.be.checked");
      beansInput().check();
      beansInput().should("be.checked");
    });

    it.only("can submit", () => {
      nameInput()
        .should("have.value", "")
        .type("Jeffrey")
        .should("have.value", "Jeffrey");

      specialInput()
        .should("have.value", "")
        .type("Drop it truh the window.")
        .should("have.value", "Drop it truh the window.");

      sizeInput().select("way too big").should("have.value", "way too big");

      submitButton().click();

      nameInput().should("have.value", "");
      specialInput().should("have.value", "");
    });
  });
});
