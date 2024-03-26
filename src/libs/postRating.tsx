async function postRating(ratingItem: RatingItem, token: string) {
  const response = await fetch(
    `https://presentation-day-1-rest-rip.vercel.app/workingSpaces/${ratingItem.workSpaceId}/rating`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: ratingItem.userId,
        rating: ratingItem.rating,
        comment: ratingItem.comment,
      }),
    }
  );

  if (!response.ok) {
    const data = await response.json();
    // console.log(data);
    const status = await response.status;
    if (status === 400) {
      throw new Error("This User already rated this working space");
    } else {
      throw new Error("Failed to post rating");
    }
  }

  return await response.json();
}

export default postRating;
