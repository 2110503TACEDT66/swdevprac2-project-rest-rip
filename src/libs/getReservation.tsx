async function getReservation(token: string) {
    const response = await fetch("https://presentation-day-1-rest-rip.vercel.app/reservations",
        {
            method: "GET",
            headers: {
                Authorization: `Bearer ${token}`,
            },
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch reservations");
    }

    return await response.json();
}

export default getReservation;
