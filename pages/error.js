import React, { useEffect } from "react";

const error = () => {
  useEffect(() => {
    window.onbeforeunload = function () {
      setTimeout(() => {
        window.location.replace("/");
      }, 5000);
    };
    return () => {
      setTimeout(() => {
        window.location.replace("/");
      }, 5000);
    };
  }, []);

  return (
    <div className=" bg-gradient-to-r from-purple-500 to-purple-600 flex flex-col justify-center items-center h-screen">
      <h1 className=" text-9xl font-bold text-white drop-shadow-md animate-pulse">
        404 ERROR
      </h1>
      <p className=" text-white drop-shadow-md animate-pulse">
        You will soon get back to the main page
      </p>
    </div>
  );
};

export default error;
