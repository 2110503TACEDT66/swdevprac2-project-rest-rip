async function postReservation(
  reservationItem: ReservationItem,
  token: string
) {
  const respose = await fetch(
    `http://localhost:5000/workingSpaces/${reservationItem.workSpaceId}/reservation`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: reservationItem.id,
        apptDate: reservationItem.bookDate,
      }),
    }
  );

  if (!respose.ok) {
    const data = await respose.json();
    console.log(data);
    throw new Error("Failed to post reservation");
  }
  console.log("post success");
  return await respose.json();
}

export default postReservation;
