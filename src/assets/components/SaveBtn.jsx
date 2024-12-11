import React from "react";

const SaveBtn = ({
  downloadVcf,
  saveBtnStyle,
  saveContactBackgroundColor,
  saveContactTextColor,
  font,
  isProTheme,
}) => {
  console.log(saveContactTextColor);

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
    <div
      className=" flex  items-center justify-center"
      style={{ width: isProTheme ? "58%" : "250px" }}
    >
      <div
        className={`${
          isProTheme ? "w-[100%]" : "w-[225px]"
        } h-[60px] font-[800] flex justify-center items-center text-[20px]   cursor-pointer ${
          font === "1"
            ? "inika"
            : font === "2"
            ? "gugi"
            : font === "3"
            ? "gothic"
            : font === "4"
            ? "marckScript"
            : font === "5"
            ? "chivo"
            : font === "6"
            ? "sfbold"
            : "sfbold"
        }`}
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
                    ? "15px"
                    : "30px",
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
                    ? "15px"
                    : "30px",

                color: saveContactTextColor,
              }
        }
        onClick={() => downloadVcf()}
      >
        Save Contact
      </div>
    </div>
  );
};

export default SaveBtn;
