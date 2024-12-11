import { Box, Modal } from "@mui/material";
import Slide from "@mui/material/Slide";
import React, { useEffect, useState } from "react";
import { MdKeyboardArrowUp, MdKeyboardArrowDown } from "react-icons/md";
import { push, ref, serverTimestamp, update } from "firebase/database";
import { getDownloadURL, uploadBytes, ref as sRef } from "firebase/storage";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { db, storage } from "../../Firebase";
import { RxCross1 } from "react-icons/rx";
import "../../App.css";

const LeadformModal = ({
  modal,
  handleModal,
  userdata,
  crntUsrAnalytics,
  handleConfirmModal,
  setModal,
  isExchangedModeOn,
}) => {
  let screenWidth = screen.width;
  const style2 = {
    position: "absolute",
    // top: "57%",
    // left: "70%",
    right: "0%",
    // transform: "translate(-50%, -50%)",
    bottom: 1,
    maxWidth: window.innerWidth > 850 ? 420 : 430,
    width: "100%",
    height: 500,
    display: "flex",
    justifyContent: "center",
    zIndex: 30,

    // marginRight: screenWidth >= 900 ? "20px" : "0px",

    // boxShadow: 24,

    outline: "none",
    // borderRadiusTop: "18px",
    // p: "32px",
  };

  let [showExtra, setshowExtra] = useState(false);

  let toggleShowExtra = () => {
    setshowExtra(!showExtra);
  };

  console.log(window.innerHeight);

  let [data, setData] = useState({
    name: "",
    email: "",
    phone: "",
    job: "",
    company: "",
  });

  let [img, setimg] = useState("");

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setimg(e.target.files[0]);
    }
  };

  // Get the current date
  const currentDate = new Date();

  // Function to get the abbreviated month name
  function getMonthAbbreviation(date) {
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return monthNames[date.getMonth()];
  }
  console.log(isExchangedModeOn);

  // Function to add leading zero to single-digit day
  function addLeadingZero(number) {
    return number < 10 ? "0" + number : number;
  }

  // Extract day, month, and year
  const day = addLeadingZero(currentDate.getDate());
  const month = getMonthAbbreviation(currentDate);
  const year = currentDate.getFullYear();

  // Format the date string
  const formattedDate = `${month} ${day},${year}`;
  console.log(crntUsrAnalytics?.id);

  const addData = async () => {
    if (data.name && data.email && data.phone) {
      let pushKey = push(ref(db, `Contacts/`), {
        ...data,
        userid: userdata?.id,
        date: serverTimestamp(),
        // date: formattedDate,
      }).key;
      update(ref(db, `Contacts/${pushKey}`), {
        id: pushKey,
      }).then(() => {
        const exchangeInfo = crntUsrAnalytics?.totalExcanged || 0;
        update(ref(db, `/Analytic/${crntUsrAnalytics?.id}`), {
          crntMonthLeads: crntUsrAnalytics?.crntMonthLeads + 1,
          crntWeekLeads: crntUsrAnalytics?.crntWeekLeads + 1,
          totalLeads: crntUsrAnalytics?.totalLeads + 1,
          todayLeads: crntUsrAnalytics?.todayLeads + 1,
          totalExcanged: isExchangedModeOn ? exchangeInfo + 1 : exchangeInfo,
        }).then(() => {
          setModal(true);
          setIsMessage(true);
        });

        // toast.success("Information submited successfuly");
        setData({
          name: "",
          email: "",
          phone: "",
          job: "",
          company: "",
        });
      });
    } else {
      toast.error("Please fill all the required fields");
    }
  };

  let [isMessage, setIsMessage] = useState(false);



  return (
    <div>
      {/* <Modal
        open={modal}
        onClose={() => handleModal()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >*/}

      <Slide
        in={modal}
        direction="up"
        timeout={{ appear: 500, enter: 500, exit: 500 }}
      >
        <Box sx={style2}>
          <div
            className={`h-[100%] w-[100%] overflow-y-scroll scrollbar-hide flex flex-col rounded-t-[30px] items-center  bg-white shadow-2xl ${
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
            style={{ marginRight: screenWidth >= 900 ? "15px" : "0px" }}
          >
            <div className="w-[92%] flex justify-end mt-[15px]">
              <RxCross1
                className="text-2xl cursor-pointer"
                onClick={() => {
                  handleModal(), setIsMessage(false);
                }}
              />
            </div>
            {!isMessage ? (
              <>
                <div
                  className="w-[100%]  flex justify-center"
                  style={{
                    // fontFamily: "Inter",
                    fontSize: "26px",
                    fontWeight: "600",
                  }}
                >
                  <p className={`w-[85%] text-center `}>
                    Share your contact details with
                    <span className="ml-[5px] text-[#3B57EE]">
                      {userdata?.firstName
                        ? userdata?.firstName
                        : userdata?.name}
                    </span>
                  </p>
                </div>

                <div class="w-[90%]  mt-[0px] ">
                  <div class="mt-4">
                    {/* <p
                  class="ml-2 text-[#3F3939]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "300",
                    fontSize: "16px",
                  }}
                >
                  Full Name<span className="text-[red]">*</span>
                </p> */}
                    <input
                      type="text"
                      placeholder="*Your Name"
                      class="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                      value={data.name}
                    />
                  </div>

                  <div class="mt-4">
                    {/* <p
                  class="ml-2 text-[#3F3939]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "300",
                    fontSize: "16px",
                  }}
                >
                  Phone Number<span className="text-[red]">*</span>
                </p> */}
                    <input
                      type="text"
                      placeholder="*Phone"
                      class="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                      onChange={(e) =>
                        setData({ ...data, phone: e.target.value })
                      }
                      value={data.phone}
                    />
                  </div>

                  <div class="mt-4">
                    {/* <p
                  class="ml-2 text-[#3F3939]"
                  style={{
                    fontFamily: "Inter",
                    fontWeight: "300",
                    fontSize: "16px",
                  }}
                >
                  Email<span className="text-[red]">*</span>
                </p> */}

                    <input
                      type="text"
                      placeholder="*Email"
                      class="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                      value={data.email}
                    />
                  </div>

                  <div>
                    <div class="mt-4 w-[100%] flex justify-between">
                      <div className="w-[47%] ">
                        {/* <p
                      class="ml-2 text-[#3F3939]"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "300",
                        fontSize: "16px",
                      }}
                    >
                      Company
                    </p> */}
                        <input
                          type="text"
                          placeholder="Company"
                          class="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                          onChange={(e) =>
                            setData({ ...data, company: e.target.value })
                          }
                          value={data.company}
                        />
                      </div>
                      <div className="w-[47%] ">
                        {/* <p
                      class="ml-2 text-[#3F3939]"
                      style={{
                        fontFamily: "Inter",
                        fontWeight: "300",
                        fontSize: "16px",
                      }}
                    >g
                      Title
                    </p> */}
                        <input
                          type="text"
                          placeholder="Job title"
                          class="outline-none p-2 w-[100%]  border rounded-[16px] h-[52px] mt-[2px]"
                          onChange={(e) =>
                            setData({ ...data, job: e.target.value })
                          }
                          value={data.job}
                        />
                      </div>
                    </div>

                    {/* <div class="mt-2">
                  <p class="ml-2">Company</p>
                  <input
                    type="text"
                    placeholder="Enter Company"
                    class="outline-none p-2 w-[100%]  border rounded-lg h-[57px] mt-[2px]"
                    onChange={(e) =>
                      setData({ ...data, company: e.target.value })
                    }
                    value={data.company}
                  />
                </div> */}
                  </div>

                  <div className="w-[100%] flex justify-center mt-[20px]">
                    <div
                      className={`w-[100%] border rounded-[18px]  h-[60px] bg-[#2B6EF6] flex justify-center items-center text-white cursor-pointer `}
                      onClick={() => addData()}
                      style={{
                        // fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "400",
                      }}
                    >
                      Share
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="w-[100%] flex flex-col items-center justify-center mt-[140px]">
                  <div className="text-[29px] font-[700] text-center">
                    <p>All set!</p>
                    <p>
                      <span className="text-[#3B57EE] mr-[5px]">
                        {userdata?.firstName}
                      </span>{" "}
                      got your info!
                    </p>
                  </div>
                  <div className="w-[100%] flex flex-col justify-center items-center mt-[120px]">
                    <div
                      className="w-[90%] border rounded-[18px]  h-[60px] bg-[#2B6EF6] flex justify-center items-center text-white cursor-pointer "
                      onClick={() => window.open("https://onelink.to/srbhaw")}
                      style={{
                        // fontFamily: "Inter",
                        fontSize: "20px",
                        fontWeight: "400",
                      }}
                    >
                      Create your own profile
                    </div>

                    <p className="font-[400] w-[87%] text-[16px] text-[#AEAEAE] text-center mt-3">
                      Grow faster and elevate your info-sharing experience with
                      your own mini-site.
                    </p>
                  </div>
                </div>
              </>
            )}

            <ToastContainer position="top-center" autoClose={2000} />
          </div>
        </Box>
      </Slide>

      {/*</Modal> */}
    </div>
  );
};

export default LeadformModal;





































































































