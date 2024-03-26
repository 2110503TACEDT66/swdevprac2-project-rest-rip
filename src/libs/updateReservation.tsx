async function updateReservation(
    reservationItem: ReservationItem,
    token: string
) {
    const response = await fetch(
        `https://presentation-day-1-rest-rip.vercel.app/reservations/${reservationItem._id}`,
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`,
            },
            body: JSON.stringify({
                workingSpace: reservationItem.workSpaceId,
                apptDate: reservationItem.apptDate,
            }),
        }
    );

    if (!response.ok) {
        const data = response.json();
        data.then((dt) => {

            console.log(dt.message);

        });
        throw new Error("Failed to update reservation");
    } else {
        alert("Update a Reservation success");
        console.log("PUT success");
        window.location.reload();
        return await response.json();
    }

}

export default updateReservation;
