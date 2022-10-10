/// <reference types="cypress" />

it("Get all workouts", () => {
  const expectedData = [
    {
      name: "Squats",
      mode: "AMRAP 20",
      equipment: ["rack", "barbell", "abmat"],
      exercises: ["30 abmat sit-ups"],
      trainserTips: ["Perform 30 sit-ups"],
      id: "8a82b16e-2292-44e8-b6ed-0c7c813b2b8a",
      createdAt: "10/9/2022, 4:48:40 PM",
      updatedAt: "10/9/2022, 4:48:40 PM",
    },
  ];

  cy.request("http://localhost:3000/api/v1/workouts/").then((response) => {
    expect(response.status).to.equal(200);
    expect(response.body.data).to.have.length.greaterThan(0);
    expect(response.body.data).to.include.deep.members(expectedData);
  });
});
