"use strict";

import { tryRequest } from "../general.js"

const vinylSection = document.querySelector("[data-vinyl-container]");
const casSection = document.querySelector("[data-cassette-container]");
const cdSection = document.querySelector("[data-CD-container]");

const createSections = function(requestResponse)
{
  const createItem = function(n, section)
  {
    /*  Set Address  */
    let str1 = requestResponse[n].Artist.replace(/ +/g, "");
    let str2 = requestResponse[n].Name.replace(/ +/g, "");
    let address = str1.charAt(0).toLowerCase() + str1.slice(1) + "-" + str2.charAt(0).toLowerCase() + str2.slice(1);

    /*  Full Collection Item Div  */
    let itemDiv = document.createElement("div");
    section.appendChild(itemDiv);
    itemDiv.classList.add("full-collection-item");

    /*  Album Cover Figure  */
    let cover = document.createElement("figure");
    cover.style.setProperty("--height", 500);
    cover.style.setProperty("--width", 575);
    cover.classList.add("cover");
    itemDiv.appendChild(cover);
    
    /*  Album Image Img  */    
    let albumImg = document.createElement("img");
    albumImg.height = 500;
    albumImg.width = 575;
    albumImg.src = `./Assets/Images/records/${address}.jpg`;
    albumImg.alt = requestResponse[n].alt;
    albumImg.classList.add("cover-img");
    cover.appendChild(albumImg);

    /*  Album Caption Div  */
    let albumCaptionDiv = document.createElement("div");
    itemDiv.appendChild(albumCaptionDiv);
    albumCaptionDiv.classList.add("album-caption");

    /*  Name Caption Div  */
    let nameDiv = document.createElement("div");
    let namePar = document.createElement("p");
    let name = document.createElement("p");
    namePar.textContent = "Name:";
    name.textContent = requestResponse[n].Name;
    nameDiv.classList.add("caption-div");
    namePar.classList.add("caption-span");
    albumCaptionDiv.appendChild(nameDiv);
    nameDiv.appendChild(namePar);
    nameDiv.appendChild(name);

    /*  Artist Caption Div  */
    let artistDiv = document.createElement("div");
    let artistPar = document.createElement("p");
    let artist = document.createElement("p");
    artistPar.textContent = "Artist:";
    artist.textContent = requestResponse[n].Artist;
    artistDiv.classList.add("caption-div");
    artistPar.classList.add("caption-span");
    albumCaptionDiv.appendChild(artistDiv);
    artistDiv.appendChild(artistPar);
    artistDiv.appendChild(artist);
    
    /*  Genre Caption Div  */
    let genreDiv = document.createElement("div");
    let genrePar = document.createElement("p");
    let genre = document.createElement("p");
    genrePar.textContent = "Genre:";
    genre.textContent = requestResponse[n].Genre;
    genreDiv.classList.add("caption-div");
    genrePar.classList.add("caption-span");
    albumCaptionDiv.appendChild(genreDiv);
    genreDiv.appendChild(genrePar);
    genreDiv.appendChild(genre);

    /*  Format Caption Div  */
    let formatDiv = document.createElement("div");
    let formatPar = document.createElement("p");
    let format = document.createElement("p");
    formatPar.textContent = "Format:";
    format.textContent = requestResponse[n].MacroFormat + " " + requestResponse[n].Format;
    formatDiv.classList.add("caption-div");
    formatPar.classList.add("caption-span");
    albumCaptionDiv.appendChild(formatDiv);
    formatDiv.appendChild(formatPar);
    formatDiv.appendChild(format);

    /*  Label Caption Div  */
    let labelDiv = document.createElement("div");
    let labelPar = document.createElement("p");
    let label = document.createElement("p");
    labelPar.textContent = "Label:";
    label.textContent = requestResponse[n].Label;
    labelDiv.classList.add("caption-div");
    labelPar.classList.add("caption-span");
    albumCaptionDiv.appendChild(labelDiv);
    labelDiv.appendChild(labelPar);
    labelDiv.appendChild(label);

    /*  Description Caption  */
    let desc = document.createElement("p");
    desc.textContent = requestResponse[n].Description;
    desc.classList.add("description");
    albumCaptionDiv.appendChild(desc);
  }


  for(let i = 0; i < requestResponse.length; i++)
  {
    if(requestResponse[i].MacroFormat === "Vinyl") { createItem(i, vinylSection) }
    if(requestResponse[i].MacroFormat === "Cassette") { createItem(i, casSection) }
    if(requestResponse[i].MacroFormat === "CD") { createItem(i, cdSection)}
  }


}

tryRequest(createSections);