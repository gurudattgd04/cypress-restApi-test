/// <reference types="cypress" />

it("Get all workouts", () => {
  cy.request("http://localhost:3000/api/v1/workouts/");
});
