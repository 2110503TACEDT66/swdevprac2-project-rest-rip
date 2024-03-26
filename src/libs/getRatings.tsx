async function getRatings() {
  const response = await fetch(
    "https://presentation-day-1-rest-rip.vercel.app/ratings",
    {
      method: "GET",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch ratings");
  }
  const data = response.json();
  // console.log(data);
  return await data;
}

export default getRatings;
