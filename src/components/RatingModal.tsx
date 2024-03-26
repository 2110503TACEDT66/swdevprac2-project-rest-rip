"use client";

import getUserProfile from "@/libs/getUserProfile";
import postRating from "@/libs/postRating";
import updateRatinng from "@/libs/updateRatinng";
import { Button, Rating, TextField } from "@mui/material";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";

type RatingModalProps = {
  workingSpace: WorkingSpaceItem;
  showModal: Function;
};

function RatingModal({ workingSpace, showModal }: RatingModalProps) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const { data: session, status } = useSession();
  const [user, setUser] = useState<any>(null);
  if (!session || !session.user.token) {
    return null;
  }

  useEffect(() => {
    const fetchData = async () => {
      if (!session || !session.user.token) return;

      const userProfile = await getUserProfile(session.user.token);
      setUser(userProfile);
    };

    fetchData();
  }, []);

  async function handleSubmit() {
    if (!session?.user.token) return;

    const ratingItem: RatingItem = {
      userId: user.data._id,
      workSpaceId: workingSpace._id,
      rating,
      comment,
    };

    try {
      const response = await postRating(ratingItem, session.user.token);

      alert("Rating successfully");
    } catch (err: any) {
      if (err.message === "This User already rated this working space") {
        await updateRatinng(ratingItem, session.user.token);
        alert("Rating updated successfully");
      } else {
        alert("Something went wrong");
        console.log(err);
      }
    }
    showModal(false);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm backdrop-brightness-75">
      <div className="bg-white p-10 rounded-lg flex flex-col items-center align-center ">
        <h1 className="text-2xl font-semibold text-slate-800 mb-4">
          Rate this Workspace
        </h1>
        <Rating
          className="mb-3"
          value={rating}
          precision={0.5}
          onChange={(event, value) => {
            if (value !== null) {
              setRating(value);
            }
          }}
        />
        <TextField
          id="comment"
          name="comment"
          label="comment"
          autoComplete="false"
          onChange={(e) => {
            setComment(e.target.value);
          }}
        />

        <Button
          variant="contained"
          className="mt-5 bg-cyan-600"
          onClick={() => {
            handleSubmit();
          }}
        >
          Submit
        </Button>
      </div>
    </div>
  );
}

export default RatingModal;
