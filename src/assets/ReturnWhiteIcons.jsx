// import contact icons

import call from "./whiteIcons/phone.svg";
import contact from "./whiteIcons/phone.svg";
import text from "./whiteIcons/text.svg";
import whatsapp from "./whiteIcons/whatsapp.svg";
import email from "./whiteIcons/email.svg";

// import social icons

import instagram from "./whiteIcons/instagram.svg";
import facebook from "./whiteIcons/facebook.svg";
import tiktok from "./whiteIcons/tiktok.svg";
import twitter from "./whiteIcons/x.svg";
import Etsy from "./whiteIcons/etsy.svg";
import linkedin from "./whiteIcons/linkedin.svg";
import yelp from "./whiteIcons/yelp.svg";
import pinterest from "./whiteIcons/pinterest.svg";
import youtube from "./whiteIcons/youtube.svg";
// import link from "./whiteIcons/link.png";
import snapchat from "./whiteIcons/snapchat.svg";
// import gallery from "./whiteIcons/gallery.png";
import applink from "./whiteIcons/applink.svg";
import pdf from "./whiteIcons/pdf.svg";
import onlyfans from "./whiteIcons/onlyfans.svg";

import location from "./whiteIcons/location.svg";
import twitch from "./whiteIcons/twitch.svg";
import thread from "./whiteIcons/thread.svg";
import discord from "./whiteIcons/discord.svg";
import zelle from "./whiteIcons/zelle.svg";
import openSea from "./whiteIcons/openSea.svg";
// import music icons
import spotify from "./whiteIcons/spotify.svg";

import applemusic from "./whiteIcons/applemusic.svg";
// import soundcloud from "./whiteIcons/soundcloud.png";
// import itunes from "./whiteIcons/itunes.png";

// import payment icons

import cashapp from "./whiteIcons/cashapp.svg";
import paypal from "./whiteIcons/paypal.svg";

// import payment icons

// import website from "./whiteIcons/link.png";
import venmo from "./whiteIcons/venmo.svg";
import calendly from "./whiteIcons/calendly.svg";
import reviews from "./whiteIcons/review.svg";

// import pinterest from './whiteIcons/pinterest.png'
// import youtube from './whiteIcons/twitter.png'

export const contactIcons = [
  {
    name: "Call",
    img: call,
    placeholder: "Phone Number*",
  },
  {
    name: "Text",
    img: text,
    placeholder: "Phone Number*",
  },
  {
    name: "Whatsapp",
    img: whatsapp,
    placeholder: "Phone Number*",
  },
  {
    name: "Email",
    img: email,
    placeholder: "Email*",
  },
];

export const socialIcons = [
  {
    name: "Instagram",
    img: instagram,
    placeholder: "Instagram Username*",
  },
  {
    name: "Facebook",
    img: facebook,
    placeholder: "Facebook Profile Link*",
  },
  {
    name: "Tiktok",
    img: tiktok,
    placeholder: "Tiktok Username*",
  },
  {
    name: "Twitter",
    img: twitter,
    placeholder: "Twitter Username*",
  },

  {
    name: "Linkedin",
    img: linkedin,
    placeholder: "Linkedin Profile Link*",
  },
  //   {
  //     name: "Twitch",
  //     img: twitch,
  //     placeholder: "Twitch Username*",
  //   },
  {
    name: "Pinterest",
    img: pinterest,
    placeholder: "Pinterest Username*",
  },

  {
    name: "Youtube",
    img: youtube,
    placeholder: "Youtube Chanel Url*",
  },
  {
    name: "Snapchat",
    img: snapchat,
    placeholder: "Snapchat Username*",
  },
  //   {
  //     name: "Telegram",
  //     img: telegram,
  //     placeholder: "Telegram Number*",
  //   },

  //   {
  //     name: "Reddit",
  //     img: reddit,
  //     placeholder: "reddit profile Url*",
  //   },
  //   {
  //     name: "Discord",
  //     img: discord,
  //     placeholder: "Discord server link*",
  //   },
  //   {
  //     name: "Tumblr",
  //     img: tumblr,
  //     placeholder: "Telegram Number*",
  //   },
];

export const media = [
  //   {
  //     name: "Spotify",
  //     img: spotify,
  //     placeholder: "Spotify link*",
  //   },
  //   {
  //     name: "Apple Music",
  //     img: applemusic,
  //     placeholder: "Link to Apple Music*",
  //   },
  //   {
  //     name: "SoundCloud",
  //     img: soundcloud,
  //     placeholder: "SoundCloud username*",
  //   },
];

