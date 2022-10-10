it("Check for HTTP error codes", () => {
  const newWorkout = {
    name: "Squats-2",
    equipment: ["rack", "barbell", "abmat"],
    exercises: ["15 toes to bars", "10 thrusters", "30 abmat sit-ups"],
    trainerTips: [
      "Split your toes to bars into two sets maximum",
      "Go unbroken on the thrusters",
      "Take the abmat sit-ups as a chance to normalize your breath",
    ],
  };

  cy.request({
    method: "POST",
    url: "http://localhost:3000/api/v1/workouts",
    body: newWorkout,
    failOnStatusCode: false,
  }).then((response) => {
    expect(response.status).to.equal(400);
  });
});
