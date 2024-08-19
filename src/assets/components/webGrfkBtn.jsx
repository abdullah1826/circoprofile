import React from "react";
const WebGrfkBtn = ({
  elm,
  checkHttp,
  linkAnalytics,
  returnIcons,
  webBtnStyle,
}) => {
  return (
    <>
      <a
        target="_blank"
        href={elm?.linkID != null && checkHttp(elm?.url, elm?.linkID, elm?.url)}
        className="h-[186px] w-[100%]  rounded-[20px] relative"
        style={{
          display:
            elm?.shareable === false || elm?.isFeatureOn === true
              ? "none"
              : null,
          backgroundImage: `url(${elm?.graphicImgUrl})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          marginBottom: elm?.graphicDisplayType === "style1" ? "30px" : "0px",
        }}
        onClick={() => linkAnalytics(elm)}
      >
        <p
          class="font-[400] text-[17px] text-white mt-[6px] text-center  w-[100%] absolute bottom-3"
          style={{
            color: elm?.graphicTextColor,
            bottom: elm?.graphicDisplayType === "style1" ? "-35px" : "12px",
          }}
        >
          {elm?.graphicDisplayText}
        </p>
      </a>
    </>
  );
};

export default WebGrfkBtn;
