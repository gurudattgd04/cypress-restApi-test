it("Create new workout", () => {
  const newWorkout = {
    name: "Squats-2",
    mode: "AMRAP 20",
    equipment: ["rack", "barbell", "abmat"],
    exercises: ["15 toes to bars", "10 thrusters", "30 abmat sit-ups"],
    trainerTips: [
      "Split your toes to bars into two sets maximum",
      "Go unbroken on the thrusters",
      "Take the abmat sit-ups as a chance to normalize your breath",
    ],
  };

  cy.api({
    method: "POST",
    url: "http://localhost:3000/api/v1/workouts",
    body: newWorkout,
  }).then((response) => {
    expect(response.status).to.equal(201);
  });
});
