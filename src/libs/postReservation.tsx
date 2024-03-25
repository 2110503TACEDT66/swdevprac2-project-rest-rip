async function postReservation(
  reservationItem: ReservationItem,
  token: string
) {
  const response = await fetch(
    // `http://localhost:5000/workingSpaces/${reservationItem.workSpaceId}/reservation`,
    `https://presentation-day-1-rest-rip.vercel.app/workingSpaces/${reservationItem.workSpaceId}/reservation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: reservationItem.userId,
        apptDate: reservationItem.bookDate,
      }),
    }
  );

  console.log(reservationItem.userId);

  if (!response.ok) {
    const data = await response.json();
    console.log(data);
    throw new Error("Failed to post reservation");
  }
  console.log("post success");
  return await response.json();
}

export default postReservation;
