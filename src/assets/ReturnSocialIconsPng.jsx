// import contact icons

import call from "./socialLink/phone.png";
import contact from "./socialLink/contacts.png";
import text from "./socialLink/text.png";
import whatsapp from "./socialLink/whatsapp.png";
import email from "./socialLink/email.png";

// import social icons

import instagram from "./socialLink/instagram.png";
import facebook from "./socialLink/facebook.png";
import tiktok from "./socialLink/tiktok.png";
import twitter from "./socialLink/x.png";
import Etsy from "./socialLink/etsy.png";
import linkedin from "./socialLink/linkedin.png";
import yelp from "./socialLink/yelp.png";
import pinterest from "./socialLink/pinterest.png";
import youtube from "./socialLink/youtube.png";
import link from "./socialLink/link.png";
import snapchat from "./socialLink/snapchat.png";
import gallery from "./socialLink/gallery.png";
import applink from "./socialLink/applink.png";
import pdf from "./socialLink/pdf.png";
import onlyfans from "./socialLink/onlyfans.png";

import location from "./socialLink/location.png";
import twitch from "./socialLink/twitch.png";
import thread from "./socialLink/thread.png";
import discord from "./socialLink/discord.png";
import zelle from "./socialLink/zelle.png";
import openSea from "./socialLink/openSea.png";
// import music icons
import spotify from "./socialLink/spotify.png";

import applemusic from "./socialLink/applemusic.png";
import soundcloud from "./socialLink/soundcloud.png";
import itunes from "./socialLink/itunes.png";

// import payment icons

import cashapp from "./socialLink/cashapp.png";
import paypal from "./socialLink/paypal.png";

// import payment icons

import website from "./socialLink/link.png";
import venmo from "./socialLink/venmo.png";
import calendly from "./socialLink/calendly.png";
import reviews from "./socialLink/review.png";

// import pinterest from './socialLink/pinterest.png'
// import youtube from './socialLink/twitter.png'

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
  {
    name: "Spotify",
    img: spotify,
    placeholder: "Spotify link*",
  },
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

export let returnPngIcons = (id) => {
  if (id === 1) {
    return contact;
  } else if (id === 2) {
    return call;
  } else if (id === 3) {
    return email;
  } else if (id === 4) {
    return text;
  } else if (id === 5) {
    return whatsapp;
  } else if (id === 6) {
    return location;
  } else if (id === 15) {
    return snapchat;
  } else if (id === 14) {
    return facebook;
  } else if (id === 11) {
    return instagram;
  } else if (id === 17) {
    return twitter;
  } else if (id === 16) {
    return youtube;
  }
  //   else if (id === 42) {
  //     return Etsy;
  //   }
  else if (id === 18) {
    return pinterest;
  } else if (id === 13) {
    return tiktok;
  } else if (id === 12) {
    return linkedin;
  } else if (id === 19) {
    return onlyfans;
  } else if (id === 20) {
    return link;
  } else if (id === 22) {
    return spotify;
  } else if (id === 24) {
    return applemusic;
  } else if (id === 29) {
    return gallery;
  } else if (id === 27) {
    return itunes;
  } else if (id === 28) {
    return pdf;
  } else if (id === 31) {
    return cashapp;
    // cashapp
  } else if (id === 32) {
    return paypal;
  } else if (id === 41) {
    return calendly;
  } else if (id === 21) {
    return website;
  } else if (id === 23) {
    return soundcloud;
  } else if (id === 33) {
    return venmo;
  } else if (id === 42) {
    return Etsy;
  }

  // Text 26
  else if (id === 43) {
    return yelp;
  } else if (id === 44) {
    return applink;
  } else if (id === 45) {
    return reviews;
  } else if (id === 46) {
    return discord;
  } else if (id === 47) {
    return twitch;
  } else if (id === 48) {
    return thread;
  } else if (id === 49) {
    return openSea;
  } else if (id === 50) {
    return zelle;
  }
  // venmo 16
};
