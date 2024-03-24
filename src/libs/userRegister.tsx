async function userRegister(
  userName: string,
  userEmail: string,
  userPassword: string
) {
  const response = await fetch("http://localhost:5000/auth/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: userName,
      email: userEmail,
      password: userPassword,
      role: "user",
    }),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  return await response.json();
}

export default userRegister;
