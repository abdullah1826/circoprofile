import React, { useState } from "react";
import imgPlchldr from "../imgs/imgPlchldr.png";
import SaveBtn from "../assets/components/SaveBtn";
import SocialLinks from "../assets/components/SocialLinks";
import { browserName } from "react-device-detect";
import MenumenuModal from "../assets/components/MenuModal";
import { HiDotsHorizontal } from "react-icons/hi";
import btmLogo from "../imgs/btmLogo.png";
import { LuRepeat } from "react-icons/lu";
import ExchangeIconBtn from "../assets/components/ExchangeIconBtn";

const Color = ({
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
  removeHash,
  profileDesign,
}) => {
  // console.log(weblinkButtonBackgroundColor);

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
    whiteTextAndBorder,
    backgroundColor,
  } = profileDesign;

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
      className="w-[100%] h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide"
      style={{ backgroundColor: backgroundColor }}
    >
      <div className="min-h-[355px] w-[100%] flex items-center flex-col">
        <MenumenuModal
          menuModal={menuModal}
          handleMenuModal={handleMenuModal}
          userdata={userdata}
        />
        <div
          className="h-[38px] w-[38px] rounded-full absolute top-5 right-7 cursor-pointer flex justify-center items-center z-10"
          style={{
            background:
              "linear-gradient(90deg, rgba(255, 255, 255, 0.495) 0%, rgba(255, 255, 255, 0.2178) 100%)",
          }}
          onClick={() => handleMenuModal()}
        >
          <HiDotsHorizontal className="text-[black] text-2xl" />
        </div>
        <div className="h-[160px] w-[100%]  flex justify-center mt-[20px]">
          <div className="h-[100%] w-[160px] relative">
            {!hideCompanyLogo && logourl && (
              <img
                src={logourl}
                alt="logo"
                className="absolute bottom-[15px] right-[-7px] h-[55px] w-[55px] rounded-full border-[1px] border-white"
                loading="lazy"
              />
            )}
            {profileurl ? (
              <img
                src={profileurl}
                alt="profile"
                className="h-[150px] w-[150px] rounded-full border-[3px] border-white"
                loading="lazy"
              />
            ) : (
              <div className="h-[150px] w-[150px] rounded-full border-[3px] border-white"></div>
            )}
          </div>
        </div>

        <div className="w-[100%] flex justify-center mt-[22px] ">
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
            className="text-[16px] font-[300] text-[#4D4444] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(userdata?.jobTitle, 51)}
          </h2>
        </div>
        <div className="w-[100%] flex justify-center  ">
          <h2
            className="text-[16px] font-[300] text-[#4D4444] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {returnSlicedString(userdata?.company, 51)}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center  ">
          <h2
            className=" text-[15px] font-[300] text-[#4D4444] text-center w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.address}
          </h2>
        </div>

        <div className="w-[100%] flex justify-center mt-[15px] text-center">
          <p
            className="text-[16px] font-[300] text-[#2e363c] w-[90%]"
            style={{ color: whiteTextAndBorder ? "white" : "black" }}
          >
            {userdata?.bio}
          </p>
        </div>
        {!hideSaveContact && (
          <div
            className={`w-[100%]  flex justify-center items-center relative`}
            style={!hideSaveContact ? { height: "80px" } : null}
          >
            {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}

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
                className="h-[35px] w-[35px] cursor-pointer absolute"
                onClick={() => handleModal()}
                style={
                  hideSaveContact
                    ? { hideSaveContactTrue }
                    : hideSaveContactFalse
                }
              >
                <LuRepeat
                  className="text-[30px]"
                  style={{ color: saveContactBackgroundColor }}
                />
              </div> */}
            </>
          </div>
        )}
      </div>

      <div className="w-[100%] flex justify-center mt-3">
        <div className="w-[94%] rounded-[25px] flex flex-col items-center">
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
        </div>
      </div>

      <div className=" w-[100%] h-[100px]  flex justify-center items-center mt-[16px] bottom-0">
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

export default Color;