export const payment = [
  //   {
  //     name: "Cash App",
  //     img: cashapp,
  //     placeholder: "Cash App username*",
  //   },
  //   {
  //     name: "PayPal",
  //     img: paypal,
  //     placeholder: "paypal.me link*",
  //   },
];

export const more = [
  //   {
  //     name: "Website",
  //     img: website,
  //     placeholder: "Website link*",
  //   },
  //   {
  //     name: "Calendly",
  //     img: calendly,
  //     placeholder: "Calendly link*",
  //   },
  //   {
  //     name: "Custom link",
  //     img: custom,
  //     placeholder: "Custom link*",
  //   },
];

// export let returnPngIcons = (id, appcolor, size = 20) => {
//   if (id === 1) {
//     return (
//       <img
//         style={{
//           height: `${size}px`,
//           width: `${size}px`,
//           filter:
//             appcolor === "#FFFFFF" || appcolor === "#ffffff"
//               ? `invert(1)`
//               : null,
//         }}
//         src={contact}
//       />
//     );
//   } else if (id === 2) {
//     return call;
//   } else if (id === 3) {
//     return email;
//   } else if (id === 4) {
//     return text;
//   } else if (id === 5) {
//     return whatsapp;
//   } else if (id === 6) {
//     return location;
//   } else if (id === 15) {
//     return snapchat;
//   } else if (id === 14) {
//     return facebook;
//   } else if (id === 11) {
//     return instagram;
//   } else if (id === 17) {
//     return twitter;
//   } else if (id === 16) {
//     return youtube;
//   }
//   //   else if (id === 42) {
//   //     return Etsy;
//   //   }
//   else if (id === 18) {
//     return pinterest;
//   } else if (id === 13) {
//     return tiktok;
//   } else if (id === 12) {
//     return linkedin;
//   } else if (id === 19) {
//     return onlyfans;
//   }
//   //    else if (id === 20) {
//   //     return link;
//   //   }
//   else if (id === 22) {
//     return spotify;
//   } else if (id === 24) {
//     return applemusic;
//   } else if (id === 29) {
//     return gallery;
//   } else if (id === 27) {
//     return itunes;
//   } else if (id === 28) {
//     return pdf;
//   } else if (id === 31) {
//     return cashapp;
//     // cashapp
//   } else if (id === 32) {
//     return paypal;
//   } else if (id === 41) {
//     return calendly;
//   } else if (id === 21) {
//     return website;
//   } else if (id === 23) {
//     return soundcloud;
//   } else if (id === 33) {
//     return venmo;
//   } else if (id === 42) {
//     return Etsy;
//   }

//   // Text 26
//   else if (id === 43) {
//     return yelp;
//   } else if (id === 44) {
//     return applink;
//   } else if (id === 45) {
//     return reviews;
//   } else if (id === 46) {
//     return discord;
//   } else if (id === 47) {
//     return twitch;
//   } else if (id === 48) {
//     return thread;
//   } else if (id === 49) {
//     return openSea;
//   } else if (id === 50) {
//     return zelle;
//   }
//   // venmo 16
// };

export let returnWhiteIcons = (id, appcolor, size = 20) => {
  const iconsMap = {
    1: contact,
    2: call,
    3: email,
    4: text,
    5: whatsapp,
    6: location,
    15: snapchat,
    14: facebook,
    11: instagram,
    17: twitter,
    16: youtube,
    18: pinterest,
    13: tiktok,
    12: linkedin,
    19: onlyfans,
    22: spotify,
    24: applemusic,
    // 29: gallery,
    // 27: itunes,
    28: pdf,
    31: cashapp,
    32: paypal,
    41: calendly,
    // 21: website,
    // 23: soundcloud,
    33: venmo,
    42: Etsy,
    43: yelp,
    44: applink,
    45: reviews,
    46: discord,
    47: twitch,
    48: thread,
    49: openSea,
    50: zelle,
  };

  const iconSrc = iconsMap[id];
  if (!iconSrc) return null; // Return null if the id doesn't match any key

  return (
    <img
      style={{
        height: `${size}px`,
        width: `${size}px`,
        filter:
          appcolor === "#FFFFFF" || appcolor === "#ffffff" ? `invert(1)` : null,
        objectFit: "contain",
      }}
      src={iconSrc}
      alt={`icon-${id}`} // Optional: add an alt attribute for accessibility
    />
  );
};
