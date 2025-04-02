describe("template spec", () => {
  it("passes", () => {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).should("have.value", "")
    .type("Admin");
    cy.get(
      ":nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("admin123");
    cy.get("button[type='submit']").should('exist')
    .click();
    cy.contains("Admin")
    .should('be.visible')
    .click();
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text--after > .oxd-icon"
    ).click();
    cy.contains("Admin").click();
    cy.get(".oxd-autocomplete-text-input > input").type("First");
    cy.wait(1000);
    cy.contains("FirstNameTest rej LastNameTest").click();
    cy.get(".oxd-form-actions > .oxd-button--secondary").click();
    cy.get(".oxd-table-cell-actions > :nth-child(2)").click();
    cy.get(":nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input")
      .clear()
      .type("Admin1");
    cy.get(".oxd-checkbox-input").click();
    cy.get(
      ".user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("12341234a");
    cy.get(
      ":nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input"
    ).type("12341234a");
    cy.get(".oxd-button--secondary").should('be.enabled')
    .click();
  });
});
