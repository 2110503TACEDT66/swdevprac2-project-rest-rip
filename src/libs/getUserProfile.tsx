async function getUserProfile(token: string) {
  const response = await fetch(
    "https://presentation-day-1-rest-rip.vercel.app/auth/me",
    {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch user profile.");
  }

  const responseData = await response.json();

  // console.log(responseData);
  return responseData;
}

export default getUserProfile;
