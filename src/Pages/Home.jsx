import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db, storage } from "../Firebase";
import {
  equalTo,
  onValue,
  orderByChild,
  push,
  query,
  ref,
  set,
  update,
} from "firebase/database";
import { getDownloadURL, ref as storagref } from "firebase/storage";
import { returnIcons } from "../assets/ReturnSocialIcons";
import Loader from "../assets/components/Loader";
import VCard from "vcard-creator";
import NotFound from "./NotFound";
import LeadformModal from "../assets/components/LeadformModal";
import "react-toastify/dist/ReactToastify.min.css";
import ConfirmModal from "../assets/components/SubmitConfirmModal";
import Classic from "../Themes/Classic";
import Color from "../Themes/Color";
import Full from "../Themes/Full";
import Portrait from "../Themes/Portrait";
import "../App.css";
import Pro from "../Themes/Pro";
import ClassicPro from "../Themes/ClassicPro";
import {
  cardSubDesigns,
  classicSubDesigns,
  colorSubDesigns,
  customBackgrounds,
  customSubDesigns,
  portraitSubDesigns,
} from "../assets/ReturnSubdesign";

const Home = () => {
  let { userid } = useParams();
  let [userdata, setuserdata] = useState(null);
  let [sociallink, setsociallink] = useState([]);
  let [loading, setloading] = useState(true);
  const [exchanged, setExchanged] = useState(false);

  // console.log(sociallink);

  // ------------------getting Data--------------------
  let [allAnalytics, setAllAnalytics] = useState([]);

  let [notfound, setnotfound] = useState(false);
  let [modal, setModal] = useState(false);
  let [confirmModal, setConfirmModal] = useState(false);

  let handleConfirmModal = () => {
    setConfirmModal(!confirmModal);
  };

  let handleModal = () => {
    if (!modal) {
      setModal(!modal);
      window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth",
      });
    } else {
      setModal(!modal);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  let currentDate = Date.now();
  const oneWeek = 7 * 24 * 60 * 60 * 1000;
  const oneMonth = 30 * 24 * 60 * 60 * 1000;
  const oneDay = 24 * 60 * 60 * 1000;

  let handleLeadModal = (lead) => {
    if (lead) {
      localStorage.setItem("leadForm", "true");
      window.scrollTo(0, document.body.scrollHeight);
      setModal(lead);
    } else {
      localStorage.setItem("leadForm", "false");
      setModal(lead);
    }
  };

  // useEffect(() => {
  //   const starCountRef3 = query(
  //     ref(db, "User/"),
  //     orderByChild("name"),
  //     equalTo("George William")
  //   );

  //   onValue(starCountRef3, async (snapshot) => {
  //     const data = await snapshot.val();
  //     console.log("user TARGET", data);
  //   });
  // }, []);

  useEffect(() => {
    const starCountRef2 = ref(db, `Analytic/`);
    onValue(starCountRef2, async (snapshot) => {
      const analytData = await snapshot.val();
      console.log(analytData);
      setAllAnalytics(Object.values(analytData));

      const starCountRef3 = query(
        ref(db, "User/"),
        orderByChild("id"),
        equalTo(userid)
      );
      const starCountRef4 = query(
        ref(db, "User/"),
        orderByChild("username"),
        equalTo(userid)
      );
      const starCountRef5 = query(
        ref(db, "Tag/"),
        orderByChild("tagId"),
        equalTo(userid)
      );

      onValue(starCountRef3, async (snapshot) => {
        const data = await snapshot.val();
        console.log(data);
        if (data) {
          setuserdata(Object.values(data)[0]);

          handleLeadModal(Object.values(data)[0]?.leadMode);
          Object.values(data)[0]?.links &&
            setsociallink(Object.values(Object.values(data)[0]?.links));
          setloading(false);
        } else {
          onValue(starCountRef4, async (snapshot) => {
            const data2 = await snapshot.val();
            console.log(data2);
            if (data2) {
              if (Object.values(data2)[0]?.profileSelected) {
                var starCountRef7 = query(
                  ref(db, "User/"),
                  orderByChild("id"),
                  equalTo(Object.values(data2)[0]?.profileSelected)
                );
              } else {
                var starCountRef7 = query(
                  ref(db, "User/"),
                  orderByChild("id"),
                  equalTo(Object.values(data2)[0]?.id)
                );
              }
              onValue(starCountRef7, async (snapshot) => {
                const userdata = await snapshot.val();
                if (userdata) {
                  setuserdata(Object.values(userdata)[0]);
                  handleLeadModal(Object.values(userdata)[0]?.leadMode);
                  Object.values(userdata)[0]?.links &&
                    setsociallink(
                      Object.values(Object.values(userdata)[0]?.links)
                    );
                  setloading(false);
                }
              });
            } else {
              onValue(starCountRef5, async (snapshot) => {
                const data3 = await snapshot.val();
                console.log(data3);
                if (data3 && Object.values(data3)[0]?.status === true) {
                  const starCountRef6 = query(
                    ref(db, "User/"),
                    orderByChild("username"),
                    equalTo(Object.values(data3)[0]?.username)
                  );
                  onValue(starCountRef6, async (snapshot) => {
                    const data4 = await snapshot.val();
                    console.log(data4);
                    if (data4) {
                      if (Object.values(data4)[0]?.profileSelected) {
                        var starCountRef8 = query(
                          ref(db, "User/"),
                          orderByChild("id"),
                          equalTo(Object.values(data4)[0]?.profileSelected)
                        );
                      } else {
                        var starCountRef8 = query(
                          ref(db, "User/"),
                          orderByChild("id"),
                          equalTo(Object.values(data4)[0]?.id)
                        );
                      }

                      onValue(starCountRef8, async (snapshot) => {
                        const userdata = await snapshot.val();
                        console.log(userdata);
                        if (userdata) {
                          setuserdata(Object.values(userdata)[0]);
                          handleLeadModal(Object.values(userdata)[0]?.leadMode);
                          Object.values(userdata)[0]?.links &&
                            setsociallink(
                              Object.values(Object.values(userdata)[0]?.links)
                            );
                          setloading(false);
                        } else {
                          setloading(false);
                          setnotfound(true);
                        }
                      });
                    } else {
                      setloading(false);
                      setnotfound(true);
                    }
                  });
                } else {
                  setloading(false);
                  setnotfound(true);
                }
              });
            }
          });
        }
      });
    });
  }, []);
  console.log(userdata);
  let [profileurl, setprofileurl] = useState("");
  useEffect(() => {
    if (userdata?.profileUrl) {
      if (userdata?.profileUrl?.includes("googleusercontent")) {
        setprofileurl(userdata?.profileUrl);
      } else {
        const fileRef = storagref(storage, userdata?.profileUrl);
        getDownloadURL(fileRef)
          .then((URL) => {
            console.log(URL);
            setprofileurl(URL);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    }
  }, [userdata?.profileUrl]);

  // getting logo img

  let [logourl, setlogourl] = useState("");
  useEffect(() => {
    if (userdata?.logoUrl) {
      // const storage = getStorage();
      const fileRef = storagref(storage, userdata?.logoUrl);
      // console.log(loginUserData.profileUrl);

      getDownloadURL(fileRef)
        .then((URL) => {
          console.log(URL);
          setlogourl(URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userdata?.logoUrl]);

  // getting logo img

  let [coverurl, setcoverurl] = useState("");
  useEffect(() => {
    if (userdata?.coverUrl) {
      // const storage = getStorage();
      const fileRef = storagref(storage, userdata?.coverUrl);
      // console.log(loginUserData.profileUrl);

      getDownloadURL(fileRef)
        .then((URL) => {
          // console.log(URL);
          setcoverurl(URL);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [userdata?.logoUrl]);

  // ----------------------------------------->Analytics<-------------------------------------

  let addedInAnalyticsOrNot = (id) => {
    let addedOrNot = allAnalytics?.some((elm) => {
      return id === elm?.userid;
    });
    return addedOrNot;
  };

  let crntUsrAnalytics = allAnalytics?.find((usr) => {
    return userdata?.id === usr?.userid;
  });
  let linkAddedInAnalyticsOrNot = (id) => {
    let addedOrNot = crntUsrAnalytics?.links?.some((elm) => {
      return id === elm?.id;
    });
    return addedOrNot;
  };

  console.log(crntUsrAnalytics);

  useEffect(() => {
    if (userdata?.id) {
      if (addedInAnalyticsOrNot(userdata?.id)) {
        // ---------------------------updatetion for week wise analytics-------------------------
        if (currentDate > crntUsrAnalytics?.updatedWeek + oneWeek) {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            totalViews: crntUsrAnalytics?.totalViews + 1,
            updatedWeek: currentDate,
            pastWeekViews: crntUsrAnalytics?.crntWeekViews,
            pastWeekLeads: crntUsrAnalytics?.crntWeekLeads,
          }).then(() => {
            update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
              crntWeekViews: 1,
              crntWeekLeads: 0,
            });
          });
        } else {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            totalViews: crntUsrAnalytics?.totalViews + 1,
            crntWeekViews: crntUsrAnalytics?.crntWeekViews + 1,
            crntMonthViews: crntUsrAnalytics?.crntMonthViews + 1,
          });
        }

        // ---------------------------updatetion for Month wise analytics-------------------------
        if (currentDate > crntUsrAnalytics?.updatedMonth + oneMonth) {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            updatedMonth: currentDate,
            pastMonthViews: crntUsrAnalytics?.crntMonthViews,
            pastMonthLeads: crntUsrAnalytics?.crntMonthLeads,
          }).then(() => {
            update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
              crntMonthViews: crntUsrAnalytics?.crntMonthViews + 1,
              crntMonthLeads: 0,
            });
          });
        }

        // ---------------------------updatetion for one day analytics-------------------------
        if (currentDate > crntUsrAnalytics?.updatedDay + oneDay) {
          let weeklyViewsArray = Object.values(crntUsrAnalytics?.weeklyViews);
          let weeklyConnectionsArray = Object.values(
            crntUsrAnalytics?.weeklyConnections
          );
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            updatedDay: currentDate,
            weeklyViews: [
              weeklyViewsArray[1],
              weeklyViewsArray[2],
              weeklyViewsArray[3],
              weeklyViewsArray[4],
              weeklyViewsArray[5],
              weeklyViewsArray[6],
              crntUsrAnalytics?.todayViews,
            ],
            weeklyConnections: [
              weeklyConnectionsArray[1],
              weeklyConnectionsArray[2],
              weeklyConnectionsArray[3],
              weeklyConnectionsArray[4],
              weeklyConnectionsArray[5],
              weeklyConnectionsArray[6],
              crntUsrAnalytics?.todayLeads,
            ],
          }).then(() => {
            update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
              todayViews: 1,
              todayLeads: 0,
            });
          });
        } else {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            todayViews: crntUsrAnalytics?.todayViews + 1,
            todayLeads: crntUsrAnalytics?.todayLeads,
          });
        }
      } else {
        let thePushKey = push(ref(db, `Analytic/`), {
          userid: userdata?.id,
          totalViews: 1,
          totalClicks: 0,
          totalClickRate: 0,
          totalLeads: 0,
          totalExchanged: 0,
          crntWeekViews: 1,
          pastWeekViews: 0,

          crntWeekLeads: 0,
          pastWeekLeads: 0,

          crntMonthViews: 1,
          pastMonthViews: 0,

          crntMonthLeads: 0,
          pastMonthLeads: 0,

          todayViews: 1,
          todayLeads: 0,
          weeklyViews: [0, 0, 0, 0, 0, 0, 0],
          weeklyConnections: [0, 0, 0, 0, 0, 0, 0],
          updatedWeek: currentDate,
          updatedMonth: currentDate,
          updatedDay: currentDate,
        }).key;

        update(ref(db, `Analytic/${thePushKey}`), {
          id: thePushKey,
        });
      }
    }
  }, [userdata?.id]);

  // ----------------------------------------->Link Analytics<-------------------------------------

  let linkAnalytics = (name) => {
    if (crntUsrAnalytics?.links) {
      if (linkAddedInAnalyticsOrNot(name?.id)) {
        console.log("added");
        let findLink = crntUsrAnalytics?.links?.find((elm) => {
          return name?.id === elm?.id;
        });

        let linksWithoutCrntLink = crntUsrAnalytics?.links?.filter((elm) => {
          return name?.id != elm?.id;
        });
        update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
          links: [
            ...linksWithoutCrntLink,
            {
              id: findLink?.id,
              linkID: findLink?.linkID,
              name: findLink?.name ? findLink?.name : "",
              clicks: findLink?.clicks + 1,
              image: findLink?.image ? findLink?.image : "",
              title: findLink?.title ? findLink?.title : "",
              url: findLink?.url ? findLink?.url : "",
              style: findLink?.style ? findLink?.style : "",
              linkImgUrl: findLink?.linkImgUrl ? findLink?.linkImgUrl : "",
              buttonImgUrl: findLink?.buttonImgUrl
                ? findLink?.buttonImgUrl
                : "",
              graphicImgUrl: findLink?.graphicImgUrl
                ? findLink?.graphicImgUrl
                : "",
            },
          ],
        }).then(() => {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}/`), {
            totalClicks: crntUsrAnalytics?.totalClicks + 1,
          });
        });
      } else {
        console.log("yes this part is working");
        update(ref(db, `Analytic/${crntUsrAnalytics?.id}/`), {
          links: [
            ...crntUsrAnalytics?.links,
            {
              id: name?.id,
              linkID: name?.linkID,
              name: name?.name ? name?.name : "",
              clicks: 1,
              image: name?.image ? name?.image : "",
              title: name?.title ? name?.title : "",
              url: name?.url ? name?.url : "",
              style: name?.style ? name?.style : "",
              linkImgUrl: name?.linkImgUrl ? name?.linkImgUrl : "",
              buttonImgUrl: name?.buttonImgUrl ? name?.buttonImgUrl : "",
              graphicImgUrl: name?.graphicImgUrl ? name?.graphicImgUrl : "",
            },
          ],
        }).then(() => {
          update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
            totalClicks: crntUsrAnalytics?.totalClicks + 1,
          });
        });
      }
      console.log("testing analytics");
    } else {
      update(ref(db, `Analytic/${crntUsrAnalytics?.id}/`), {
        links: [
          {
            id: name?.id,
            linkID: name?.linkID,
            name: name?.name ? name?.name : "",
            clicks: 1,
            image: name?.image ? name?.image : "",
            title: name?.title ? name?.title : "",
            url: name?.url ? name?.url : "",
            style: name?.style ? name?.style : "",
            linkImgUrl: name?.linkImgUrl ? name?.linkImgUrl : "",
            buttonImgUrl: name?.buttonImgUrl ? name?.buttonImgUrl : "",
            graphicImgUrl: name?.graphicImgUrl ? name?.graphicImgUrl : "",
          },
        ],
      }).then(() => {
        update(ref(db, `Analytic/${crntUsrAnalytics?.id}`), {
          totalClicks: 1,
        });
        console.log("testing analytics2");
      });
    }
  };

  // To base64

  let [base64img, setbase64img] = useState("");
  useEffect(() => {
    let cnvrtTo64 = async () => {
      const base64 = await fetch(profileurl)
        .then((response) => response.blob())
        .then((blob) => {
          const reader = new FileReader();
          reader.readAsDataURL(blob);
          return new Promise((res) => {
            reader.onloadend = () => {
              res(reader.result);
            };
          });
        });
      setbase64img(base64);
    };
    cnvrtTo64();
  }, [profileurl]);

  // Download Vcf file
  let checkHttp = (url, id, value) => {
    if (id === 4) {
      return `sms:${value}`;
    } else if (id === 2 || id === 1) {
      return `tel:${value}`;
    } else if (id === 3) {
      return `mailto:${value}`;
    } else {
      if (url?.includes("https://") || url?.includes("http://")) {
        return url;
      } else {
        return `https://${url}`;
      }
    }
  };

  const findLinkAndReturn = (id) => {
    let link = sociallink?.find((elm) => {
      return elm?.id === id;
    });
    if (link) {
      if (link.value) {
        return link?.baseUrl + link?.value;
      } else {
        return link?.url;
      }
    }
  };

  let downloadVcf = async () => {
    // Define a new vCard
    const myVCard = new VCard();

    // Some variables
    const lastname = userdata?.lastName;
    const firstname = userdata?.firstName;
    const additional = "";
    const prefix = "";
    const suffix = "";

    myVCard
      .addName(lastname, firstname, additional, prefix, suffix)
      .addJobtitle(userdata?.jobTitle)
      .addCompany(userdata?.company)
      .addEmail(userdata?.email)
      .addPhoneNumber(userdata?.phone)
      .addPhoto(base64img.slice(37), "jpeg")
      .addAddress("", "", userdata?.address)
      .addNote("From Circo");
    const userAgent = navigator.userAgent;
    if (userAgent.match(/Android/i)) {
      sociallink?.map((elm) => {
        if (
          // elm?.linkID != 3 &&
          elm?.linkID != 1 &&
          elm?.linkID != 4 &&
          elm?.linkID != 2 &&
          elm?.linkID != 3 &&
          elm?.linkID != 26 &&
          elm?.shareable === true
        ) {
          myVCard.addURL(
            checkHttp(
              elm?.linkID === 999 ? elm?.url : elm?.baseUrl + elm?.value,
              elm?.linkID,
              elm?.value
            )
          );
        }
        if (elm?.linkID === 2 && elm?.value != userdata?.phone) {
          myVCard.addPhoneNumber(elm?.value);
        }
        if (elm?.linkID === 3 && elm?.value != userdata?.email) {
          myVCard.addEmail(elm?.value);
        }

        // if (elm?.linkID === 1) {
        //   myVCard.addPhoneNumber(elm?.value);
        // }
        if (elm?.linkID === 21) {
          myVCard.addURL(elm?.value);
        }
        // checkHttp(elm?.baseUrl + elm?.value, elm?.linkID)
      });
    } else {
      sociallink?.map((elm) => {
        if (
          // elm?.linkID != 3 &&
          elm?.linkID != 1 &&
          elm?.linkID != 4 &&
          elm?.linkID != 2 &&
          elm?.linkID != 3 &&
          elm?.linkID != 26 &&
          elm?.shareable === true
        ) {
          myVCard.addSocial(
            checkHttp(
              elm?.linkID === 999 ? elm?.url : elm?.baseUrl + elm?.value,
              elm?.linkID,
              elm?.value
            ),
            elm?.name
          );
        }
        if (elm?.linkID === 2 && elm?.value != userdata?.phone) {
          myVCard.addPhoneNumber(elm?.value);
        }
        if (elm?.linkID === 3 && elm?.value != userdata?.email) {
          myVCard.addEmail(elm?.value);
        }

        // if (elm?.linkID === 1) {
        //   myVCard.addPhoneNumber(elm?.value);
        // }
        if (elm?.linkID === 21) {
          myVCard.addURL(elm?.value);
        }
        // checkHttp(elm?.baseUrl + elm?.value, elm?.linkID)
      });
    }
    const vcardData = myVCard.toString();
    const blob = new Blob([vcardData], { type: "text/vcard;charset=utf-8" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Circo.vcf");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setExchanged(true);
    setModal(true);
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
  };

  let returnSlicedString = (str, numVal) => {
    if (str?.length <= numVal) {
      return str;
    } else {
      return str?.slice(0, numVal) + "...";
    }
  };

  let scrnWidth = window.innerWidth;

  let removeHash = (code) => {
    if (code?.includes("#")) {
      return code?.slice(1, code?.length);
    } else {
      return code;
    }
  };
  console.log(userdata?.profileDesign?.selectedTheme);

  const returnBgImage = () => {
    if (userdata?.profileDesign?.selectedTheme === "other") {
      return userdata?.profileDesign?.backgroundColor;
    } else {
      return customBackgrounds[userdata?.profileDesign?.selectedTheme] || null;
    }
  };

  const themeSelector = (theme, layout) => {
    if (theme === "other" || !theme || theme === undefined || theme === null) {
      return layout;
    } else {
      if (theme?.includes("classic")) return "Classic";
      if (theme?.includes("portrait")) return "Portrait";
      if (theme?.includes("image")) return "Custom";
      if (theme?.includes("card")) return "Card";
      if (theme?.includes("color")) return "Color";
    }
  };

  console.log(classicSubDesigns["classic1"], "<----------------here is design");

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          {notfound || userdata?.profileOn === 0 ? (
            <NotFound />
          ) : userdata?.directMode === false ? (
            <div
              className={`h-[100vh] max-w-[435px] w-[100%] flex flex-col items-center  shadow-lg  relative ${
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
                  ? "sf"
                  : "sf"
              }`}
              style={
                userdata?.profileDesign?.backgroundTheme === "Full"
                  ? {}
                  : {
                      backgroundColor: `${userdata?.profileDesign?.backgroundColor}`,
                    }
              }
            >
              {modal && (
                <div
                  className="h-[100%] w-[100%] z-20 absolute"
                  style={{
                    background:
                      "linear-gradient(90deg, rgba(44, 44, 44, 0.65) 0%, rgba(44, 44, 44, 0.65) 100%) 0%",
                  }}
                ></div>
              )}
              {userdata?.profileDesign?.backgroundTheme === "Custom" &&
              userdata?.profileDesign?.backgroundImage ? (
                <img
                  // backgroundImage
                  src={userdata?.profileDesign?.backgroundImage}
                  className="h-[100%] w-[100%] object-cover"
                  style={{
                    opacity: `${userdata?.profileDesign?.backgroundOpacity}%`,
                  }}
                />
              ) : null}

              <LeadformModal
                modal={modal}
                handleModal={handleModal}
                userdata={userdata}
                crntUsrAnalytics={crntUsrAnalytics}
                handleConfirmModal={handleConfirmModal}
                setModal={setModal}
                isExchangedModeOn={exchanged}
              />
              {/* )} */}
              <ConfirmModal
                confirmModal={confirmModal}
                handleConfirmModal={handleConfirmModal}
                userdata={userdata}
                prflImg={
                  profileurl ? profileurl : `https://placehold.co/116x116`
                }
                downloadVcf={downloadVcf}
              />

              {userdata?.profileDesign ? (
                <>
                  {userdata?.profileDesign?.backgroundTheme === "Classic" && (
                    <Classic
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      removeHash={removeHash}
                      isV1={false}
                      profileDesign={
                        // userdata?.profileDesign?.selectedTheme === "other"
                        //   ?
                        userdata?.profileDesign
                        // : classicSubDesigns[
                        //     userdata?.profileDesign?.selectedTheme
                        //   ]
                      }
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Color" && (
                    <Color
                      Portrait
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      removeHash={removeHash}
                      profileDesign={
                        // userdata?.profileDesign?.selectedTheme === "other"
                        //   ?
                        userdata?.profileDesign
                        // : colorSubDesigns[
                        //     userdata?.profileDesign?.selectedTheme
                        //   ]
                      }
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Portrait" && (
                    <Portrait
                      Portrait
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      profileDesign={
                        // userdata?.profileDesign?.selectedTheme === "other"
                        //   ?
                        userdata?.profileDesign
                        // : portraitSubDesigns[
                        //     userdata?.profileDesign?.selectedTheme
                        //   ]
                      }
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Card" && (
                    <Pro
                      Portrait
                      coverurl={coverurl}
                      logourl={logourl}
                      profileurl={profileurl}
                      userdata={userdata}
                      returnSlicedString={returnSlicedString}
                      handleModal={handleModal}
                      downloadVcf={downloadVcf}
                      sociallink={sociallink}
                      returnIcons={returnIcons}
                      checkHttp={checkHttp}
                      linkAnalytics={linkAnalytics}
                      scrnWidth={scrnWidth}
                      profileDesign={
                        // userdata?.profileDesign?.selectedTheme === "other"
                        //   ?
                        userdata?.profileDesign
                        // : cardSubDesigns[
                        //     userdata?.profileDesign?.selectedTheme
                        //   ]
                      }
                    />
                  )}

                  {userdata?.profileDesign?.backgroundTheme === "Custom" && (
                    <div className="absolute w-[100%] ">
                      <Full
                        coverurl={coverurl}
                        logourl={logourl}
                        profileurl={profileurl}
                        userdata={userdata}
                        returnSlicedString={returnSlicedString}
                        handleModal={handleModal}
                        downloadVcf={downloadVcf}
                        sociallink={sociallink}
                        returnIcons={returnIcons}
                        checkHttp={checkHttp}
                        linkAnalytics={linkAnalytics}
                        scrnWidth={scrnWidth}
                        saveBtnStyle={userdata?.profileDesign?.saveContactStyle}
                        webBtnStyle={userdata?.profileDesign?.weblinkStyle}
                        weblinkButtonTextColor={
                          userdata?.profileDesign?.weblinkButtonTextColor
                        }
                        weblinkButtonBackgroundColor={
                          userdata?.profileDesign?.weblinkButtonBackgroundColor
                        }
                        saveContactBackgroundColor={
                          userdata?.profileDesign?.saveContactBackgroundColor
                        }
                        saveContactTextColor={
                          userdata?.profileDesign?.saveContactTextColor
                        }
                        highlightBoxStyle={
                          userdata?.profileDesign?.highlightBoxStyle
                        }
                        appIconColor={userdata?.profileDesign?.appIconColor}
                        boxTextColor={userdata?.profileDesign?.boxTextColor}
                        boxBackgroundColor={
                          userdata?.profileDesign?.boxBackgroundColor
                        }
                        whiteTextAndBorder={
                          userdata?.profileDesign?.whiteTextAndBorder
                        }
                        removeHash={removeHash}
                        hideCompanyLogo={
                          userdata?.profileDesign?.hideCompanyLogo
                        }
                        hideSaveContact={
                          userdata?.profileDesign?.hideSaveContact
                        }
                        // profileDesign={
                        //   userdata?.profileDesign?.selectedTheme === "other"
                        //     ? userdata?.profileDesign
                        //     : customSubDesigns[
                        //         userdata?.profileDesign?.selectedTheme
                        //       ]
                        // }
                        profileDesign={
                          // userdata?.profileDesign?.selectedTheme === "other"
                          //   ?
                          userdata?.profileDesign
                          // : cardSubDesigns[
                          //     userdata?.profileDesign?.selectedTheme
                          //   ]
                        }
                      />
                    </div>
                  )}
                </>
              ) : (
                <Classic
                  coverurl={coverurl}
                  logourl={logourl}
                  profileurl={profileurl}
                  userdata={userdata}
                  returnSlicedString={returnSlicedString}
                  handleModal={handleModal}
                  downloadVcf={downloadVcf}
                  sociallink={sociallink}
                  returnIcons={returnIcons}
                  checkHttp={checkHttp}
                  linkAnalytics={linkAnalytics}
                  scrnWidth={scrnWidth}
                  saveBtnStyle="style1"
                  webBtnStyle="style1"
                  weblinkButtonTextColor="white"
                  weblinkButtonBackgroundColor="black"
                  saveContactBackgroundColor="#080808"
                  saveContactTextColor="white"
                  highlightBoxStyle="style1"
                  isClassic={true}
                  appIconColor="black"
                  boxTextColor="black"
                  boxBackgroundColor="white"
                  removeHash={() => {
                    return "#0a0a0a";
                  }}
                  hideCompanyLogo={false}
                  hideSaveContact={false}
                  isV1={true}
                  profileDesign={classicSubDesigns["classic1"]}
                />
              )}
              {/* </div> */}
            </div>
          ) : (
            // </div>
            window.open(
              checkHttp(
                userdata?.direct?.value
                  ? userdata?.direct?.baseUrl + userdata?.direct?.value
                  : findLinkAndReturn(userdata?.direct?.id),
                userdata?.direct?.linkID,
                userdata?.direct?.value
              )
            )
          )}
        </>
      )}
    </>
  );
};

export default Home;
