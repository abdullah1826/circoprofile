import React from "react";
import { LuRepeat } from "react-icons/lu";

const ExchangeIconBtn = ({
  handleModal,
  saveBtnStyle,
  saveContactBackgroundColor,
  saveContactTextColor,
  hideSaveContact,
  scrnWidth,
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

  let hideSaveContactFalse =
    scrnWidth >= 420
      ? { right: "10%" }
      : scrnWidth >= 380
      ? { right: "6%" }
      : scrnWidth <= 380
      ? { right: "4%" }
      : null;
  let hideSaveContactTrue = null;
  return (
    <div
      className="absolute"
      style={hideSaveContact ? { hideSaveContactTrue } : hideSaveContactFalse}
    >
      <div
        className="h-[40px] w-[40px] cursor-pointer   flex justify-center items-center "
        onClick={() => handleModal()}
        //   style={hideSaveContact ? { hideSaveContactTrue } : hideSaveContactFalse}
        style={
          saveBtnStyle === "style6" || saveBtnStyle === "style5"
            ? {
                background: `linear-gradient(135deg, ${hexToRGBA(
                  saveContactBackgroundColor,
                  "1"
                )} 0%,  ${hexToRGBA(saveContactBackgroundColor, "2")} 0%)`,

                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                borderRadius:
                  saveBtnStyle === "style1" ||
                  saveBtnStyle === "style3" ||
                  saveBtnStyle === "style5"
                    ? "6px"
                    : "100px",
                color: saveContactTextColor,
              }
            : {
                backgroundColor:
                  saveBtnStyle === "style1" || saveBtnStyle === "style2"
                    ? saveContactBackgroundColor
                    : "transparent",
                fontStyle: "Inter",
                border:
                  saveBtnStyle === "style3" || saveBtnStyle === "style4"
                    ? `1px solid ${saveContactBackgroundColor}`
                    : null,
                borderRadius:
                  saveBtnStyle === "style1" ||
                  saveBtnStyle === "style3" ||
                  saveBtnStyle === "style5"
                    ? "6px"
                    : "100px",

                color: saveContactTextColor,
              }
        }
      >
        <LuRepeat
          className="text-[23px]"
          //   style={{ color: saveContactTextColor }}
        />
      </div>
    </div>
  );
};

export default ExchangeIconBtn;
