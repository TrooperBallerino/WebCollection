"use strict";

import { tryRequest } from "./general.js"

/*  Hover Functions  */
const discImage = document.querySelector("[data-addon-holder]");
const discDesc = document.querySelector("[data-addon-caption]");

discImage.addEventListener("mouseenter", o => discDesc.classList.toggle("active"));
discImage.addEventListener("mouseleave", o => discDesc.classList.toggle("active"));

/*  Random Content  */
const random_item = document.querySelector("[data-addon-holder]");

function setRandomProps(requestResponse) 
{
  let n = Math.floor(Math.random() * (requestResponse.length - 3)) + 3;
  
  let str1 = requestResponse[n].Artist.replace(/ +/g, "");
  let str2 = requestResponse[n].Name.replace(/ +/g, "");
  let address = str1.charAt(0).toLowerCase() + str1.slice(1) + "-" + str2.charAt(0).toLowerCase() + str2.slice(1);
  
  (random_item.querySelector("[data-addon-img]")).src = `./Assets/Images/records/${address}.jpg`;
  (random_item.querySelector("[data-addon-img]")).alt = requestResponse[n].Name;
  (random_item.querySelector("[data-addon-album-name]")).textContent = requestResponse[n].Name;
  (random_item.querySelector("[data-addon-artist-name]")).textContent = requestResponse[n].Artist;
  (random_item.querySelector("[data-addon-album-genre]")).textContent = requestResponse[n].Genre;
  (random_item.querySelector("[data-addon-album-format]")).textContent = requestResponse[n].MacroFormat + " " + requestResponse[n].Format;
  (random_item.querySelector("[data-addon-album-label]")).textContent = requestResponse[n].Label;
  (random_item.querySelector("[data-addon-album-description]")).textContent = requestResponse[n].Description;
}

tryRequest(setRandomProps);