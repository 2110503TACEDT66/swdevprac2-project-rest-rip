async function deleteReservation(
    ReservID: string,
    token: string
  ) {
    const response = await fetch(
      `https://presentation-day-1-rest-rip.vercel.app/reservations/${ReservID}/`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      }
    );
  

  
    if (!response.ok) {
      const data = response.json();
      data.then((dt) => {
          alert(dt.message); 
      });
      return data;

    }else{
        alert("Delete Succesfully")
        window.location.reload();
      return await response.json();
    
    }
  
  }
  
  export default deleteReservation;
  