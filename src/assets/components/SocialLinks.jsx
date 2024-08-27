import React from "react";
import WebBtn from "./webBtn";
import WebGrfkBtn from "./webGrfkBtn";
import FeaturedSocial from "./FeaturedSocial";
import { returnIcons, returnReactIcons } from "../ReturnSocialIcons";
import VideoContainer from "./VideoContainer";
import web from "../socialLink/web.png";
import { returnPngIcons } from "../ReturnSocialIconsPng";
import SpotifyContainer from "./SpotifyContainer";
import SoundCloudContainer from "./SoundCloudComponent";

const SocialLinks = ({
  sociallink,
  checkHttp,
  linkAnalytics,
  webBtnStyle,
  weblinkButtonTextColor,
  weblinkButtonBackgroundColor,
  highlightBoxStyle,
  isClassic,
  appIconColor,
  boxBackgroundColor,
  boxTextColor,
  whiteTextAndBorder,
}) => {
  console.log(appIconColor);

  let imgAdded = (name) => {
    if (typeof name === "string") {
      if (name?.slice(0, 4) === "http") {
        console.log(true);
        return true;
      } else {
        return false;
      }
    }
  };

  let returnIconImages = (id) => {
    if (appIconColor) {
      return returnIcons(id, appIconColor);
    } else {
      return returnPngIcons(id);
    }
  };

  return (
    <div className=" w-[95%]  flex justify-evenly  flex-wrap mt-5 items-center gap-y-5">
      {/* grid grid-cols-3 gap-x-4 pr-7 */}
      {sociallink?.map((elm, i) => {
        return elm?.linkID === 999 &&
          elm?.style != "style3" &&
          elm?.style != "style1" ? (
          <WebBtn
            elm={elm}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            returnIcons={returnReactIcons(elm?.linkID, appIconColor, 45)}
            webBtnStyle={webBtnStyle}
            weblinkButtonTextColor={weblinkButtonTextColor}
            weblinkButtonBackgroundColor={weblinkButtonBackgroundColor}
            placeholderImg={web}
          />
        ) : elm?.linkID === 999 && elm?.style === "style3" ? (
          <WebGrfkBtn
            elm={elm}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            whiteTextAndBorder={whiteTextAndBorder}
            // returnIcons={returnIcons}
            // webBtnStyle={webBtnStyle[7]}
          />
        ) : elm?.linkID === 16 || elm?.linkID === 25 ? (
          <VideoContainer
            link={checkHttp(elm?.value)}
            shareable={elm?.shareable}
          />
        ) : elm?.isFeatureOn || elm?.isLinkHighlighted ? (
          <FeaturedSocial
            elm={elm}
            checkHttp={checkHttp}
            linkAnalytics={linkAnalytics}
            webBtnStyle={webBtnStyle}
            highlightBoxStyle={highlightBoxStyle}
            appIconColor={appIconColor}
            imgAdded={imgAdded}
            boxBackgroundColor={boxBackgroundColor}
            boxTextColor={boxTextColor}
            i={i}
            sociallink={sociallink}
          />
        ) : elm?.linkID === 26 ? (
          <div
            className="w-[100%]  flex flex-col mt-[20px] "
            style={{
              display: elm?.shareable === false ? "none" : null,
              textAlign: elm?.textAlign,
              // alignItems: elm?.textAlign,
            }}
          >
            <h2
              className="text-[18px] font-[700]"
              style={{
                color: elm?.graphicTextColor ? elm?.graphicTextColor : "black",
              }}
            >
              {elm?.title}
            </h2>
            <p
              className="font-[400] text-[16px] w-[99%]  mt-[10px]"
              style={{
                color: elm?.graphicTextColor ? elm?.graphicTextColor : "black",
              }}
            >
              {elm?.value}
              {/* This is my text for testing purpose. You can also put your text
              here, Thank you */}
            </p>
          </div>
        ) : elm?.linkID === 22 ? (
          <SpotifyContainer
            link={checkHttp(elm?.value, elm?.linkID)}
            shareable={elm?.shareable}
          />
        ) : elm?.linkID === 23 ? (
          <SoundCloudContainer
            link={checkHttp(elm?.value)}
            shareable={elm?.shareable}
          />
        ) : elm?.linkID === 27 ? (
          elm?.value?.includes("https://soundcloud.com/") ? (
            <SoundCloudContainer
              link={checkHttp(elm?.value)}
              shareable={elm?.shareable}
            />
          ) : elm?.value?.includes("https://open.spotify.com/") ? (
            <SpotifyContainer
              link={checkHttp(elm?.value)}
              shareable={elm?.shareable}
            />
          ) : null
        ) : (
          <>
            <a
              target="_blank"
              href={
                elm?.linkID != 999
                  ? checkHttp(
                      elm?.baseUrl + elm?.value,
                      elm?.linkID,
                      elm?.value
                    )
                  : checkHttp(elm?.url, elm?.linkID, elm?.url)
              }
              // returnSocialUrl(elm?.title, elm?.value)
              class="h-[100px] w-[31%] flex flex-col  items-center"
              //mt-3 mb-[-10px]
              style={{
                display:
                  elm?.shareable === false || elm?.isLinkHighlighted === true
                    ? "none"
                    : null,

                // marginBottom:
                //   sociallink[i + 1]?.isLinkHighlighted === true ||
                //   sociallink[i + 2]?.isLinkHighlighted === true
                //     ? "-25px"
                //     : "0px",
              }}
              onClick={() => linkAnalytics(elm)}
            >
              {imgAdded(elm?.image) ? (
                <img
                  src={elm?.image ? elm?.image : web}
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
                  style={{
                    backgroundColor:
                      elm?.linkID === 999 ||
                      !returnReactIcons(elm?.linkID, appIconColor)
                        ? "transparent"
                        : appIconColor,
                  }}
                >
                  {elm?.linkID != null &&
                    (!appIconColor || elm?.linkID === 999 ? (
                      <img
                        src={
                          returnPngIcons(elm?.linkID)
                            ? returnPngIcons(elm?.linkID)
                            : elm?.linkImgUrl
                            ? elm?.linkImgUrl
                            : web
                        }
                        alt="img"
                        class={
                          elm?.linkID === 999 ||
                          !returnIcons(elm?.linkID) ||
                          !appIconColor
                            ? ` ${"h-[100%] w-[100%] rounded-xl object-cover"}`
                            : ` ${"h-[60px] w-[60px] mix-blend-multiply"}`
                        }
                      />
                    ) : (
                      returnReactIcons(elm?.linkID, appIconColor, 45)
                    ))}
                </div>
              )}
              <h2
                class="font-[300] text-[12px]  mt-[6px] text-center"
                style={{
                  color: !whiteTextAndBorder ? "black" : "white",
                  // textShadow:
                  //   whiteTextAndBorder && isClassic ? "1px 1px black" : null,
                }}
              >
                {/* {elm?.title} */}
                {elm?.title?.length < 19
                  ? elm?.title
                  : elm?.title?.substring(0, 19) + "..."}
              </h2>
            </a>
          </>
        );
      })}
      {/* <div
        className="w-[100%] text-left flex flex-col  mt-[20px]"
       
      >
        <h2
          className="text-[18px] font-[700]"
          style={{
            color:
        
              "white",
          }}
        >
     
          My heading
        </h2>
        <p
          className="font-[400] text-[16px] w-[95%] mt-[10px]"
          style={{
            color:
        
              "white",
          }}
        >
         
          This is my heading page , I am testing something
        </p>
      </div> */}
    </div>
  );
};

export default SocialLinks;
