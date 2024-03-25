async function userLogIn(userEmail: string, userPassword: string) {
  const response = await fetch(
    // "http://localhost:5000/auth/login",
    "https://coworkingspaceapi.onrender.com/auth/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: userEmail, password: userPassword }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to login user");
  }

  return await response.json();
}

export default userLogIn;
