import React from "react";
import { DotLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="h-[100vh] max-w-[420px] w-[100%] flex justify-center items-center">
      {/* <RingLoader color="black" /> */}
      <DotLoader color="#2B6EF6" />
    </div>
  );
};

export default Loader;
