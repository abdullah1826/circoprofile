import React, { useState } from "react";
import SaveBtn from "../assets/components/SaveBtn";
import SocialLinks from "../assets/components/SocialLinks";
import { browserName, CustomView } from "react-device-detect";
import MenumenuModal from "../assets/components/MenuModal";
import { HiDotsHorizontal } from "react-icons/hi";
import btmLogo from "../imgs/btmLogo.png";
import { LuRepeat } from "react-icons/lu";
import ExchangeIconBtn from "../assets/components/ExchangeIconBtn";

const Portrait = ({
  coverurl,
  logourl,
  profileurl,
  userdata,
  returnSlicedString,
  handleModal,
  downloadVcf,
  sociallink,
  returnIcons,
  checkHttp,
  linkAnalytics,
  scrnWidth,
  profileDesign,
}) => {
  const {
    saveContactStyle,
    weblinkStyle,
    weblinkButtonTextColor,
    weblinkButtonBackgroundColor,
    saveContactBackgroundColor,
    saveContactTextColor,
    highlightBoxStyle,
    appIconColor,
    boxTextColor,
    boxBackgroundColor,
    hideCompanyLogo,
    hideSaveContact,
    backgroundColor,
    whiteTextAndBorder,
  } = profileDesign;

  // console.log(weblinkButtonBackgroundColor);
  let hexToRGBA = (hex) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba = `rgba(${red}, ${green}, ${blue}, 0.1)`;

    return rgba;
  };

  let hideSaveContactFalse =
    scrnWidth >= 420
      ? { right: "13%" }
      : scrnWidth >= 380
      ? { right: "8%" }
      : scrnWidth <= 380
      ? { right: "5%" }
      : null;
  let hideSaveContactTrue = null;

  let [menuModal, setMenuModal] = useState(false);
  let handleMenuModal = () => {
    setMenuModal(!menuModal);
  };
  return (
    <div
      className="w-[100%]   max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide"
      style={{ backgroundColor }}
    >
      <div className="min-h-[355px] w-[100%] flex items-center flex-col">
        <MenumenuModal
          menuModal={menuModal}
          handleMenuModal={handleMenuModal}
          userdata={userdata}
        />
        <div
          className="h-[38px] w-[38px] rounded-full absolute top-4 right-6 cursor-pointer flex justify-center items-center z-30 "
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.495) 0%, rgba(255, 255, 255, 0.2178) 100%)",
          }}
          onClick={() => handleMenuModal()}
        >
          <HiDotsHorizontal className="text-[black] text-2xl" />
        </div>
        <div className="w-[100%] h-[420px] relative overflow-hidden">
          <div
            className="w-[100%] h-[150px] absolute bottom-[-15px]"
            style={{
              background: `linear-gradient(to top, ${
                backgroundColor ? backgroundColor : "#ffffff"
              },${backgroundColor ? backgroundColor : "#ffffff"}, transparent)`,
              //   background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, ${backgroundColor} 100%)`,
            }}
          ></div>
          <div className="h-[60px] w-[60px]  rounded-full absolute bottom-[70px] left-6">
            {logourl && (
              <img
                src={logourl}
                alt=""
                className="h-[60px] w-[60px]  rounded-full"
                style={{ display: hideCompanyLogo ? "none" : null }}
              />
            )}
          </div>
          {profileurl && (
            <img
              src={profileurl}
              className="w-[100%] h-[400px]  object-cover"
              alt=""
            />
          )}
        </div>
        {/* <div className="h-[160px] w-[100%]  flex justify-center mt-[20px]">
          <div className="h-[100%] w-[160px] relative">
            <img
              src={logourl ? logourl : logoPlchldr}
              alt="logo"
              className="absolute bottom-[15px] right-[-7px] h-[55px] w-[55px] rounded-full border-[1px] border-white"
              loading="lazy"
            />
            {profileurl ? (
              <img
                src={profileurl}
                alt="profile"
                className="h-[150px] w-[150px] rounded-full border-[5px] border-white"
                loading="lazy"
              />
            ) : (
              <div className="h-[150px] w-[150px] rounded-full border-[5px] border-white"></div>
            )}
          </div>
        </div> */}

        <div className="w-[100%] flex justify-center z-20 mt-[-20px]">
          <h2
            className={`text-[28px]  ${
              userdata?.profileDesign?.profileFont === "1"
                ? "inika"
                : userdata?.profileDesign?.profileFont === "2"
                ? "gugi"
                : userdata?.profileDesign?.profileFont === "3"
                ? "gothic"
                : userdata?.profileDesign?.profileFont === "4"
                ? "marckScript"
                : userdata?.profileDesign?.profileFont === "5"
                ? "chivo"
                : userdata?.profileDesign?.profileFont === "6"
                ? "sfbold"
                : "sfbold"
            } text-center w-[90%] font-[800]`}
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.firstName && userdata?.lastName
              ? returnSlicedString(
                  `${userdata?.firstName} ${userdata?.lastName}`,
                  30
                )
              : returnSlicedString(userdata?.name, 30)}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-3">
          <h2
            className="text-[16px] font-[300]  text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(userdata?.jobTitle, 51)}
          </h2>
        </div>
        <div className="w-[100%] flex justify-center  ">
          <h2
            className="text-[16px] font-[300]  text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(userdata?.company, 51)}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center ">
          <h2
            className=" text-[15px] font-[300] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.address}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-[15px] text-center">
          <p
            className="text-[16px] font-[300]  w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.bio}
          </p>
        </div>
        <div
          className={`w-[100%] flex justify-center items-center relative`}
          style={!hideSaveContact ? { height: "80px" } : null}
        >
          {/* backgroundColor-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}
          {!hideSaveContact && (
            <>
              <SaveBtn
                downloadVcf={downloadVcf}
                saveBtnStyle={saveContactStyle}
                saveContactBackgroundColor={saveContactBackgroundColor}
                saveContactTextColor={saveContactTextColor}
                font={userdata?.profileDesign?.profileFont}
              />

              <ExchangeIconBtn
                handleModal={handleModal}
                saveBtnStyle={saveContactStyle}
                saveContactBackgroundColor={saveContactBackgroundColor}
                saveContactTextColor={saveContactTextColor}
                hideSaveContact={hideSaveContact}
                scrnWidth={scrnWidth}
              />

              {/* <div
                className="h-[37px] w-[37px] cursor-pointer absolute border rounded-full flex justify-center items-center "
                onClick={() => handleModal()}
                style={
                  hideSaveContact
                    ? { hideSaveContactTrue }
                    : hideSaveContactFalse
                }
              >
                <LuRepeat
                  className="text-[23px]"
                  style={{ color: saveContactBackgroundColor }}
                />
              </div> */}
            </>
          )}
        </div>
      </div>

      <div className="w-[100%] flex justify-center mt-3">
        <div className="w-[94%] rounded-[25px]    flex flex-col items-center">
          <SocialLinks
            sociallink={sociallink}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            webBtnStyle={weblinkStyle}
            weblinkButtonTextColor={weblinkButtonTextColor}
            weblinkButtonBackgroundColor={weblinkButtonBackgroundColor}
            appIconColor={appIconColor}
            boxTextColor={boxTextColor}
            boxBackgroundColor={boxBackgroundColor}
            highlightBoxStyle={highlightBoxStyle}
            whiteTextAndBorder={whiteTextAndBorder}
          />

          {/* <br /> */}
        </div>
      </div>

      <div
        className=" w-[100%] h-[100px]  flex justify-center items-center mt-[16px]"
        // style={{
        //   background: `linear-gradient(to top, ${hexToRGBA(
        //     userdata?.colorCode
        //   )},${hexToRGBA(userdata?.colorCode)}, white)`,
        // }}
      >
        <div
          className="h-[49px] w-[178px] rounded-[55px] text-[#FFFFFF] flex justify-center items-center  font-[500] text-[15px] cursor-pointer gap-2"
          onClick={() => window.open("https://www.getcirco.com/download")}
          style={{
            background:
              "linear-gradient(90deg, rgba(119, 119, 119, 0.66) 0%, rgba(44, 44, 44, 0.33) 100%)",
            backdropFilter: "blur(5px)",
            WebkitBackdropFilter: "blur(5px)",
          }}
        >
          <img src={btmLogo} className="h-[17px] w-[17px]" />
          Create your Circo
        </div>
      </div>
      {/* {browserName} */}
      {/* <br /> */}
      {browserName === "Mobile Safari" && (
        <>
          <br />
          <br />
          <br />
        </>
      )}
    </div>
  );
};

export default Portrait;
