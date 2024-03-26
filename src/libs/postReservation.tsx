async function postReservation(
  reservationItem: ReservationItem,
  token: string
) {
  const response = await fetch(
    `https://presentation-day-1-rest-rip.vercel.app/workingSpaces/${reservationItem.workSpaceId}/reservation`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        user: reservationItem.userId,
        apptDate: reservationItem.apptDate,
      }),
    }
  );

  console.log(reservationItem.userId);

  if (!response.ok) {
    const data = response.json();
    data.then((dt) => {
      if(dt.message.includes("has already made 3 reservations")){
        alert("You has already made 3 reservations");
      }else{
        alert(dt.message); 
      }
    });
    return data;
    // throw new Error("Failed to post reservation");
  }else{
    alert("Add a Reservation success");
    console.log("post success");
    window.location.reload();
    return await response.json();
  }

}

export default postReservation;
