import React, { useState } from "react";
import circo from "../imgs/circo.png";
import people from "../imgs/people.png";

const NotFound = () => {
  let [modal, setModal] = useState(false);

  let handleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="min-h-[100vh] max-w-[435px] w-[100%] flex justify-center">
      <div className="w-[100%] h-[100%]">
        <div className="w-[100%] ">
          <div className="w-[100%] flex flex-col items-center justify-center  mt-[10%]">
            <img src={circo} alt="" className="w-[107px] h-[28px]" />
            <img
              src={people}
              alt=""
              className="w-[100%] h-[390px] object-cover"
            />
            <p className="font-[400] text-[18px] text-[#B3B3B3]">
              This profile is not yet activated,
            </p>
            <h2 className="font-[700] text-[18px] text-[#2B6EF6]">
              Activate it in Circo APP.
            </h2>
            <div
              className="w-[88%] h-[64px] bg-[#2B6EF6] rounded-[18px] mt-[20px] flex justify-center items-center text-[20px] font-[700] text-white cursor-pointer"
              onClick={() => window.open("https://www.getcirco.com/download")}
            >
              Download APP
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
