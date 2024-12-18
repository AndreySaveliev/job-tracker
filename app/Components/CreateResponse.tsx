"use client";
import React, { useState } from "react";
import ResponseFormPopup from "./ResponseFormPopup";

function CreateResponse() {
  const [showPopup, setShowPopup] = useState(false);
  const [key, setKey] = useState(0);
  const handleAddResponse = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setKey(Math.random());
    setShowPopup(false);
  };

  return (
    <>
      <button
        onClick={handleAddResponse}
        className="rounded-md border-2 border-primary p-2 hover:opacity-70"
      >
        <p>Add Response</p>
      </button>

      <div
        className={`absolute h-screen w-screen after:absolute after:left-0 after:top-0 after:-z-10 after:h-screen after:w-screen after:bg-black after:opacity-70 after:content-[''] ${
          showPopup ? "block" : "hidden"
        }`}
      >
        <div className="absolute left-1/2 top-1/4 h-[500px] min-w-max -translate-x-1/2 overflow-y-scroll bg-background p-5">
          <button
            className="absolute right-2 top-2 rounded-sm bg-accent p-1"
            onClick={handleClosePopup}
          >
            close
          </button>
          <ResponseFormPopup key={key} />
        </div>
      </div>
    </>
  );
}

export default CreateResponse;
