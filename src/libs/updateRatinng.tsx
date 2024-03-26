import getRatings from "./getRatings";

async function updateRatinng(ratingItem: RatingItem, token: string) {
  const ratings: any[] = await getRatings();

  const filteredRating = ratings.filter((rating) => {
    return (
      rating.user === ratingItem.userId &&
      rating.workingSpace === ratingItem.workSpaceId
    );
  })[0];

  // console.log(filteredRating);

  const response = await fetch(
    `https://presentation-day-1-rest-rip.vercel.app/ratings/${filteredRating._id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        rating: ratingItem.rating,
        comment: ratingItem.comment,
      }),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update rating");
  }

  return await response.json();
}

export default updateRatinng;
