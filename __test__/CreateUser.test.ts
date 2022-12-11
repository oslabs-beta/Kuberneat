//The purpose of this file is to test the creation, reading, updating and
//deletion of a user from the database. The tests are run using Jest.

describe("CreateUser", () => {
  test("should create a new user", async () => {
    const newUser = {
      username: "testUser",
      password: "testPassword",
    };

    const response = await fetch ("http://localhost:3000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newUser),
    });
    const data = await response.json();
    expect(data).toEqual(newUser);
  })
});