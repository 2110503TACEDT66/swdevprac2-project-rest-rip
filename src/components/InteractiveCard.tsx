"use client";

import React from "react";

function InteractiveCard({ children }: { children: React.ReactNode }) {
  function eventHandler(event: React.SyntheticEvent) {
    if (event.type == "mouseover") {
      // Set shadow-2xl
      event.currentTarget.classList.remove("shadow-lg");
      event.currentTarget.classList.add("shadow-2xl");
      // Set bg-neutral-200
      event.currentTarget.classList.remove("bg-white");
      event.currentTarget.classList.add("bg-neutral-200");
    } else if (event.type == "mouseout") {
      // Set shadow-lg
      event.currentTarget.classList.remove("shadow-2xl");
      event.currentTarget.classList.add("shadow-lg");
      // Set bg-white
      event.currentTarget.classList.remove("bg-neutral-200");
      event.currentTarget.classList.add("bg-white");
    }
  }

  return (
    <div
      className="shadow-lg rounded-2xl w-full  my-2"
      onMouseOver={(e) => {
        eventHandler(e);
      }}
      onMouseOut={(e) => {
        eventHandler(e);
      }}
    >
      {children}
    </div>
  );
}

export default InteractiveCard;
