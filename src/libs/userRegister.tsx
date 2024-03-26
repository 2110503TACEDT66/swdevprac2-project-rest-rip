async function userLogIn(name:string,citizenID:string,tel:string, email: string, password: string) {
  const response = await fetch(
    "https://presentation-day-1-rest-rip.vercel.app/auth/register",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name,citizenID,tel, email,password  }),
    }
    );
  
    if (!response.ok) {
      throw new Error("Failed to login user");
    }
  
  
    return await response.json();
  }
  
  export default userLogIn;
  