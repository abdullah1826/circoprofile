import React, { useState } from "react";
import share from "../imgs/share.svg";
import imgPlchldr from "../imgs/imgPlchldr.png";
import logoPlchldr from "../imgs/logoPlchldr.png";
import cvrPlchldr from "../imgs/cvrPlchldr.png";
import FeaturedSocial from "../assets/components/FeaturedSocial";
import WebGrfkBtn from "../assets/components/webGrfkBtn";
import WebBtn from "../assets/components/webBtn";
import SaveBtn from "../assets/components/SaveBtn";
import SocialLinks from "../assets/components/SocialLinks";
import { browserName, CustomView } from "react-device-detect";
import MenumenuModal from "../assets/components/MenuModal";
import { HiDotsHorizontal } from "react-icons/hi";
import btmLogo from "../imgs/btmLogo.png";
import { LuRepeat } from "react-icons/lu";
import ExchangeBtn from "../assets/components/ExchangeBtn";

// import "../Styles/scroll.css";

const Pro = ({
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
  saveBtnStyle,
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  saveContactBackgroundColor,
  saveContactTextColor,
  bg,
  highlightBoxStyle,
  appIconColor,
  boxTextColor,
  boxBackgroundColor,
  removeHash,
  hideCompanyLogo,
  hideSaveContact,
  whiteTextAndBorder,
}) => {
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
    <div className="w-[100%]   max-h-[100vh] opacity-[100%] overflow-y-scroll scrollbar-hide">
      <style>
        {`
/* Hide scrollbar for Chrome, Safari and Opera */
.scrol::-webkit-scrollbar {
  display: none;
}

/* Hide scrollbar for IE, Edge and Firefox */
.scrol {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
}

`}
      </style>
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
            className="w-[100%] h-[100px]  absolute bottom-[18px] rounded-t-[35px]"
            style={{
              backgroundColor: bg,
              // boxShadow:
              //   "rgba(60, 64, 67, 0.3) 0px -1px 2px 0px, rgba(60, 64, 67, 0.15) 0px -2px 6px 2px",
              //   background: `linear-gradient(180deg, rgba(217, 217, 217, 0) 0%, ${bg} 100%)`,
              boxShadow: "rgba(0, 0, 0, 0.5) 0px -11px 10px -8px",
            }}
          ></div>

          {profileurl && (
            <img
              src={profileurl}
              className="w-[100%] max-h-[400px]  object-cover"
              alt=""
            />
          )}
        </div>
        <div className="w-[100%] min-h-[250px]  z-20 mt-[-85px] flex flex-col items-center">
          <div className="w-[100%] flex justify-center relative items-center h-max">
            <div
              className="h-[78%] w-[7px]  absolute left-[3px] rounded-full"
              style={{
                backgroundColor: whiteTextAndBorder ? "white" : "black",
              }}
            ></div>
            <div className="w-[94%] flex justify-center items-center ">
              <div className="w-[95%] flex justify-between  items-center ">
                <div>
                  <h2
                    className={`text-[28px]   ${
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
                    }  w-[40%] font-[800]`}
                    style={{ color: whiteTextAndBorder ? "white" : "black" }}
                  >
                    {userdata?.firstName
                      ? returnSlicedString(`${userdata?.firstName}`, 30)
                      : returnSlicedString(userdata?.firstName, 30)}
                  </h2>
                  <h2
                    className={`text-[28px]   ${
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
                    }  w-[40%] font-[800]`}
                    style={{ color: whiteTextAndBorder ? "white" : "black" }}
                  >
                    {userdata?.lastName
                      ? returnSlicedString(`${userdata?.lastName}`, 30)
                      : returnSlicedString(userdata?.lastName, 30)}
                  </h2>
                </div>

                <div className="h-[60px] w-[60px]  rounded-full">
                  {logourl && (
                    <img
                      src={logourl}
                      alt=""
                      className="h-[60px] w-[60px]  rounded-full"
                      style={{ display: hideCompanyLogo ? "none" : null }}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className=" mt-2  w-[94%] flex justify-center">
            <div className="w-[95%] flex ">
              <h2
                className="text-[16px] font-[300]  text-center "
                style={{ color: whiteTextAndBorder ? "white" : "black" }}
              >
                {returnSlicedString(userdata?.jobTitle, 51)}
              </h2>
            </div>
          </div>
          <div className="w-[94%] flex justify-center">
            <div className="w-[95%] flex">
              <h2
                className="text-[16px] font-[300]"
                style={{ color: whiteTextAndBorder ? "white" : "black" }}
              >
                {returnSlicedString(userdata?.company, 51)}
              </h2>
            </div>
          </div>

          <div className="w-[94%] flex justify-center">
            <div className="w-[95%] flex ">
              <h2
                className=" text-[15px] font-[300]"
                style={{ color: whiteTextAndBorder ? "white" : "black" }}
              >
                {userdata?.address}
              </h2>
            </div>
          </div>
          {userdata?.bio && (
            <div className="mt-[10px] w-[94%] flex justify-center">
              <div className="w-[95%] flex">
                <p
                  className="text-[16px] font-[300] "
                  style={{ color: whiteTextAndBorder ? "white" : "black" }}
                >
                  {userdata?.bio}
                </p>
              </div>
            </div>
          )}
          {!hideSaveContact && (
            <div
              className={`w-[94%]  mt-[10px] flex justify-center`}
              style={!hideSaveContact ? { height: "80px" } : null}
            >
              <div className="w-[95%] flex justify-between items-center">
                {/* bg-gradient-to-b from-[${hexToRGBA(userdata?.colorCode)}] to-white */}

                <>
                  <SaveBtn
                    downloadVcf={downloadVcf}
                    saveBtnStyle={saveBtnStyle}
                    saveContactBackgroundColor={saveContactBackgroundColor}
                    saveContactTextColor={saveContactTextColor}
                    font={userdata?.profileDesign?.profileFont}
                    isProTheme={true}
                  />
                  <ExchangeBtn
                    downloadVcf={handleModal}
                    saveBtnStyle={saveBtnStyle}
                    saveContactBackgroundColor={saveContactBackgroundColor}
                    saveContactTextColor={saveContactTextColor}
                    font={userdata?.profileDesign?.profileFont}
                  />
                </>
              </div>
            </div>
          )}

          <div className="w-[100%] flex justify-center mt-1">
            <div className="w-[94%] rounded-[25px]  flex flex-col items-center ">
              <SocialLinks
                sociallink={sociallink}
                checkHttp={checkHttp}
                linkAnalytics={linkAnalytics}
                webBtnStyle={webBtnStyle}
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
          <br />
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

export default Pro;
