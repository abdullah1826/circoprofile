import React from "react";

const WebBtn = ({
  elm,
  checkHttp,
  linkAnalytics,
  returnIcons,
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  placeholderImg,
}) => {
  let hexToRGBA = (hex, num) => {
    // Remove the '#' character if present
    hex = hex?.replace("#", "");

    // Convert the hex value to RGB
    const red = parseInt(hex?.substring(0, 2), 16);
    const green = parseInt(hex?.substring(2, 4), 16);
    const blue = parseInt(hex?.substring(4, 6), 16);

    // Convert RGB to RGBA with alpha value 0.1
    const rgba1 = `rgba(${red}, ${green}, ${blue}, 0.75)`;
    const rgba2 = `rgba(${red}, ${green}, ${blue}, 0.33)`;
    if (num === "1") {
      return rgba1;
    } else {
      return rgba2;
    }
  };

  return (
    <>
      <a
        target="_blank"
        href={elm?.linkID != null && checkHttp(elm?.url, elm?.linkID, elm?.url)}
        // returnSocialUrl(elm?.title, elm?.value)
        className="h-[60px] w-[100%] flex justify-start items-center  relative"
        // mb-4
        style={
          webBtnStyle === "style9" ||
          webBtnStyle === "style10" ||
          webBtnStyle === "style11" ||
          webBtnStyle === "style12"
            ? {
                display:
                  elm?.shareable === false || elm?.isFeatureOn === true
                    ? "none"
                    : null,
                borderRadius:
                  webBtnStyle === "style9"
                    ? "0px"
                    : webBtnStyle === "style10"
                    ? "8px"
                    : webBtnStyle === "style11"
                    ? "14px"
                    : webBtnStyle === "style12"
                    ? "40px"
                    : null,

                background: `linear-gradient(90deg, ${hexToRGBA(
                  weblinkButtonBackgroundColor,
                  "1"
                )} 0%, ${hexToRGBA(weblinkButtonBackgroundColor, "2")} 0%)`,
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
              }
            : {
                display:
                  elm?.shareable === false || elm?.isFeatureOn === true
                    ? "none"
                    : null,
                borderRadius:
                  webBtnStyle === "style1" ||
                  webBtnStyle === "style5" ||
                  webBtnStyle === "style9"
                    ? "0px"
                    : webBtnStyle === "style2" ||
                      webBtnStyle === "style6" ||
                      webBtnStyle === "style10"
                    ? "8px"
                    : webBtnStyle === "style3" ||
                      webBtnStyle === "style7" ||
                      webBtnStyle === "style11"
                    ? "14px"
                    : webBtnStyle === "style4" ||
                      webBtnStyle === "style8" ||
                      webBtnStyle === "style12"
                    ? "40px"
                    : null,
                backgroundColor:
                  webBtnStyle === "style1" ||
                  webBtnStyle === "style2" ||
                  webBtnStyle === "style3" ||
                  webBtnStyle === "style4"
                    ? weblinkButtonBackgroundColor
                    : "transparent",
                border:
                  webBtnStyle === "style5" ||
                  webBtnStyle === "style6" ||
                  webBtnStyle === "style7" ||
                  webBtnStyle === "style8"
                    ? `1px solid ${weblinkButtonBackgroundColor}`
                    : null,
              }
        }
        onClick={() => linkAnalytics(elm)}
      >
        {elm?.linkID != null && (
          <div className="h-[100%] w-[19%]  flex items-center">
            {elm?.buttonImgUrl && (
              <img
                src={elm?.buttonImgUrl}
                alt="img"
                class={` ${"h-[52px] w-[52px]"}  ml-1 object-cover`}
                style={{
                  display:
                    elm?.shareable === false || elm?.isFeatureOn === true
                      ? "none"
                      : null,
                  borderRadius:
                    webBtnStyle === "style1" ||
                    webBtnStyle === "style5" ||
                    webBtnStyle === "style9"
                      ? "0px"
                      : webBtnStyle === "style2" ||
                        webBtnStyle === "style6" ||
                        webBtnStyle === "style10"
                      ? "8px"
                      : webBtnStyle === "style3" ||
                        webBtnStyle === "style7" ||
                        webBtnStyle === "style11"
                      ? "14px"
                      : webBtnStyle === "style4" ||
                        webBtnStyle === "style8" ||
                        webBtnStyle === "style12"
                      ? "40px"
                      : null,
                }}
              />
            )}
          </div>
        )}
        <p
          class="font-[400] text-[17px] text-center  w-[100%]   absolute "
          style={{ color: weblinkButtonTextColor }}
        >
          {/* {elm?.title} */}
          {/* {elm?.title?.length < 19
        ? elm?.title
        : elm?.title?.substring(0, 62) + "..."} */}
          {elm?.title}
        </p>
      </a>
    </>
  );
};

export default WebBtn;
