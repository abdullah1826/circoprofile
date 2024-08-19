import React, { useState } from "react";
import { Box, Modal } from "@mui/material";
import { FiUpload } from "react-icons/fi";
import { SlArrowRight } from "react-icons/sl";
import { IoWarningOutline } from "react-icons/io5";
import { push, ref, serverTimestamp, update } from "firebase/database";
import { db } from "../../Firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import {
  EmailShareButton,
  FacebookMessengerShareButton,
  FacebookShareButton,
  InstapaperShareButton,
  LineShareButton,
  LinkedinShareButton,
  PinterestShareButton,
  RedditShareButton,
  TelegramShareButton,
  TwitterShareButton,
  ViberShareButton,
  WhatsappShareButton,
} from "react-share";
import {
  EmailIcon,
  FacebookIcon,
  FacebookMessengerIcon,
  InstapaperIcon,
  LineIcon,
  LinkedinIcon,
  PinterestIcon,
  RedditIcon,
  TelegramIcon,
  TwitterIcon,
  ViberIcon,
  WhatsappIcon,
} from "react-share";
import Tooltip from "@mui/material/Tooltip";
import { BiCopy } from "react-icons/bi";
import { SlArrowLeft } from "react-icons/sl";

const MenumenuModal = ({ menuModal, handleMenuModal, userdata }) => {
  const [modalRoute, setModalRoute] = useState({
    isOptions: true,
    isReport: false,
    isMessage: false,
    isShare: false,
  });

  const style2 = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 340,
    height: modalRoute?.isMessage ? 250 : 335,
    bgcolor: "white",
    // border: '2px solid #000',
    boxShadow: 24,
    border: "none",
    outline: "none",
    borderRadius: "18px",
    // p: "32px",
  };

  const openOption = (option) => {
    if (option === "options") {
      setModalRoute({
        isOptions: true,
        isReport: false,
        isMessage: false,
        isShare: false,
      });
    } else if (option === "report") {
      setModalRoute({
        isOptions: false,
        isReport: true,
        isMessage: false,
        isShare: false,
      });
    } else if (option === "message") {
      setModalRoute({
        isOptions: false,
        isReport: false,
        isMessage: true,
        isShare: false,
      });
    } else if (option === "share") {
      setModalRoute({
        isOptions: false,
        isReport: false,
        isMessage: false,
        isShare: true,
      });
    }
  };

  let [data, setData] = useState({
    title: "",
    message: "",
  });

  const addData = async () => {
    if (data.message) {
      let pushKey = push(ref(db, `Reports/`), {
        ...data,
        reportedId: userdata?.id,
        date: serverTimestamp(),
        // date: formattedDate,
      }).key;
      update(ref(db, `Reports/${pushKey}`), {
        reportId: pushKey,
      }).then(() => {
        // toast.success("Information submited successfuly");

        setData({
          title: "",
          message: "",
        });
        openOption("message");
      });
    } else {
      toast.error("message field should not be empty!");
    }
  };
  let url = window.location.href;
  let quote = "Circo";
  return (
    <Modal
      open={menuModal}
      onClose={() => handleMenuModal()}
      aria-labelledby="menuModal-menuModal-title"
      aria-describedby="menuModal-menuModal-description"
    >
      <Box sx={style2}>
        <div
          className={`w-[100%] h-[100%] ${
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
              : "sf"
          }`}
        >
          {modalRoute.isOptions && (
            <>
              <div className="w-[100%] flex justify-center items-center font-[700] text-[17px] mt-3">
                {userdata?.name}
              </div>
              <div className="w-[100%] flex justify-center mt-8">
                <div
                  className="w-[90%] flex justify-between items-center "
                  onClick={() => openOption("share")}
                >
                  <div className="w-[70%] flex justify-between items-center">
                    <FiUpload className="text-xl" />
                    <div className="flex justify-start  w-[82%]">
                      <p className="font-[400] text-[17px]">
                        Share this profile
                      </p>
                    </div>
                  </div>
                  <SlArrowRight className="text-xl cursor-pointer" />
                </div>
              </div>

              <div
                className="w-[100%] flex justify-center mt-8"
                onClick={() => openOption("report")}
              >
                <div className="w-[90%]  flex justify-between items-center">
                  <div className="w-[70%] flex justify-between items-center">
                    <IoWarningOutline className="text-xl" />

                    <div className="flex justify-start  w-[82%]">
                      <p className="font-[400] text-[17px]">
                        Report this profile
                      </p>
                    </div>
                  </div>
                  <SlArrowRight className="text-xl cursor-pointer" />
                </div>
              </div>

              <div className="w-[100%] border-t mt-10 flex justify-center">
                <div className="w-[90%] mt-2">
                  <h2 className="font-[700] text-[17px] ">
                    Create your Circo Profile
                  </h2>
                  <p className="font-[400] text-[15px] text-[#ABA5A5]">
                    Your mini-site digital business card.
                  </p>

                  <div className="w-[100%] flex justify-start items-center gap-2 mt-4">
                    <button
                      className="w-[150px] h-[53px] bg-[#2B6EF6] rounded-[14px] outline-none font-[400] text-[16px] text-white"
                      onClick={() => window.open("https://onelink.to/srbhaw")}
                    >
                      Create for free
                    </button>
                    <button
                      className="w-[150px] h-[53px] border rounded-[14px] outline-none font-[400] text-[16px]"
                      onClick={() => window.open("https://www.getcirco.com")}
                    >
                      Learn more
                    </button>
                  </div>
                </div>
              </div>
            </>
          )}

          {modalRoute.isReport && (
            <>
              <div className="w-[100%] flex justify-center items-center font-[700] text-[17px] mt-3">
                Report a Card
              </div>
              <div className="w-[100%] flex flex-col items-center">
                <input
                  type="text"
                  className="w-[93%] outline-none pl-[2%] h-[52px] rounded-[16px] border mt-3"
                  placeholder="Title"
                  onChange={(e) => setData({ ...data, title: e.target.value })}
                  value={data.title}
                />
                <textarea
                  name=""
                  id=""
                  draggable={false}
                  className="w-[93%] outline-none pl-[2%] h-[137px] rounded-[16px] border mt-3 resize-none"
                  placeholder="Message"
                  onChange={(e) =>
                    setData({ ...data, message: e.target.value })
                  }
                  value={data.message}
                ></textarea>

                <div className="w-[100%] flex justify-center items-center gap-2 mt-4">
                  <button
                    className="w-[150px] h-[53px] bg-[#2B6EF6] rounded-[14px] outline-none font-[400] text-[16px] text-white"
                    onClick={() => addData()}
                  >
                    Submit
                  </button>
                  <button
                    className="w-[150px] h-[53px] border rounded-[14px] outline-none font-[400] text-[16px]"
                    onClick={() => openOption("options")}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )}

          {modalRoute.isMessage && (
            <>
              <div className="w-[100%] flex justify-center items-center font-[700] text-[17px] mt-3">
                Report Received
              </div>
              <div className="w-[100%] flex justify-center mt-1">
                <p className="w-[90%] font-[400] text-[17px] text-center">
                  Thank you for your report. We are reviewing it and will take
                  appropriate action to ensure our community remains safe and
                  respectful.
                </p>
              </div>

              <div className="w-[100%] flex justify-center mt-3">
                <button
                  className="w-[85%] h-[53px] bg-[#2B6EF6] rounded-[14px] outline-none font-[400] text-[16px] text-white"
                  onClick={() => {
                    handleMenuModal(), openOption("options");
                  }}
                >
                  Done
                </button>
              </div>
            </>
          )}

          {modalRoute.isShare && (
            <>
              <div className="w-[100%] flex justify-center flex-col items-center">
                <div className="w-[98%] flex justify-start mt-4 ml-3">
                  <SlArrowLeft
                    onClick={() => openOption("options")}
                    className="text-2xl cursor-pointer"
                  />
                  {/* <RxCross2 className="text-black cursor-pointer" onClick={() =>handleShareModal()}/> */}
                </div>
                <h2 className="text-lg font-medium">Share To</h2>

                <div className="w-[90%] grid grid-cols-3 gap-x-3 gap-y-5  mt-5">
                  <Tooltip title="Copy to Clipboard" placement="top-start">
                    <div className=" flex  items-center ml-[22px]">
                      <BiCopy
                        className="text-[45px] cursor-pointer active:text-[#0b567f] active:text-[40px]"
                        onClick={() => {
                          navigator.clipboard.writeText(url);
                        }}
                      />
                      {/* <div className='text-[10px]'>Copy url</div> */}
                    </div>
                  </Tooltip>

                  <div className="ml-[22px]">
                    <WhatsappShareButton
                      id="whatsapp"
                      url={quote + "\n" + url}
                      text={"Please find my Profile Link below:"}
                      hashtag="#React"
                    >
                      <WhatsappIcon size={50} round={true} />
                    </WhatsappShareButton>
                  </div>

                  <div className="ml-[22px]">
                    <TelegramShareButton
                      id="telegram"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <TelegramIcon size={50} round={true} />
                    </TelegramShareButton>
                  </div>

                  <div className="ml-[22px]">
                    <FacebookShareButton
                      id="facebook"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <FacebookIcon size={50} round={true} />
                    </FacebookShareButton>
                  </div>

                  <div className="ml-[22px]">
                    <EmailShareButton
                      id="Email"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <EmailIcon size={50} round={true} />
                    </EmailShareButton>
                  </div>

                  <div className="ml-[22px]">
                    <PinterestShareButton
                      id="pinterest"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <PinterestIcon size={50} round={true} />
                    </PinterestShareButton>
                  </div>

                  <div className="ml-[22px]">
                    <LinkedinShareButton
                      id="linkedin"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <LinkedinIcon size={50} round={true} />
                    </LinkedinShareButton>
                  </div>

                  {/* <div>
<FacebookMessengerShareButton id='fbMessenger' url={quote + "\n" + url} text={quote} hashtag="#React">
              <FacebookMessengerIcon size={50} round={true} />
            </FacebookMessengerShareButton>
</div> */}

                  <div className="ml-[22px]">
                    <TwitterShareButton
                      id="twitter"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <TwitterIcon size={50} round={true} />
                    </TwitterShareButton>
                  </div>

                  <div className="ml-[22px]">
                    <RedditShareButton
                      id="reddit"
                      url={quote + "\n" + url}
                      text={quote}
                      hashtag="#React"
                    >
                      <RedditIcon size={50} round={true} />
                    </RedditShareButton>
                  </div>
                </div>
              </div>
            </>
          )}
          <ToastContainer position="top-center" autoClose={1000} />
        </div>
      </Box>
    </Modal>
  );
};

export default MenumenuModal;
