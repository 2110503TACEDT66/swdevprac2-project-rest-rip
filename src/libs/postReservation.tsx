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
      body: JSON.stringify({ apptDate: reservationItem.bookDate }),
    }
  );

  if (!respose.ok) {
    throw new Error("Failed to post reservation");
  }
  console.log("post success");
  return await respose.json();
}

export default postReservation;
