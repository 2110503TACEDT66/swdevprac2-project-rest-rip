import DateReserve from "@/components/DateReserve";
import getUserProfile from "@/libs/getUserProfile";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { getServerSession } from "next-auth";
import React from "react";
import { authOptions } from "../api/auth/[...nextauth]/route";

async function page() {
  const session = await getServerSession(authOptions);
  if (!session || !session.user.token) return null;

  const profile = (await getUserProfile(session.user.token)) as any;

  return (
    <div className="w-full h-[450px] flex justify-center my-6 relative">
      <div>
        {profile && (
          <div className="absolute flex flex-col top-2 left-8 p-[16px] rounded-lg bg-slate-50 shadow-lg">
            <h1 className="mx-auto my-2 text-lg w-full text-center underline">
              User Profile
            </h1>
            <h1 className="mx-auto my-2 text-lg w-full">{profile.data.name}</h1>
            <h1 className="mx-auto my-2 text-lg w-full">
              {profile.data.email}
            </h1>
            <h1 className="mx-auto my-2 text-lg w-full">{profile.data.tel}</h1>
            <h1 className="mx-auto my-2 text-lg w-full">
              {profile.data.createdAt}
            </h1>
          </div>
        )}
      </div>
      <form className="flex flex-col justify-around py-[5px] px-5 rounded-xl shadow-md">
        <TextField
          id="Name-Lastname"
          label="Name-Lastname"
          variant="standard"
        />
        <TextField id="Citizen ID" label="Citizen ID" variant="standard" />
        <Select id="hospital">
          <MenuItem value="Chula">Chulalongkorn Hospital</MenuItem>
          <MenuItem value="Rajavithi">Rajavithi Hospital</MenuItem>
          <MenuItem value="Thammasat">Thammasat University Hospital</MenuItem>
        </Select>
        <DateReserve />
        <Button
          name="Book Vaccine"
          variant="contained"
          color="success"
          className=" bg-green-600"
        >
          Book Vaccine
        </Button>
      </form>
    </div>
  );
}

export default page;
