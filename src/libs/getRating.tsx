async function getRating(id:string) {
    const response = await fetch(`https://presentation-day-1-rest-rip.vercel.app/ratings/avg/${id}`,
        {
            method: "GET",
        }
    );

    if (!response.ok) {
        throw new Error("Failed to fetch ratings");
    }
    const data = response.json();
    console.log(data);
    return await data;
}

export default getRating;
