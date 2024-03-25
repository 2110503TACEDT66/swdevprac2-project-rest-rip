"use client";

import React, { useState } from "react";
import { TextField } from "@mui/material";
import userRegister from "@/libs/userRegister";
import userLogIn from "@/libs/userLogIn";
import { useRouter } from "next/navigation";

const page = () => {
  const [name, setName] = useState<string | null>("");
  const [email, setEmail] = useState<string | null>("");
  const [tel, setTel] = useState<string | null>("");
  const [citizenID, setCitizenID] = useState<string | null>("");
  const [password, setPassword] = useState<string | null>("");

  const handleRegister = async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    console.log("handle here");
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, tel, citizenID, password }),
      });

      if (!response.ok) {
        throw new Error("Failed to register new user");
      }
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="m-6 bg-slate-700 rounded-2xl flex flex-col justify-center p-4 items-center">
      <div className="p-4  flex justify-center w-1/3 flex-col items-center bg-white rounded-lg">
        <h1 className="font-semibold text-black">Registeration</h1>
        <div className="w-full justify-center">
          <div className="my-4">
            <div className="space-y-3 flex flex-col text-slate-500 px-4">
              <TextField
                variant="standard"
                name="Name"
                label="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
              ></TextField>
              <TextField
                variant="standard"
                name="Email"
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              ></TextField>
              <TextField
                variant="standard"
                name="Password"
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              ></TextField>

              <div className="flex justify-center">
                <button
                  className="text-white bg-slate-500 w-1/3 rounded-full py-2"
                  name="resigter"
                  onClick={(e) => {
                    handleRegister(e);
                  }}
                >
                  register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
