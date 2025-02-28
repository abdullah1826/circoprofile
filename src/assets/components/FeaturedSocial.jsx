import React from "react";
import { returnWhiteIcons } from "../ReturnWhiteIcons";
import { returnPngIcons } from "../ReturnSocialIconsPng";
import web from "../socialLink/web.png";

const FeaturedSocial = ({
  elm,
  checkHttp,
  linkAnalytics,
  webBtnStyle,
  highlightBoxStyle,
  appIconColor,
  imgAdded,
  boxBackgroundColor,
  boxTextColor,
  i,
  sociallink,
}) => {
  // console.log(highlightBoxStyle);

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
        href={checkHttp(
          elm?.baseUrl || "" + (elm?.value ? elm?.value : elm?.url),
          elm?.linkID,
          elm?.value
        )}
        onClick={() => linkAnalytics(elm)}
        className="w-[100%]"
      >
        <div className="w-[100%] flex justify-center">
          <div
            className="w-[100%] h-[121px] rounded-[30px] flex "
            // mt-4 mb-1
            // style={
            //   elm?.shareable === false || elm?.isFeatureOn === false
            //     ? { display: "none" }
            //     : null
            // }
            style={
              highlightBoxStyle === "style3"
                ? {
                    background: `linear-gradient(90deg, ${hexToRGBA(
                      boxBackgroundColor,
                      "1"
                    )} 0%, ${hexToRGBA(boxBackgroundColor, "2")} 0%)`,

                    backdropFilter: "blur(5px)",
                    WebkitBackdropFilter: "blur(5px)",
                    display: elm?.shareable === false ? "none" : null,
                  }
                : {
                    display: elm?.shareable === false ? "none" : null,

                    backgroundColor:
                      highlightBoxStyle === "style1"
                        ? "transparent"
                        : boxBackgroundColor,
                    border:
                      highlightBoxStyle === "style1"
                        ? `1px solid ${
                            boxBackgroundColor ? boxBackgroundColor : "#f2f3f5"
                          }`
                        : null,

                    // boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.37)",
                  }
            }
          >
            <div className="w-[33%]  flex justify-center items-center">
              {imgAdded(elm?.image) ? (
                <img
                  src={elm?.image}
                  alt="img"
                  class={
                    elm?.linkID === 999
                      ? ` ${"h-[100%] w-[100%] rounded-2xl"}`
                      : ` ${"h-[75px] w-[75px] rounded-2xl  flex justify-center items-center"}`
                  }
                  // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                />
              ) : (
                <div
                  class={`${"h-[75px] w-[75px] rounded-2xl  flex justify-center items-center"}`}
                  style={{ backgroundColor: appIconColor }}
                >
                  {elm?.linkID != null &&
                    (!appIconColor || elm?.linkImgUrl ? (
                      <img
                        src={
                          returnPngIcons(elm?.linkID)
                            ? returnPngIcons(elm?.linkID)
                            : elm?.linkImgUrl
                            ? elm?.linkImgUrl
                            : web
                        }
                        alt="img"
                        class="h-[100%] w-[100%] rounded-2xl"

                        // style={elm?.name==='Calendly'? {borderRadius:'10px'}:null}
                      />
                    ) : (
                      returnWhiteIcons(elm?.linkID, appIconColor, 45)
                    ))}
                </div>
              )}
              {/* <div
                class={`${"h-[75px] w-[75px] rounded-2xl  flex justify-center items-center"}`}
                style={{ backgroundColor: appIconColor }}
              >
                <img
                  src={returnIcons(elm?.linkID)}
                  alt=""
                  class={`${"h-[60px] w-[60px] "}`}
                  loading="lazy"
                />
              </div> */}
            </div>

            <div
              className="w-[63%] flex flex-col justify-center"
              style={{
                color: boxTextColor,
              }}
            >
              <h2
                className="font-[700] text-[18px]"
                // style={{ color: boxTextColor }}
              >
                {elm?.title?.length < 22
                  ? elm?.title
                  : elm?.title?.substring(0, 28) + "..."}
              </h2>
              <p
                className="font-[400] text-[13px] w-[90%]"
                // style={{ color: boxTextColor }}
              >
                {elm?.linkHighlightDescription
                  ? elm?.linkHighlightDescription?.length < 67
                    ? elm?.linkHighlightDescription
                    : elm?.linkHighlightDescription?.substring(0, 67) + "..."
                  : ""}
              </p>
              {/* 68 */}
            </div>
          </div>
        </div>
      </a>
    </>
  );
};

export default FeaturedSocial;
