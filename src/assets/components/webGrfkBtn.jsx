import React from "react";
import grf1 from "../../imgs/grf1.png";
import grf2 from "../../imgs/grf2.png";
import grf3 from "../../imgs/grf3.png";
import grf4 from "../../imgs/grf4.png";
import grf5 from "../../imgs/grf5.png";
import grf6 from "../../imgs/grf6.png";
const WebGrfkBtn = ({ elm, checkHttp, linkAnalytics, whiteTextAndBorder }) => {
  const returnIconStyle = (style) => {
    if (style === "style1") {
      return grf1;
    } else if (style === "style2") {
      return grf2;
    } else if (style === "style3") {
      return grf3;
    } else if (style === "style4") {
      return grf4;
    } else if (style === "style5") {
      return grf5;
    } else if (style === "style6") {
      return grf6;
    }
  };
  return (
    <>
      <a
        target="_blank"
        href={elm?.linkID != null && checkHttp(elm?.url, elm?.linkID, elm?.url)}
        className={`h-[186px] w-[100%]  rounded-[20px] relative ${
          elm?.graphicDisplayType === "style1" && "shadow-div overflow-hidden"
        }`}
        style={{
          display:
            elm?.shareable === false || elm?.isFeatureOn === true
              ? "none"
              : null,
          backgroundImage: `url(${elm?.graphicImgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: elm?.graphicDisplayType === "style2" ? "30px" : "0px",
        }}
        onClick={() => linkAnalytics(elm)}
      >
        <div
          className="h-[35px] w-[35px]  absolute rounded-full right-2 top-2 flex justify-center items-center"
          style={{ background: "rgba(0, 0, 0, 0.25)" }}
        >
          <img
            src={
              elm?.iconStyle
                ? returnIconStyle(elm?.iconStyle)
                : returnIconStyle("style1")
            }
            alt=""
            className="h-[20px] w-[20px] invert-[100%] object-contain"
          />
        </div>

        <p
          class="font-[600] text-[17px]  mt-[6px] text-center  w-[100%] absolute bottom-3 z-40"
          style={{
            color:
              elm?.graphicDisplayType === "style1"
                ? "white"
                : !whiteTextAndBorder
                ? "black"
                : "white",
            bottom: elm?.graphicDisplayType === "style2" ? "-35px" : "2px",
          }}
        >
          {/* {elm?.graphicDisplayText} */}
          {elm?.title}
        </p>
      </a>
    </>
  );
};

export default WebGrfkBtn;
